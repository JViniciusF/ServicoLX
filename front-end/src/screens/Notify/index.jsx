import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../../utils/styles.js' 

export default function Notify({ navigation }) {
    return (
        <View style={styles.container}>
            <Text title='Notify'>Notify</Text>
        </View>
    )
}