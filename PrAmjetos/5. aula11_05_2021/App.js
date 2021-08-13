import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import C1 from './componentes/comp1.js'; 
import C2 from './componentes/comp2.js'; 

export default function App () {
  return (
    <C1/>
  );
}




/*
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import C1 from './componentes/comp1.js';

class App extends Component {
  
  render () {
    return (
      <View style = {styles.container}> 
      <C1/>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },  
});
*/
