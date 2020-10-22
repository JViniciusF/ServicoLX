
import React,{ useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { ActivityIndicator, Text, View, Button, Image, Alert, TouchableOpacity  } from 'react-native';
import { styles } from './styles.js'
import { registerUser }  from '../../service/account'
import { storeData, retrieveData } from '../../service/storage'

import * as Google from 'expo-google-app-auth';
import * as AppAuth from 'expo-app-auth';

const ANDROID_CLIENT_ID = 
	'485194664644-5p5npuj3r3pk1jcv6b9918qbbuetqjn7.apps.googleusercontent.com'

export default function Login({ navigation }) {
	const [ isSigninInProgress, setIsSigninInProgress ] = useState(false);
	const [location, setLocation] = useState(null);
	const [ user, setUser ] = useState(null);
		 
	useEffect(() => {
		(async () => {
			let value = await retrieveData('@user')
			if (value) {
				navigation.navigate('Home');
			}
		})();

		(requestLocationPermission = async () => {
			let { status } = await Location.requestPermissionsAsync();

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
		})();
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

				let account = await registerUser({ user, address, coords })

				if (account) {

					let status = await storeData('@user', JSON.stringify(account))
					if (status)
						navigation.navigate('Home');

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

  return (
    <View style={styles.container}>
		{ isSigninInProgress && 
			<View style={styles.loading}>
				<ActivityIndicator size='large' color='red' />
			</View>
		}

		<View style={styles.containerLogo}>
			<Text title='Teste'>LOGO</Text>
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
