import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
    containerArticle: 
    {
      backgroundColor: '#545454',
      marginLeft: 30,
      marginRight: 20
    },
    containerArticleTitle: 
    {
      backgroundColor: '#000000',
      marginLeft: 30,
      marginRight: 20
    },
    articleFont: 
    {
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 20,
      fontFamily: 'BerkshireSwash-Regular'
    },
    articleTitleFont: 
    {
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 20,
      fontFamily: 'BerkshireSwash-Regular'
    },
    containerHeader: 
    {
      flexDirection: 'row',
      height: 330,
      backgroundColor: '#737373'
    },
    
    containerMenu: 
    {
      flex:1,
      backgroundColor: '#737373'
    },
    containerOptions: 
    {
      backgroundColor: '#545454',
      height: 310,
      width: 80,
      flexDirection: 'column'   
    },
    containerBody: 
    {
      flex:1,
      flexDirection: 'column' ,
      backgroundColor:'#404040' 
    },
    containerHome: 
    {
      backgroundColor: '#545454',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 40
    },
     messageFont: 
    {
      color: 'white',
      fontFamily: 'BerkshireSwash-Regular'
    },
  
    homeFont: 
    {
      marginTop:30,
      marginBottom:5,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 30,
      color:'white',
      fontFamily:'BebasNeue-Regular'
    },
    articleSectionFont: 
    {
      color: '#241a14',
      marginBottom: 10,
      textAlign: 'center',
      marginTop:90,
      fontSize:30,
      fontFamily: 'BerkshireSwash-Regular'
  
    },
    containerImage: {
      borderWidth: 0.3,
      borderColor: '#FFF',
      marginTop: 20,
      width: 79, 
      height: 80, 
      marginLeft:1,
      resizeMode:'stretch',
  },
      containerLogo: {
      marginTop: 20,
      width: 80, 
      height: 80, 
      marginLeft:1,
      resizeMode:'stretch'
  },
  });

 export default styles; 