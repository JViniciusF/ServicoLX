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

    const searchByFilter = item => {
        console.log(item)
        // navigation.navigate("Search", {filter: item.name})
    }
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={[1]}
                keyExtractor={data => String(data)}
                style={styles.flatListColumn}
                renderItem={({item}) => (
                    <FlatList 
                        data={[1]}
                        keyExtractor={data => String(data)}
                        style={styles.flatListRow}
                        renderItem={({item}) => (
                            <AdCard key={item._id} item={item} onPressCard={searchByFilter} ></AdCard>
                        )}
                    />
                )}
            />
        </View>
    );
}