
import React,{ useState, useEffect} from 'react';
import * as Location from 'expo-location';
import getEnvVars from '../../../environment';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator, Text, View, Button, Image, Alert, TouchableOpacity  } from 'react-native';
import { styles } from '../../utils/styles.js'
import { registerUser,loginUser, registerUserByGoogle }  from '../../service/accountService'
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

		 
	useEffect(() => {
		async function _init() {
			let value = await retrieveData('@user');
			if (value) {
				navigation.reset({index: 0, routes: [{name:'Root'}]});
			}
		};
		
		
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
		_init();
		requestLocationPermission();
		requestMediaPermission();
        

	}, []);

	async function signInWithGoogleAsync() {
		
		try {
			setIsSigninInProgress(true)

			const result = await Google.logInAsync({
				androidClientId: ANDROID_CLIENT_ID,
			});
			
			if (result.type === 'success') {
				let { user } = result;
				let {address, coords} = location;
				
				let account = await registerUserByGoogle({ user, address, coords })
				if (account) {
					let status = await storeData('@user', JSON.stringify(account))
					if (status)
						navigation.reset({index: 0, routes: [{name:'Root'}]});
				} else {
					Alert.alert(
						"Falha no login",
						"O aplicativo utiliza suas credências da conta google para poder logar/se cadastrar, tenha certeza de estar conectado à internet, reinicie o aplicativo e tente novamente",
						[
							{ text: "OK"}
						],
						{ cancelable: false }
					);
				}
				setIsSigninInProgress(false);
			} else {
				// implementar toast bonitin https://docs.expo.io/versions/latest/react-native/toastandroid/
				setIsSigninInProgress(false)
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
		}
	}
	
	async function loginCall(){
		try {
			setIsSigninInProgress(true)
			let user= { 'email': email, 'password': password};
			console.log(user);
			let account = await loginUser(user);
			if (account) {
				let status = await storeData('@user', JSON.stringify(account))
				if (status)
					navigation.reset({index: 0, routes: [{name:'Root'}]});
			} else {
				Alert.alert(
					"Falha no login",
					"O aplicativo utiliza suas credências da conta google para poder logar/se cadastrar, tenha certeza de estar conectado à internet, reinicie o aplicativo e tente novamente",
					[
						{ text: "OK"}
					],
					{ cancelable: false }
				);
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

		<View style={styles.containerLogo}>
			<Text title='Teste'>LOGO</Text>
		</View>
		<View style= {styles.loginOptions}>
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
			<Button title = "Entrar" color="green" onPress={()=>{loginCall()}} disabled={isSigninInProgress}>
            </Button>
            <Button title = "Registrar" onPress={() => navigation.navigate('Register')}>
            </Button>
		</View>
		<View style={styles.loginOptions}>
			<View style={styles.googleBackground}>
				<View style={styles.googleSet}>
					<Image 
						style={styles.tinyLogo}
						source={{
							uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
						}}
					></Image>
					<Button style={styles.googleBtn} title='Sign in with google' onPress={() => { signInWithGoogleAsync() }}></Button>
				</View>
			</View>
			<View style={styles.disclaimer}>
				<Text style={{fontSize: 12}} title="teste">ServiceLX - Todos os direitos reservados</Text>
			</View>
		</View>
    </View>
  )
}