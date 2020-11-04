import React,{ useState, useEffect} from 'react';
import { TextInput, View, TouchableHighlight } from 'react-native';
import { styles } from './styles.js';
import { Fontisto } from '@expo/vector-icons';


export default function HeaderSearch(props) {
    const [value, onChangeText] = useState('');

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TextInput
                    style={ styles.searchInput }
                    onChangeText={text => onChangeText(text)}
                    value={ value }
                />
                <TouchableHighlight 
                    onPress={() => props.searchByFilter(value)}
                    style={styles.iconInput}>
                    <Fontisto name="zoom" size={35} color={'black'} />
                </TouchableHighlight>
            </View>
        </View>
    )
}