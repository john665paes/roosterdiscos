import * as React from 'react';
import {StyleSheet,ImageBackground, View, Text} from 'react-native';
//import background from './background.png';



interface LoginscreenProps {
}

const imgfundo= './background.png';

export function Loginscreen (props: LoginscreenProps) {
    return (
        <ImageBackground source={require(imgfundo)} style={styles.backG}>  
            <View style={styles.container}>
                <Text style={styles.textAPP}> Será que vai?</Text>
                  
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'stretch'
        
    },
    backG: {
        flex: 1,
       // justifyContent: 'center',
        //resizeMode: "cover"
    },
    textAPP: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }

})