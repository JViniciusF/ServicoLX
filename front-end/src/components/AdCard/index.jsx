import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { styles } from './styles.js';


export default function AdCard(props) {

    return (
        <View style={styles.container}>
            <TouchableHighlight 
                onPress={() => props.searchByFilter(props.item.name)}
                style={styles.card}>
                <Image style={styles.tinyLogo}
                    source={{
                        uri: props.item.img,
                    }}
                />
            </TouchableHighlight>
            <View style={styles.title}>
                <Text>{props.item.name}</Text>
            </View>
        </View>
    )
}