import React,{ useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { styles } from './styles.js';


export default function AdCard(props) {

    return (
        <View style={styles.container}>
            <TouchableHighlight 
                onPress={() => props.onPressCard(props.item)}
                style={styles.card}>
                <Image style={styles.tinyLogo}
                    source={{
                        uri: `data:image/png;base64,${props.item.images}`
                    }}
                />
            </TouchableHighlight>
            <View style={styles.title}>
                <Text>{props.item.name}</Text>
            </View>
        </View>
    )
}