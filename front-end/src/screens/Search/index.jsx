import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles.js';

import { getAdsByFilterPaginated, getAdsByCategoryPaginated} from '../../service/adService'
import AdCard from '../../components/AdCard'
import HeaderSearch from '../../components/HeaderSearch'


export default function Search({ navigation, route }) {
    const [ads, setAds] = useState(null);
    const [isSigninInProgress, setIsSigninInProgress] = useState(false)

    useEffect(() => {
        const category_init = async () => {
            if (route.params) {
                await onChangeText(route.params.filter)
                searchByCategory()
            };

        };
        category_init();
    }, [ads])

    const searchByCategory = async () => {
        if (value) {
            setIsSigninInProgress(true)
            setAds(await getAdsByCategoryPaginated(value))
            setIsSigninInProgress(false)
        }
    }

    const searchByFilter = async (value) => {
        if (value) {
            setIsSigninInProgress(true)
            let list = await getAdsByFilterPaginated(value)
            setAds(list)
            setIsSigninInProgress(false)
        }
    }

    const onPressCard = async (item) => {
        console.log(item)
    }

    return (
        <View style={styles.container}>
            { isSigninInProgress && 
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
		    }
            <HeaderSearch searchByFilter={searchByFilter} />
                <View style={styles.body}>
                    { !ads &&
                        <Text style={styles.bodyText}>
                            Utilize o campo acima e faça uma pesquisa.
                        </Text>
                    }
                    { (ads && ads.length === 0) ?
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
                            renderItem={({item}) => (
                                <FlatList 
                                    data={item}
                                    keyExtractor={item => item._id}
                                    style={styles.flatListRow}
                                    renderItem={({item}) => 
                                        (
                                            <AdCard key={item._id} item={item} onPressCard={onPressCard} ></AdCard>
                                        )
                                    }
                                />
                            )}
                        />
                    }
                </View>
        </View>
    )
}