import React,{ useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { Text, View, ScrollView, ActivityIndicator, Image, TouchableHighlight, Alert  } from 'react-native';
import { styles } from '../../utils/styles.js' 
import { retrieveData, removeData } from '../../service/storage';
import { setNewLocation } from '../../service/accountService';


export default function Config({ navigation }) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ user, setUser ] = useState(false);
    const [ location, setLocation ] = useState(null);

    async function _init(){
        setIsLoading(true)
        setUser(JSON.parse(await retrieveData('@user')))
        setIsLoading(false)
    };

    useEffect(() => {

        _init();
        
    }, []);

    async function locationHandle() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted') {
                Alert.alert(
                    "Permissão de localização",
                    "Este aplicativo utiliza sua localização atual para trazer a melhor experiência, buscando serviços que estejam mais próximos do conforto do seu toque!",
                    [
                        { text: "OK", onPress: () => locationHandle() }
                    ],
                    { cancelable: false }
                  );
            }

            let location = await Location.getCurrentPositionAsync({});

            var { latitude, longitude } = location.coords;
            location.address = await Location.reverseGeocodeAsync({'latitude': latitude, 'longitude': longitude});
            
            let {address, coords} = location;

            setLocation(location);

            let newUser = await setNewLocation({ userId: user._id, address, coords })
            setUser(newUser)
        } catch (error) {
            locationHandle()
        }
    };
    
    const locationChange = async () => {
        setIsLoading(true)
        await locationHandle();
        _init();
        setIsLoading(false)
    }

    const changeCurrentLocation = () => {
        Alert.alert(
            "Alterar localização atual",
            "Ao aceitar, o celular irá utilizar sua localização atual para sobreescrever o endereço cadastrado, deseja prosseguir?",
            [
                {
                    text: "Cancel",
                },
                { 
                    text: "Alterar", onPress: () => locationChange() 
                }
            ],
            { cancelable: false }
        );
    }

    const logout = async () => {
        Alert.alert(
            "Sair da conta",
            "Deseja deslogar de sua conta atual?",
            [
                {
                    text: "Cancel",
                },
                { 
                    text: "Logout", onPress: async () => {
                        await removeData('@user');
                        navigation.navigate('Login');
                    }
                }
            ],
            { cancelable: false }
        );

        
    }

    return (
        <View style={styles.body}>
            <View style={styles.configHeaderContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.tinyPhoto}
                        source={{
                        uri: user ? user.avatarUrl : 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            </View>
            { isLoading &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            }{
                <ScrollView style={styles.scroll}>

                    <View style={styles.card}>
                        <View style = {styles.cardHeader}>
                            <Text style={ styles.label }>Meus Dados</Text>
                        </View>
                        <View style = {styles.containerRow}>

                            <View style = {styles.containerLeft}>

                                <Text style={ styles.label }>Nome</Text>
                                <Text style={ styles.input }>{user.name} {user.lastName}</Text>

                                <Text style={ styles.label }>E-mail</Text>
                                <Text style={ styles.input }>{user.email}</Text>
                            </View>
                        </View>
                    </View>
                    { !user.address ?
                            <View style={styles.loading}>
                                <ActivityIndicator size='large' color='red' />
                            </View>
                            :                 
                            <View style={styles.card}>
                                <View style = {styles.cardHeader}>
                                    <Text style={ styles.label }>Endereço</Text>
                                </View>
                                    <View style={styles.containerRow}>
                                        <View style={styles.containerLeft}>
                                            
                                            <Text style={ styles.label }>CEP</Text>
                                            <Text style={ styles.input }>{user.address[0].postalCode}</Text>

                                            <Text style={ styles.label }>Logradouro</Text>
                                            <Text style={ styles.input }>{user.address[0].street}, {user.address[0].number}</Text>

                                            <Text style={ styles.label }>Bairro</Text>
                                            <Text style={ styles.input }>{user.address[0].district}</Text>

                                            <Text style={ styles.label }>Cidade</Text>
                                            <Text style={ styles.input }>{user.address[0].city} - {user.address[0].state}</Text>
                                        </View>
                                    </View>
                            </View>
                    }
                    <View style = {styles.card}>
                        <View style = {styles.containerCenter}>

                        
                            <TouchableHighlight 
                                onPress={() => changeCurrentLocation()}
                                underlayColor="#DDDDDD"
                            >
                                <View style={styles.locationButton}>
                                    <Text style={styles.locationButtonText}>{`Alterar minha localização atual`}</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight 
                                onPress={() => logout()}
                                underlayColor="#DDDDDD"
                            >
                                <View style={styles.logoutButton}>
                                    <Text style={styles.logoutButtonText}>{`Sair`}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    )
}