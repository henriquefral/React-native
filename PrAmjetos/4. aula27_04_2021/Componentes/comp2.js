import React from 'react';
import {View,Text} from 'react-native'
let num_aula, tema_aula;


export default function(props){
    num_aula = props.num_aula;
    tema_aula = props.tema_aula;
    
    return(       
        <View style = {{marginLeft: 400}}>
            <Text style = {{marginBottom:10}}> Aula {num_aula} - {tema_aula} </Text>
        </View>   
    )
}
