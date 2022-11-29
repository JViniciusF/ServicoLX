
import React,{ useState, useEffect} from 'react';
import * as Location from 'expo-location';
import getEnvVars from '../../../environment';
import * as ImagePicker from 'expo-image-picker';
import { ActivityIndicator, Text, View, Button, Image, Alert, TouchableOpacity  } from 'react-native';
import { styles } from '../../utils/styles.js'
import { registerUser,loginUser, registerUserByGoogle, getGoogleAccountInfo }  from '../../service/accountService'
import { storeData, retrieveData } from '../../service/storage'

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AppAuth from 'expo-app-auth';
import { TextInput } from 'react-native-gesture-handler';

WebBrowser.maybeCompleteAuthSession();

const { ANDROID_CLIENT_ID,EXPO_CLIENT_ID } = getEnvVars(); 

export default function Login({ navigation }) {
	const [isSigninInProgress, setIsSigninInProgress ] = useState(false);
	const [location, setLocation] = useState(null);
	const [user,setUser ] = useState(null);
	const [email,setEmail] = useState(null)
	const [password,setPassword] = useState(null)

	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: EXPO_CLIENT_ID,
		androidClientId:ANDROID_CLIENT_ID,
		
	});
	
	useEffect(()=>{
		async function getUserData(){
			if(response?.type == "success"){
				accessToken = response.authentication.accessToken;
				if(accessToken){
					setIsSigninInProgress(true)	
					const userInfoResponse = await getGoogleAccountInfo(accessToken);
					if (userInfoResponse){
						let {address, coords} = location;
						let account = await registerUserByGoogle({ user:userInfoResponse, address, coords })
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
					}
				}
					
			}else {
				setIsSigninInProgress(false)
			}
		}
		
		getUserData()
	},[response])

	
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
		requestLocationPermission();
		requestMediaPermission();
		_init();
        

	}, []);

	
	async function loginCall(){
		try {
			setIsSigninInProgress(true)
			let user= { 'email': email, 'password': password};
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
    <View style={[styles.body,{backgroundColor:"#1877f2"}]}>
		{ isSigninInProgress && 
			<View style={styles.loading}>
				<ActivityIndicator size='large' color='red' />
			</View>
		}

		<View style={styles.containerLogo}>
			<Text style = {[styles.titleWorkers,{fontSize:30,}]}>WORKER'S</Text>
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
			<View style = {styles.loginButtons}>
				<Button title = "Entrar"  onPress={()=>{loginCall()}} disabled={isSigninInProgress}>
				</Button>
				<Button title = "Registrar" color="green" onPress={() => navigation.navigate('Register')}>
				</Button>
			</View>
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
					<Button style={styles.googleBtn} title='Sign in with google' onPress={()=>{ promptAsync()}}></Button>
				</View>
			</View>
			<View style={styles.disclaimer}>
				<Text style={{fontSize: 12}} title="teste">WORKER'S - Todos os direitos reservados</Text>
			</View>
		</View>
    </View>
  )
}