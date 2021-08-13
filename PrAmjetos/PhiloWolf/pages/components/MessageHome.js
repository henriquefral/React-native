import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './styles/stylesHome';
let book,song;

export default function (props){
        book = props.book;
        song = props.song;
        return(
        <View style={styles.containerHome}>
            <Text style = {styles.messageFont}>Livro recomendado: {book} </Text>
            <Text style = {styles.messageFont}>Indicação de música: {song}</Text>
        </View>  
        )
}
