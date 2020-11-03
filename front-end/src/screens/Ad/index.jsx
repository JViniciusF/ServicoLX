import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles.js';

export default function Ad({ navigation }) {
    return (
        <View style={styles.container}>
            <Text title='Ad'>Ad</Text>
        </View>
    )
}