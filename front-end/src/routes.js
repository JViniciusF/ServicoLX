import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';


const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <AppStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login }/>
                <AppStack.Screen name="Home" component={ Home } options={{ title: 'Home' }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}