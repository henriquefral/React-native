import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { processColor, StyleSheet, Text, TextInput, View} from 'react-native';
let nomeprop, componenteprop, mensagemnome, mensagemcomponente,placeholdernome,placeholdercomponente; 

export default function (props) {
  nomeprop = props.nomeprop;
  componenteprop = props.componenteprop;
  mensagemnome = props.mensagemnome;
  mensagemcomponente = props.mensagemcomponente;
  placeholdernome = props.placeholdernome;
  placeholdercomponente = props.placeholdercomponente;
}