import React from 'react';
import {View} from 'react-native';
import C1 from './Componentes/comp1';
import C2 from './Componentes/comp2';
import C3 from './Componentes/comp3';

export default function App() {
  return (
    <View>
      <C1/>
      <C2 num_aula = '1' tema_aula = 'Conceitos e mercado de aplicativos mobile'/>
      <C2 num_aula = '2' tema_aula = 'Instalação do React Native'/>
      <C2 num_aula = '3' tema_aula = 'Acrescentando estilos com StyleSheet'/>
      <C2 num_aula = '4' tema_aula = 'Utilização de flexbox'/>
      <C2 num_aula = '5' tema_aula = 'Criação de Botões e Imagens'/>
      <C3 nomebotao = 'INSCREVA-SE' titulo = 'Seja Bem-Vindo(a)!' mensagem = 'Aproveite as aulas de PAM I.' />
    </View>
  );
}

