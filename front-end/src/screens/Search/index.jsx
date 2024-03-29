import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from '../../utils/styles.js' 

import { getAdsByFilterPaginated, getAllAdsPaginated} from '../../service/adService'
import AdCard from '../../components/AdCard'
import HeaderSearch from '../../components/HeaderSearch'


export default function Search({ navigation }) {
    const [ ads, setAds ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false)


    const searchByFilter = async (value, filtroPreco, filtroReputacao, filtroCotado) => {
        if (value) {
            setIsLoading(true)
            let list = await getAdsByFilterPaginated(value, filtroPreco, filtroReputacao, filtroCotado)
            setAds(list)
            setIsLoading(false)
        } else {
            setIsLoading(true)
            let list = await getAllAdsPaginated(filtroPreco, filtroReputacao, filtroCotado)
            setAds(list)
            setIsLoading(false)
        }
    }

    const onPressCard = async (value) => {
        navigation.navigate("Ad", { value })
    }

    return (
        <View style={styles.body}>
            <View style = {styles.searchHeader}>
                <HeaderSearch searchByFilter={searchByFilter} />
                { isLoading && 
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
                }
            </View>
            <View style = {styles.searchBody}>
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