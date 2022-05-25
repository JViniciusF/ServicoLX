import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../../utils/styles.js' 
import { removeData, retrieveData } from '../../service/storage';
import { getAllAdsPaginated } from '../../service/adService'

import AdCard from '../../components/AdCard';


export default function Home({ navigation }) {
    const [ads, setAds] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        async function _init () {
            setLoading(true)
            
            let res = await retrieveData('@user');
            if (!res) {
                navigation.navigate('Login');
            } else {
                setAds(await getAllAdsPaginated())
            }
        
            setLoading(false)
        };
               
        _init();
        
        
    }, [ navigation ])

    const searchByFilter = value => {
        navigation.navigate("Ad", { value })
    }
    
    return (
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <View style={styles.headerWorkers}>
                    <Text style = {styles.titleWorkers}>WORKER'S</Text>
                </View>
            </View>
            <View style = {[styles.chatBox]}>
                { loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='red' />
                    </View>
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
                                        <AdCard key={item._id} item={item} onPressCard={searchByFilter} ></AdCard>
                                    )
                                }
                            />
                        )}
                    />
                }
            </View>
        </View>
    );
}