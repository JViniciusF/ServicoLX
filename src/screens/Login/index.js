
import React,{ useState, useEffect} from 'react';
import { Text, View, Button, Image } from 'react-native';
import { styles } from './styles.js'

import * as Google from 'expo-google-app-auth';
import * as AppAuth from 'expo-app-auth';

const ANDROID_CLIENT_ID = 
	'485194664644-5p5npuj3r3pk1jcv6b9918qbbuetqjn7.apps.googleusercontent.com'

export default function Login() {
	const [ isSigninInProgress, setIsSigninInProgress ] = useState(false);
	const [ user, setUser ] = useState(null);
		 
	async function signInWithGoogleAsync() {
		try {
			const result = await Google.logInAsync({
				androidClientId: ANDROID_CLIENT_ID,
				// scopes: ['profile', 'email'],
			});
	
			if (result.type === 'success') {
                console.log(result)
                // Var como vamos salvar os dados do google no localstorage do expo
                // pegar o gps para complementar como endereço
				return result.accessToken;
			} else {
                // implementar toast bonitin https://docs.expo.io/versions/latest/react-native/toastandroid/
				return { cancelled: true };
			}
		} catch (e) {
			return { error: true };
		}
	}

  return (
    <View style={styles.container}>
        <View style={styles.googleBackground}>
            <Image 
                style={styles.tinyLogo}
                source={{
                    uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
                }}
            ></Image>
            <Button style={styles.googleBtn} title='Sign in with google' onPress={() => { signInWithGoogleAsync() }}></Button>
        </View>
    </View>
  )
}
