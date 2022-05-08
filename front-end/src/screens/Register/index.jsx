
import React,{ useState, useEffect} from 'react';
import * as Location from 'expo-location';
import getEnvVars from '../../../environment';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator, Text, View, Button, Image, Alert, TouchableOpacity  } from 'react-native';
import { styles } from '../../utils/styles.js'
import { registerUser,loginUser }  from '../../service/accountService'
import { storeData, retrieveData } from '../../service/storage'

// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from "@material-ui/core";

import * as Google from 'expo-google-app-auth';
import * as AppAuth from 'expo-app-auth';
import { TextInput } from 'react-native-gesture-handler';

const { ANDROID_CLIENT_ID } = getEnvVars(); 

export default function Login({ navigation }) {
	const [isSigninInProgress, setIsSigninInProgress ] = useState(false);
	const [location, setLocation] = useState(null);
	const [user,setUser ] = useState(null);
	const [email,setEmail] = useState(null)
	const [password,setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)

		 
	useEffect(() => {
		async function _init() {
			let value = await retrieveData('@user');
			if (value) {
				navigation.reset({index: 0, routes: [{name:'Root'}]});
			}
		};
		_init();
		
		async function requestMediaPermission(){
			try {
				let { status } = await ImagePicker.requestCameraPermissionsAsync();
				
				if (status !== 'granted') {
					Alert.alert(
						"Permissão de acesso à mídia",
						"Este aplicativo utiliza de acesso às fotos para trazer a melhor experiência, criando serviços com fotos a partir do seu dispositivo móvel!",
						[
							{ text: "OK", onPress: () => requestMediaPermission() }
						],
						{ cancelable: false }
					  );
				}
				
			} catch (error) {
				requestMediaPermission()
			}
		}

		async function requestLocationPermission() {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();
				
				if (status !== 'granted') {
					Alert.alert(
						"Permissão de localização",
						"Este aplicativo utiliza sua localização atual para trazer a melhor experiência, buscando serviços que estejam mais próximos do conforto do seu toque!",
						[
							{ text: "OK", onPress: () => requestLocationPermission() }
						],
						{ cancelable: false }
					  );
				}

				let location = await Location.getCurrentPositionAsync({});

				var { latitude, longitude } = location.coords;
				location.address = await Location.reverseGeocodeAsync({'latitude': latitude, 'longitude': longitude});
				
				setLocation(location);
			} catch (error) {
				requestLocationPermission()
			}
		};
		requestLocationPermission();
		requestMediaPermission();
	}, []);

	async function registerCall() {
		
		try {
			setIsSigninInProgress(true)

            let user = {'name':name,'email':email,'password':password,'lastName':lastName};
            let {address, coords} = location;
            let account = await registerUser({ user, address, coords })
            if (account){
				navigation.navigate('Login')
			}
            setIsSigninInProgress(false);
        
		} catch (e) {
			return { error: true };
		}
	}

  return (
    <View style={styles.body}>
		{ isSigninInProgress && 
			<View style={styles.loading}>
				<ActivityIndicator size='large' color='red' />
			</View>
		}

		<View style= {styles.loginOptions}>
            <TextInput
                placeholder='Nome'
                style={styles.loginInput}
                onChangeText={(text)=>{setName(text)}}
            />
            <TextInput
                placeholder='Sobrenome'
                style={styles.loginInput}
                onChangeText={(text)=>{setLastName(text)}}
            />
			<TextInput
				placeholder="Email"
				style={styles.loginInput}
				onChangeText={(text)=>{setEmail(text)}}
			/>
			<TextInput
				secureTextEntry = {true}
				minLength="6"
				placeholder='Senha'
				style={styles.loginInput}
				onChangeText={(text)=>{setPassword(text)}}
			/>
			<Button title = "Registrar" color="green" onPress={()=>{registerCall()}} disabled={isSigninInProgress}>
            </Button>

		</View>
		
    </View>
  )
}