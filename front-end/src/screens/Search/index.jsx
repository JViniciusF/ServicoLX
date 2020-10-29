import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import { Fontisto } from '@expo/vector-icons';
import { getAdsByFilter, getAdsByCategory} from '../../service/adService'


export default function Search({ navigation, route }) {
    const [value, onChangeText] = useState('');
    const [ads, setAds] = useState(null);
    const [isSigninInProgress, setIsSigninInProgress] = useState(false)

    useEffect(() => {
        if (route.params) {
            onChangeText(route.params.filter)
            searchByCategory()
        }
    }, [])

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
            setAds(await getAdsByFilter(value))
            setIsSigninInProgress(false)
        }
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
                { (ads && ads.length > 0) ?
                    <>
                        <Text>body1</Text>
                        <Text>body2</Text>
                    </>
                    :
                    <></>
                }
            </View>
        </View>
    )
}