import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'
export default function(props){
    
    
    return(
        <View>
        <View>
            <Image source = {require('./assets_comp/etec.jpg')} style = {styles.container} /> 
                  
        </View> 
        <View style = {{marginRight:'auto', marginLeft:'auto', marginBottom: 50}}>
            <Text style = {{color:'red', fontSize: 25}}> Cronograma - PAM I  </Text>

        </View>
        </View>
        
        

    )
}

const styles = StyleSheet.create ({
    container: {
        width: 400, 
        height: 200,
        marginRight:'auto', 
        marginLeft:'auto',
        resizeMode:'stretch'
    },

});

