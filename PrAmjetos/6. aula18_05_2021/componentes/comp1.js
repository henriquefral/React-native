import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';

export default function Funções(props){
  const [valor, setValor] = useState(0);
  const [valor2,setValor2] = useState(0);
  const [resultado,setResultado] = useState(0);
  const soma = () => {setResultado(parseInt(valor) + parseInt(valor2))}
  const subtrair = () => {setResultado (parseInt(valor) -  parseInt(valor2))}
  const divisao = () => {setResultado (parseInt(valor) / parseInt(valor2))}
  const multiplicacao = () => {setResultado (parseInt(valor) * parseInt(valor2))}

  return (
    <View> 
        <Text style = {styles.titulo}> Calculadora simples </Text>
        <Text style = {styles.rotulo}> Primeiro valor: </Text>
        <TextInput 
        value = {String(valor)}
        style = {styles.display}
        onChangeText = {(texto)=>{setValor(texto)}} 
        keyboardType = 'numeric'
        ></TextInput>
        <Text style = {styles.rotulo}> Segundo valor: </Text>
        <TextInput 
        value = {String(valor2)}
        style = {styles.display}
        onChangeText = {(texto)=>{setValor2(texto)}} 
        keyboardType = 'numeric'
        ></TextInput>
        <Text style = {styles.rotulo}> Resultado: </Text>
        <TextInput 
        value = {String(resultado)}
        style = {styles.display}
        onChangeText = {(texto)=>{setResultado(texto)}} 
        keyboardType = 'numeric'
        ></TextInput>
        <View style = {{width: 10, height: 20}}>  </View>
        <View style = {{flexDirection: 'row', marginRight: 'auto', marginLeft: 'auto'}}>
        <TouchableHighlight style ={styles.btn} 
        onPress = {() => soma()} 
        >
            <Text style = {styles.textbtn}> Somar</Text>  
        </TouchableHighlight> 
        <View style = {{width: 10, height: 10}}>  </View>
        <TouchableHighlight style ={styles.btn} 
        onPress = {() => subtrair()} 
        >
            <Text style = {styles.textbtn}> Subtrair </Text>  
        </TouchableHighlight> 
          <View style = {{width: 10, height: 10}}>  </View>
        <TouchableHighlight style ={styles.btn} onPress = {() => divisao()} >
            <Text style = {styles.textbtn}> Divisão </Text>  
         </TouchableHighlight> 
        <View style = {{width: 10, height: 10}}>  </View>
        <TouchableHighlight style ={styles.btn} onPress = {() => multiplicacao()} >
            <Text style = {styles.textbtn}> Multiplicação </Text>  
          </TouchableHighlight> 
        </View>
    </View>    

  );
}


const styles = StyleSheet.create({
    titulo: {
      color:'#000',
      fontWeight: 'bold',
      alignSelf:'center',
      padding: 20,
      fontSize: 20,
    },
    display: {
      borderWidth: 1,
      borderRadius: 10,
      padding:10, 
      borderColor: "#000",
      backgroundColor: "#FFFFFF",
    },
    btn: {
      backgroundColor: "#000",
      padding:10,
      paddingRight: 10,
      width: 150,
      alignSelf:'center',
      borderWidth: 1,
      borderRadius: 10,
    },
    textbtn: {
      color: 'white',
      alignSelf:'center',
      fontSize: '20',
    },
    rotulo: {
      paddingbottom: 15,
      paddingtop: 15,
      fontSize: 20,
    },
  });
  