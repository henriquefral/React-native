import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import ArticlePhilosophy from './pages/article1';
import ArticleLiterature from './pages/article2';
import Development from './pages/Development';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();

const fetchFonts = () => 
  Font.loadAsync({
  'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  'BerkshireSwash-Regular': require('./assets/fonts/BerkshireSwash-Regular.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf')
  });
 

export default function App(){
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.warn}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          headerShown: false,

          }}
        name = "Home" 
        component ={Home}
        
        /> 
        <Stack.Screen
        name = "Artigo de filosofia" 
        component={ArticlePhilosophy} 
        options ={{
          title: 'PhiloWolf',          
          headerStyle: {
            backgroundColor:"#3b0202",
          },
          headerTitleStyle :{
            marginLeft: 65,
            fontFamily: 'BerkshireSwash-Regular'
          },
          headerTintColor:"#FFF",
          headerBackImage: () => <Image 
          source={require('./pages/images/IconWolf.png')}
          style ={{width: 45, height:45,resizeMode:'stretch', marginLeft:1}}
          />
          
          }}
          
        />
        <Stack.Screen 
        name = "Artigo de literatura"
        component={ArticleLiterature}
        options ={{
          title: 'PhiloWolf',          
          headerStyle: {
            backgroundColor:"#3b0202",
          },
          headerTitleStyle :{
            marginLeft: 65,
            fontFamily: 'BerkshireSwash-Regular'
          },
          headerTintColor:"#FFF",
          headerBackImage: () => <Image 
          source={require('./pages/images/IconWolf.png')}
          style ={{width: 45, height:45,resizeMode:'stretch', marginLeft:1}}
          />
          }}
        /> 
        <Stack.Screen 
        name = "Development"
        component={Development}
        options ={{
          title: 'PhiloWolf',
          headerTitleStyle :{
            marginLeft: 65,
            
          },
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )

}

