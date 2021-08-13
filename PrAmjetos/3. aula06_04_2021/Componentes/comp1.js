import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
let nomepais, Cor1, Cor2, Cor3;

export default function (props){
    nomepais = props.nomepais;
    Cor1 = props.Cor1;
    Cor2 = props.Cor2;
    Cor3 = props.Cor3;

    return (
        <View> 
            <View style = {{allignitems: 'center', flexDirection: 'row',marginRight:'auto',marginLeft:'auto'}}>
                <View style = {{backgroundColor:Cor1,flexdirection:'column',height: 150, width:100}}></View>
                <View style = {{backgroundColor:Cor2,flexdirection:'column',height: 150, width:100}}></View>
                <View style = {{backgroundColor:Cor3,flexdirection:'column',height: 150, width:100}}></View>
            </View>
            <View style = {{alignitems:'center', marginTop:20,marginRight:'auto',marginLeft:'auto'}}>
                <Text style = {{fontSize: 20}}> {nomepais}  </Text> 
            </View> 
        </View>
    )
}