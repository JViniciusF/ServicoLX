import React,{ useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles.js';
import { EvilIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View style={styles.container}>
            <EvilIcons name="gear" size={45} color="black" />
            <Fontisto name="zoom" size={45} color="black" />
            <FontAwesome name="user-o" size={45} color="black" />
            <MaterialCommunityIcons name="chat-outline" size={45} color="black" />
            <Fontisto name="bell" size={45} color="black" />
        </View>
    );
}