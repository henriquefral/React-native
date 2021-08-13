import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { valor: 0 };
  }

  render(){
    return(
      <View style = {styles.container}>
      <Slider 
      minimunValue={0}
      maximumValue={1000}
      onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
      minimumTrackintColor='red'
      maximumTrackintColor='blue'
      />

      <Text style={{textAlign: 'center', fontSize:30}}>
        O valor selecionado é de: {this.state.valor.toFixed(1)}
      </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
});

export default App;