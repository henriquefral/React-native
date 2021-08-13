
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import C1 from './Componentes/comp1';

class
App extends Component {
  render(){
    return(
      <View>
        
        <View style = {{alignitems:'center', marginTop:20,marginRight:'auto',marginLeft:'auto'}}>
          <Text style = {{color:'blue',fontSize: 20,paddingBottom: 30}}> Países cujas capitais são Paris e Roma  </Text> 
        </View>   
        <View style = {{alignitems:'center', marginTop:20,marginRight:'auto',marginLeft:'auto'}}>
          <C1 nomepais = "França" Cor1 = 'red' Cor2 = 'white' Cor3 = 'blue' />; 
        </View> 
          <C1 nomepais = "Itália" Cor1 = 'green' Cor2 = 'white' Cor3 = 'red' />;
      </View>
    )
  }
}

export default App;



/*
export default function App() {
    return (
      <View>
      <Text>  KAKAROTOOOOOOOO </Text>   
       
      </View>  
    );
}


class

 App extends Component {
  render(){
    return (
      <View style = {{flex: 1,backgroundColor: '#000',allignitems: 'center', flexDirection: 'column',justifyContent: 'space-around'}}>
        <View style = {styles.teste,{backgroundColor:'red', flexWrap:'wrap'}}> 
        <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </Text>
        </View>
        <View style = {styles.teste, {backgroundColor:'pink'}}> </View>
        <View style = {styles.teste,{backgroundColor:'green'}}> </View>
        <View style = {styles.teste,{backgroundColor:'yellow'}}> </View>
        <View style = {styles.teste,{backgroundColor:'blue'}}> </View>
        <View style = {styles.teste,{backgroundColor:'black'}}> </View>
        <View style = {styles.teste,{backgroundColor:'purple'}}> </View>
        <View style = {styles.teste,{backgroundColor:'grey'}}> </View>

      </View> 
    )

  }
}

// <Text style = {{textalign: 'center', backgroundColor: 'red',width:60,height:60, marginLeft: 'auto', marginRight: 'auto', display:'block'}}> Maldição </Text>


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'black',
    allignitems: 'center',
    justifyContent: 'center',
  },
  text: {
    width:100,
    height:100,
    backgroundColor: 'red',
    allignitems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexdirection: 'row',
    margin: 0,
  },
  teste: {
    height:100,
    width:50,
  },
});
*/