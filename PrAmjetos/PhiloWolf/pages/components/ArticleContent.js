import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import styles from './styles/stylesArticle';
let firstParagraph, secondParagraph, thirdParagraph, fourthParagraph, title;

function ArticleContent(props) {
    firstParagraph = props.firstParagraph;
    secondParagraph = props.secondParagraph;
    thirdParagraph = props.thirdParagraph;
    fourthParagraph = props.fourthParagraph;
    title = props.title;
  return (
    <ScrollView>
      <View style ={{flex:1, backgroundColor:'#737373', flexDirection:'column'}}>
        <View style = {{padding:15}}></View>
        <View style = {styles.containerTitle}> 
          <Text style = {styles.titleFont}> {title}  </Text>
        </View>
        <View style = {{padding:12}}></View>
        <View style = {styles.containerContent}> 
          <Text style = {styles.contentFont}> {firstParagraph} </Text>
        </View>
      </View>
    </ScrollView>  
  );
}

export default ArticleContent;