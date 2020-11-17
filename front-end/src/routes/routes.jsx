// lib imports
import React,{ useEffect, useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EvilIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

// Screens - APPStack
import Login from '../screens/Login';
import Ad from '../screens/Ad';
import SearchCategory from '../screens/SearchCategory'

// Screens - TabNavigation
import Config from '../screens/Config';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Chat from '../screens/Chat';
import Notify from '../screens/Notify';

// Screens - DrawerNavigation
import MyAds from '../screens/MyAds';
import AddAds from '../screens/AddAds';
import Favorites from '../screens/Favorites';
import Categories from '../screens/Categories';

const AppStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const TabStack = createBottomTabNavigator();


function Tab() {
    return (
        <TabStack.Navigator lazy={true} initialRouteName="Home" tabBarOptions={{ showLabel:false, activeTintColor:'black' }}>
            <TabStack.Screen name="Config" component={ Config } options={{ tabBarIcon: ({color}) => (<EvilIcons name="gear" size={40} color={color} />)}} />
            <TabStack.Screen name="Search" component={ Search } options={{ tabBarIcon: ({color}) => (<Fontisto name="zoom" size={35} color={color} />)}} />
            <TabStack.Screen name="Home" component={ Home } options={{ tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home-outline" size={45} color={color} />)}} />
            <TabStack.Screen name="Chat" component={ Chat } options={{ tabBarIcon: ({color}) => (<MaterialCommunityIcons name="chat-outline" size={40} color={color} />)}} />
            <TabStack.Screen name="Notify" component={ Notify } options={{ tabBarIcon: ({color}) => (<Fontisto name="bell" size={40} color={color} />)}} />
        </TabStack.Navigator>
    )
}

function Root() {
    return (
        <DrawerStack.Navigator lazy={true} initialRouteName="Home" drawerType="slide" drawerStyle={{ width: 240 }}>
            <DrawerStack.Screen name="Home" component={ Tab } options={{ title:"Página Inicial", drawerIcon: ({ color }) => (<AntDesign name="export" size={24} color={color} />) }} />
            <DrawerStack.Screen name="MyAds" component={ MyAds } options={{ title:"Meus anúncios", drawerIcon: ({ color }) => (<MaterialCommunityIcons name="file-document-edit-outline" size={24} color={color} />) }} />
            <DrawerStack.Screen name="AddAds" component={ AddAds } options={{ title:"Inserir anúncios", drawerIcon: ({ color }) => (<Entypo name="megaphone" size={24} color={color} />) }} />
            <DrawerStack.Screen name="Favorites" component={ Favorites } options={{ title:"Favoritos", drawerIcon: ({ color }) => (<AntDesign name="staro" size={24} color={color} />) }} />
            <DrawerStack.Screen name="Categories" component={ Categories } options={{ title:"Categorias", drawerIcon: ({ color }) => (<AntDesign name="bars" size={24} color={color} />) }} />
        </DrawerStack.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator lazy={true} initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="Root" component={ Root } />
                <AppStack.Screen name="Ad" component={ Ad } />
                <AppStack.Screen name="SearchCategory" component={ SearchCategory } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}