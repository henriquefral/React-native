import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
containerTitle: 
{
    backgroundColor: '#000000',
    marginLeft: 10,
    marginRight: 10
},
containerContent:
{
    backgroundColor: '#3b0202',
    marginLeft:10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 0,
},
titleFont:
{
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    textAlign:'center',
    fontFamily: 'BerkshireSwash-Regular' 
},
contentFont:
{
    color:'white',
    marginLeft:15,
    marginRight:15,
    fontSize: 20,
    marginBottom: 1,
    marginTop: 'auto',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular' 
}
});

export default styles;