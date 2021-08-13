import React from 'react';
import {Button,View,Text,StyleSheet,Image,Alert} from 'react-native'
let nomebotao, titulo, mensagem, num_aula, tema_aula, enderecodalogo;


export default function(props){
    enderecodalogo = props.enderecodalogo;
    nomebotao = props.nomebotao;
    titulo = props.titulo;
    mensagem = props.mensagem;
    num_aula = props.num_aula;
    tema_aula = props.tema_aula;
    
    return(
        <View> 
        <View style = {{marginTop:40, marginLeft:600, marginRight:600}}>
        <Button 
          title = {nomebotao}
          OnPress = {() => Alert.alert({titulo},{mensagem})}
          Style = {{marginRight:30, marginLeft:30}}
        />
        </View>
        <View>
            
        <Image source ={require('./assets_comp/logo.jpg')}style = {styles.Container2}/>

        </View> 
        </View>
    )
}
const styles = StyleSheet.create ({
    Container2: {
        width: 200, 
        height: 200,
        marginRight:'auto',
        marginLeft:'auto',
        resizeMode:'contain'
    },
});