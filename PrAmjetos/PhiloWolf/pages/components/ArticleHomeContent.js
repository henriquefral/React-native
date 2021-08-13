import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouter } from 'react-navigation';
import styles from './styles/stylesHome';
let content;


function ContentHome (props){
  content = props.content;

    return (
            <View style = {styles.containerArticle}> 
              <Text style = {styles.articleFont}>
                  {content} 
              </Text>
            </View>
    );
}

export default ContentHome; 