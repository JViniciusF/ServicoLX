import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';

export default function Favorites({ navigation }) {
    return (
        <View style={styles.container}>
            <Text title='Favorites'>Favorites</Text>
        </View>
    )
}