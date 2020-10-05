import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SideMenu from 'react-native-side-menu'

class SideBar {
  render(){
    return (
      <View style={[ styles.container, { backgroundColor: '#fff' } ]}>
        <Text> 
        <Icon name="rocket" size={30} color="#900" />
        Conteúdo side bar
        </Text>
      </View>
    );
  } 
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
function LeftTab(){
  return(
    <SideMenu name = "sideMenu" component={SideBar}>
    </SideMenu>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
      <LeftTab/>

    </NavigationContainer>
  );
}

