import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import C1 from './Componentes/comp2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> <C1 nomealuno = 'Ednaldo' numaula = '1' temaula = 'Instalação do android studio'/> </Text>
      <Text> <C1 nomealuno = 'Pereira' numaula = '2' temaula = 'Componentes'/> </Text>
      <Text> <C1 nomealuno = 'Alexandre' numaula = '3' temaula = 'Programar em js'/> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    FontSize:15,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
