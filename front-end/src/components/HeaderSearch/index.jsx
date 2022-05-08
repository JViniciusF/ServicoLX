import React,{ useState, useEffect} from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import { styles } from './styles.js';
import { Fontisto } from '@expo/vector-icons';


export default function HeaderSearch(props) {
    const [value, onChangeText] = useState('');
    const [filtroPreco, setFiltroPreco] = useState('Preço')
    const [filtroReputacao, setFiltroReputacao] = useState('Reputação')
    const [filtroCotado, setFiltroCotado] = useState('Cotado')

    const FilterPrice = () => {
        if (filtroPreco == 'Preço') {
            setFiltroPreco('Preço ^')
        } else if (filtroPreco == 'Preço ^') {
            setFiltroPreco('Preço v')
        } else {
            setFiltroPreco('Preço')
        }
    }

    const FilterReputation = () => {
        if (filtroReputacao == 'Reputação') {
            setFiltroReputacao('Reputação ^')
        } else if (filtroReputacao == 'Reputação ^') {
            setFiltroReputacao('Reputação v')
        } else {
            setFiltroReputacao('Reputação')
        }
    }

    const FilterQuotation = () => {
        if (filtroCotado == 'Cotado') {
            setFiltroCotado('Cotado ^')
        } else if (filtroCotado == 'Cotado ^') {
            setFiltroCotado('Cotado v')
        } else {
            setFiltroCotado('Cotado')
        }
    }
    
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TextInput
                    style={ styles.searchInput }
                    onChangeText={text => onChangeText(text)}
                    placeholder = "Pesquisar"
                    value={ value }
                />
                <TouchableHighlight 
                    onPress={() => props.searchByFilter(value, filtroPreco, filtroReputacao, filtroCotado)}
                    style={styles.iconInput}>
                    <Fontisto name="zoom" size={35} color={'black'} />
                </TouchableHighlight>
            </View>
            <View style={styles.headerFilter}>
                <TouchableHighlight 
                    onPress={() => FilterPrice()}
                    style={filtroPreco == 'Preço' ? styles.filterText : (filtroPreco == 'Preço ^' ? styles.filterTextMajor : styles.filterTextMinor ) }>
                    <Text style={ filtroPreco === 'Preço' ? {color: '#000000'} : {color: '#F5F5F5'}}>
                        { filtroPreco }
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => FilterReputation()}
                    style={filtroReputacao == 'Reputação' ? styles.filterText : (filtroReputacao == 'Reputação ^' ? styles.filterTextMajor : styles.filterTextMinor ) }>
                    <Text style={ filtroReputacao === 'Reputação' ? {color: '#000000'} : {color: '#F5F5F5'}}> 
                        { filtroReputacao } 
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={() => FilterQuotation()}
                    style={filtroCotado == 'Cotado' ? styles.filterText : (filtroCotado == 'Cotado ^' ? styles.filterTextMajor : styles.filterTextMinor ) }>
                    <Text style={ filtroCotado === 'Cotado' ? {color: '#000000'} : {color: '#F5F5F5'}}> 
                        { filtroCotado }
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}