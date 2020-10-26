import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { removeData, retrieveData } from '../../service/storage';
import { getAllAds } from '../../service/adService';

import AdCard from '../../components/AdCard';


export default function Home({ navigation }) {
    const [ads, setAds] = useState([])

    useEffect(() => {
        async function _init () {
            let res = await retrieveData('@user');
            if (!res) {
                navigation.navigate('Login');
            }
        };
        _init();
    }, [])
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={[1,2,3,4,5,6]}
                keyExtractor={data => String(data)}
                style={styles.flatListColumn}
                renderItem={({item}) => (
                    <FlatList 
                        data={[1,2]}
                        keyExtractor={data => String(data)}
                        style={styles.flatListRow}
                        renderItem={({item}) => (
                            <AdCard props={item}></AdCard>
                        )}
                    />
                )}
            />
        </View>
    );
}