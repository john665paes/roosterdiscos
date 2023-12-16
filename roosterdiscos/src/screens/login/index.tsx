import * as React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
//import {imgfundo} from './../src/assets/imgs/background.png';

const imgfundo = {uri:'https://drive.google.com/file/d/1EOdNN8Bs8CZ0gr4Cy7qtroSxNom95DMl/view?usp=sharing'}
interface LoginscreenProps {
}

export function Loginscreen (props: LoginscreenProps) {
    return (
       <ImageBackground source={imgfundo} style={styles.backG}>
            <View style={styles.container}>
                <Text>Loginscreen</Text>
            </View>
        </ImageBackground> 
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#3FCCFE',
        fontSize: 30
        
    },
    backG: {
        flex: 1,
        justifyContent: 'center',
      },

})