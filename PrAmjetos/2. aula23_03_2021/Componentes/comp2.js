import React from 'react';
import {Text, View} from 'react-native';
let nomealuno, numaula, temaula;

export default function (props){
    nomealuno = props.nomealuno;
    numaula = props.numaula;
    temaula = props.temaula;
    return (
        <Text> Parabéns {nomealuno} por chegar até a aula {numaula} - {temaula} </Text>
    )
}