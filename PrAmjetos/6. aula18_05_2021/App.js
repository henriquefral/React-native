import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView, props } from 'react-native';
import C1 from "./componentes/comp1"
//const dobro = (n) => {return n*2}
//
//function dobro(n){
//  return n*2
//}
class calculadora extends Component {
  
  render(){ 
  return(
    <View style = {{backgroundColor: '#B5B5B5', flex: 1}}> 
    <C1/>    
    </View>
  );
  }
}

export default calculadora;
