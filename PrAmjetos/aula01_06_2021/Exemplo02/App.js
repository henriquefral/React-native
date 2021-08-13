import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, SwipeableListView, Switch, Text, View } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { status: false }
  }
  render(){
    return(
      <View style = {styles.container}> 
      <Switch 
        value = {this.state.status}
        onValueChange = {(valorSwitch)=>this.setState({status: valorSwitch})}
        thumbColor = 'green'
      />
      <Text style = {{textAlign:'center', fontSize:30}}>
      {(this.state.status) ? "Ativo" : "Inativo"}
      </Text>
      </View>
    )

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default App;