import React,{ useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles.js';
import { FontAwesome } from '@expo/vector-icons'; 


export default function Header() {
    return (
        <View style={styles.container}>
            <FontAwesome name="bars" size={45} color="black" />
        </View>
    );
}