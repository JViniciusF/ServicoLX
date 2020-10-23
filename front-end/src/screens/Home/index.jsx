import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { removeData, retrieveData } from '../../service/storage';

import AdCard from '../../components/AdCard';


export default function Home({ navigation }) {

    useEffect(() => {
        (async () => {
            let user = await retrieveData('@user')
            if (!user) {
                navigation.navigate('Login');
            }
        })()
    })
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={[1,2,3,4,5,6]}
                keyExtractor={data => String(data)}
                style={styles.flatListColumn}
                renderItem={() => (
                    <FlatList 
                        data={[1,2]}
                        keyExtractor={data => String(data)}
                        style={styles.flatListRow}
                        renderItem={() => (
                            <AdCard></AdCard>
                        )}
                    />
                )}
            />
        </View>
    );
}