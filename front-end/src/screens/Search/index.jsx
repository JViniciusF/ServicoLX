import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './styles.js';
import { Fontisto } from '@expo/vector-icons';
import { getAdsByFilterPaginated, getAdsByCategory} from '../../service/adService'
import AdCard from '../../components/AdCard'


export default function Search({ navigation, route }) {
    const [value, onChangeText] = useState('');
    const [ads, setAds] = useState(null);
    const [isSigninInProgress, setIsSigninInProgress] = useState(false)

    useEffect(() => {
        if (route.params) {
            onChangeText(route.params.filter)
            searchByCategory()
        }
    }, [ads])

    const searchByCategory = async () => {
        if (value) {
            setIsSigninInProgress(true)
            setAds(await getAdsByCategory(value))
            setIsSigninInProgress(false)
        }
    }

    const searchByFilter = async () => {
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
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TextInput
                        style={ styles.searchInput }
                        onChangeText={text => onChangeText(text)}
                        value={ value }
                    />
                    <TouchableHighlight 
                        onPress={() => searchByFilter()}
                        style={styles.iconInput}>
                        <Fontisto name="zoom" size={35} color={'black'} />
                    </TouchableHighlight>
                </View>
            </View>
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