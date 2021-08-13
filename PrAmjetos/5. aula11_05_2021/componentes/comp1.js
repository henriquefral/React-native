import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { processColor, StyleSheet, Text, TextInput, View} from 'react-native';

class App extends Component {
    constructor (props) {
      super(props);
      this.state = {
        nome: '',
        componente: ''
      }
      this.pegaNome = this.pegaNome.bind(this)
      this.pegaComponente = this.pegaComponente.bind(this) 
    }

    pegaNome(texto) {
      if (texto.length > 0 ){
      this.setState({nome: 'Boas vindas, ' + texto})
      } else {
      this.setState ({nome: ''})
      }
    }
    pegaComponente (texto) {
      if (texto.length > 0){
      this.setState({componente: ', à aula de ' + texto + '.'})
      } else {
      this.setState ({componente: ''})
      }
    }
    render() {
      return (
        <View style = {styles.container}> 
          <TextInput 
          style = {styles.input}
          placeholder = "Digite seu nome aqui"
          underlineColorAndroid = "transparent"
          onChangeText = {this.pegaNome}
          />
          <TextInput
          style = {styles.input}
          placeholder = "Digite o nome do componente aqui"
          underlineColorAndroid = "transparent"
          onChangeText = {this.pegaComponente}
          />
          <Text style = {styles.texto}> {this.state.nome} {this.state.componente} </Text>
        </View> 
      )
    }
  }
export default App;



const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    color: 'yellow',
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});
