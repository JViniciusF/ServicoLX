import React,{ useState, useEffect} from 'react';
import { FlatList, View, ActivityIndicator, Alert, Text } from 'react-native';
import { styles } from './styles.js';
import HeaderSearch from '../../components/HeaderSearch';
import AdCard from '../../components/AdCard';
import { retrieveData } from '../../service/storage';
import { getAllAdsByUserPaginated, getAdsByUserAndFilterPaginated } from '../../service/adService';


export default function MyAds({ navigation }) {
    const [ ads, setAds ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ userId, setUserId ] = useState(null);

    useEffect(() => {
        async function _init() {
            setIsLoading(true)
            
            let userId = JSON.parse(await retrieveData('@user'))._id
            setUserId(userId)

            let services = await getAllAdsByUserPaginated({ userId });
            setAds(services);

            setIsLoading(false)
        };
        _init();
    }, [])

    const searchByFilter = async (value) => {
        setIsLoading(true)
        let list = await getAdsByUserAndFilterPaginated({ userId, filter: value })
        if (!list) {
            Alert.alert(
                "Pesquisa falhou...",
                "Não foram encontrados serviços para as palavras chaves informadas, tente novamente",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }
        setAds(list)
        setIsLoading(false)
    }

    const onClickCard = async (value) => {
        navigation.navigate("Ad", { value })
    }

    return (
        <View style={styles.container}>
            { isLoading && 
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
		    }
            <HeaderSearch searchByFilter={searchByFilter} />
            { (!isLoading && ads && ads.length === 0) ?
                <Text style={styles.bodyText}>
                    Não foram encontrados Serviços, tente usar palavras chaves.
                </Text>
                :
                <></>
            }
            { (ads && ads.length > 0) &&
                <FlatList
                    style={styles.flatListColumn}
                    data={ads}
                    keyExtractor={item => `${item[0]._id}${Date.now()}`}
                    renderItem={({ item }) => (
                        <FlatList 
                            style={styles.flatListRow}
                            data={item}
                            keyExtractor={item => item._id}
                            renderItem={({ item }) => (
                                        <AdCard key={item._id} item={item} onPressCard={onClickCard} ></AdCard>
                                    )
                            }
                        />
                    )}
                />
            }
        </View>
    )
}