import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';


export default function AdCard({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text title="1">Teste1</Text>
            </View>
            <View style={styles.title}>
                <Text title="2">Teste2</Text>
            </View>
        </View>
    )
}