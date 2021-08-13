import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './components/styles/stylesArticle'
import ArticleContent from './components/ArticleContent';


//Falta construir 

export default function article({navigation}) {
  return (
    <ArticleContent 
    title = 'A estética na filosofia de Platão e Aristóteles.'
    firstParagraph = '
    A “Teoria das Ideias” platônica surgiu para explicar primeiramente o problema colocado por Sócrates sobre definições.      
Em seu desenvolvimento foi necessário estabelecer as ideias como unificadoras dos múltiplos objetos dados nas sensações (representações do olfato, paladar, visão, audição e tato), que sozinhos não são suficientes para explicar as representações desses objetos e sua essência Platão divide, assim, a realidade em dois universos distintos: o inteligível e o sensível. 
O primeiro contém as formas puras, as essências e o fundamento da existência dos seres do segundo.
    Assim, tanto os seres da natureza quanto os homens são cópias sensíveis de modelos originais inteligíveis. É a partir disso que Platão faz sua crítica à arte. Cada ser particular participa das ideias (a participação é a relação entre o todo e as partes) sem se confundir com elas, que são, pois, absolutas. O mundo é uma cópia do real e esse afastamento do verdadeiro já é uma Dessemelhança, ainda que natural. 
    Entretanto, Platão julga a arte como imitação, capaz de enganar, uma vez que a realidade sensível já é uma imitação do inteligível. A arte afasta ainda mais do real, pois imita a cópia. A imitação da cópia é o que Platão chama de Simulacro, que introduz uma desmedida maior do que a própria existência do mundo natural. 
Por isso Platão rejeita a arte em seu estado ideal, querendo, com isso, substituir a Poesia pela Filosofia.
    ' 
    />
  );
}

