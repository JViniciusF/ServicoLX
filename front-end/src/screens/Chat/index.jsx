import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../../utils/styles.js' 

export default function Chat({ navigation }) {
    return (
        <View style={styles.card}>
            <Text title='Chat'>Chat</Text>
        </View>
    )
}