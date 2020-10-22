import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';
import { removeData, retrieveData } from '../../service/storage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Home({ navigation }) {

    useEffect(() => {
        (async ()=> {
            let user = await retrieveData('@user')
            if (!user) {
                navigation.navigate('Login');
            }
        })()
    })
    
    return (
        <>
            <Header />
            <View style={styles.container}>
                <FlatList 
                    data={[1,2,3,4,5,6,7,8,9,10]}
                    keyExtractor={data => String(data)}
                    renderItem={() => (
                        <Text style={{fontSize:50}} title="teste">Teste</Text>
                    )}
                />
                
            </View>
            <Footer />
        </>
    );
}