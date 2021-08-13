
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageHome from './components/MessageHome';
import styles from './components/styles/stylesHome';
import article from './article1';
import ArticleTitle from './components/ArticleTitle';
import ContentHome from './components/ArticleHomeContent';

export default function home({navigation}) {
    return (
      <View style = {{flex:1}}> 
        <View style={styles.containerHeader}>
          <View style={styles.containerOptions}>
                <Image source = {require('./images/wolf-30695.png')} style = {styles.containerLogo} /> 
              <TouchableOpacity
              onPress = {()=> {
                navigation.navigate('Development')
              }}
              >
                <Image source = {require('./images/IconBook.png')} style = {styles.containerImage} />   
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {()=> {
                navigation.navigate('Home')
              }}>
                <Image source = {require('./images/IconWolf.png')} style = {styles.containerImage} />   
              </TouchableOpacity>
          </View>
          <View style={styles.containerMenu}>
            <Text style = {styles.homeFont}>Bem-vindo ao PhiloWolf</Text>
            <MessageHome
            book = '"Assim falou zaratustra"'
            song = '"The final countdown, de Europe"'
            />
            <Text style = {styles.articleSectionFont}>Artigos do dia: </Text>
          </View>
        </View>
        <View style ={styles.containerBody}>
          <View style = {{padding:20}}></View>
           <ArticleTitle title = 'Aos amantes de filosofia:'/>
            <TouchableOpacity
            onPress={()=>{ 
            navigation.navigate('Artigo de filosofia')
            }}>  
              <ContentHome content = 'A estética na filosofia de Platão e Aristóteles.'/>
            </TouchableOpacity>
          <View style = {{padding:20}}></View>
          <ArticleTitle title = 'Aos amantes de literatura:'/>
            <TouchableOpacity
                onPress={()=>{
                  navigation.navigate('Artigo de literatura')
                }}>
                <ContentHome content = 'Shakespeare apaixonado: Ele precisou amar para falar sobre o amor.'/>
            </TouchableOpacity>
        </View>  
      </View>
    );
  }