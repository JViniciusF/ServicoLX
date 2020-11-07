import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles.js';

import { getAdsByFilterPaginated, getAdsByCategoryPaginated} from '../../service/adService'
import AdCard from '../../components/AdCard'
import HeaderSearch from '../../components/HeaderSearch'


export default function Search({ navigation, route }) {
    const [ ads, setAds ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false)

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
            setIsLoading(true)
            setAds(await getAdsByCategoryPaginated(value))
            setIsLoading(false)
        }
    }

    const searchByFilter = async (value) => {
        if (value) {
            setIsLoading(true)
            let list = await getAdsByFilterPaginated(value)
            setAds(list)
            setIsLoading(false)
        }
    }

    const onPressCard = async (value) => {
        navigation.navigate("Ad", { value })
    }

    return (
        <View style={styles.container}>
            <HeaderSearch searchByFilter={searchByFilter} />
            { isLoading && 
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
		    }
            <View style={styles.body}>
                { !isLoading && !ads &&
                    <Text style={styles.bodyText}>
                        Utilize o campo acima e faça uma pesquisa.
                    </Text>
                }
                { (!isLoading && ads && ads.length === 0) &&
                    <Text style={styles.bodyText}>
                        Não foram encontrados Serviços, tente usar palavras chaves.
                    </Text>
                }
                { (!isLoading && ads && ads.length > 0) &&
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