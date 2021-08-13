import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouter } from 'react-navigation';
import styles from './styles/stylesHome';
let title;


function ArticleTitle(props){
  title = props.title;

    return (
            <View>
                <View style = {styles.containerArticleTitle}>
                    <Text style = {styles.articleTitleFont}>
                        {title}
                    </Text>
                </View>
            </View>  
    );
}

export default ArticleTitle; 