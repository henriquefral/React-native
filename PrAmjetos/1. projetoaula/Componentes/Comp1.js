import React from 'react';
import {StyleSheet, Text} from 'react-native';
let tema,cor;

export default function (props){
    tema=props.tema;
    cor=props.cor;
    return (
        <Text style = {estilo.texto1,{color:cor}}> {props.propal}ª função{tema}</Text>
    )
}

const estilo=StyleSheet.create({
    texto1:{
      fontSize: 20,
      //color: 'red',
    }
  });