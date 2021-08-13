import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text,View } from 'react-native';
import C1 from './Componentes/Comp1'

export default function App() {
  return (
    /* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */
    <View style = {estilo.container}> 
    
     <Text style={{color:'blue', font:55}}>"Não acredito na maldição do olá mundo"</Text>
     <Text> <C1 propal = '1' tema = ' e teste de props' cor='red'/> </Text>
     <Text> <C1 propal = '2' tema = ' e outro teste de props' cor = 'blue' /> </Text>
     <Text> <C1 propal = '3' tema = ' e o último teste de props' cor ='purple'/> </Text>
     <Text style = {estilo.texto1}> Seja bem vindo  </Text>  
     <Text> Fala dele </Text>
     <Text> Fala dele </Text>
     <Text> Fala dele </Text>
    </View>
  );
}

const estilo=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center' ,
    justifyContent: 'center',
    backgroundColor: '#ddd'

  },
  texto1:{
    fontSize:35,
    color:'green',
    backgroundColor:'black'

  }

});
/*
export default class App extends Component 
{
  Render()
  {
    return 
    (
      <view> 
        <text> Teste </text> 
        <C1/>
      </view>
      
    )

  }
}
*/
/* CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/