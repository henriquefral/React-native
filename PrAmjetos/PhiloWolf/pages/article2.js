import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './components/styles/stylesArticle'
import ArticleContent from './components/ArticleContent';


//Falta construir 

export default function article({navigation}) {
  return (
    <ArticleContent 
    title = 'Shakespeare apaixonado: Ele precisou amar para falar sobre o amor.'
    firstParagraph = '
    É indiscutível que William Shakespeare foi um dos maiores dramaturgos da história da humanidade. Seu senso exposto através de palavras deixaram em êxtase aqueles que caminharam no seu tempo, e ainda permanecem vívidos após tantos séculos. Entre diversas obras adaptadas para falar desse sentimento inebriante que é o amor, o filme Shakespeare Apaixonado (1998) figura entre os desejos mais plenos conhecidos pela história do cinema. Até mesmo o bardo William se sentiria contemplado, caso pudesse assistir o longa.
Dirigido John Madden, Shakespeare Apaixonado teve roteiro escrito por Mar Norman e Tom Stoppard. Nos papéis principais, Joseph Fiennes (Shakespeare) e Gwyneth Paltrow (Viola). O elenco ainda contou com nomes de gabarito como Colin Firth, Ben Affleck, Tom Wilkinson, Geoffrey Rush e Judi Dench.
A trama do filme acompanha o processo de criação de Shakespeare que teria dado vida para a trágica história de Romeu e Julieta. Premiado com 7 Oscar, incluindo o de Melhor Filme, Shakespeare Apaixonado é uma odisseia original sobre a amor. O amor tão almejado, e do qual procuramos diariamente, intensamente. Mesmo negando o contrário.
Seria simples ao decorrer destas palavras descrever importâncias técnicas e motivos pelos quais vocês, que ainda não assistiram, dedicarem 2 horas para este amor cinematográfico, mas as mesmas palavras podem ir, além disso. Elas transbordam mais. Muito mais.
O filme abrange algo mais pertinente para ser questionado. Amor. Amor este, ainda incompreendido, indefinido e muitas vezes, irreconhecível. Será mesmo? Poderia ser tão complexo e inatingível ser violado pelo amor? Como dito em certo momento da produção pelo bardo: “Sou um joguete do destino”. Precisa de fato, ser assim? Em doses homeopáticas ou contra indicações, queremos todos sentir o gosto do amor. Desgovernado, orgânico, pleno. Tais formas ou sensações sobre amor podem ser demonstradas nos mais singelos gestos, mas apenas naqueles dispostos para reconhecê-lo em si próprios, talvez sejam capazes de enxergar a plenitude do desconhecido e pulsante amor. Joguete do destino? 
Eu digo não. Temos sonetos, poesias, músicas e uma quantidade variável para definirmos a elipse do amor. Ainda assim, é possível sorrir para ele e ele sorrir de volta. Tocá-lo. Sentir o seu perfume, o seu gosto, o seu corpo.
Através de séculos muitos estabeleceram que o amor fosse para sonhadores, que na verdade, a curva desse sentimento é bem mais disforme do que ela aparenta. Fincados com os pés no coração, realistas entendem como amor o exercício diário da conveniência entre parceiros: - Ela gosta de mim. Não preciso gostar tanto dela. Reconhecemos-nos. Preciso de alguém assim na minha vida. Para eles, o bardo Romeu diz: “Amor é uma fumaça que se eleva com o vapor dos suspiros; purgado, é o fogo que cintila nos olhos dos amantes; frustrado, é o oceano nutrido das lágrimas desses amantes. O que mais é o amor? A mais discreta das loucuras, fel que sufoca, doçura que preserva.”
Então por que sonhamos? Talvez sonhar seja uma realidade mais próxima e palpável daquilos que os realistas jamais poderiam imaginar.'   
    />
  );
}

