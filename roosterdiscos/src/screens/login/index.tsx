import * as React from 'react';
import {StyleSheet,ImageBackground, View, Text} from 'react-native';
//import background from './background.png';
import {Button, Input} from '@rneui/base';



interface LoginscreenProps {
}

const imgfundo= './background.png';

export function Loginscreen (props: LoginscreenProps) {
    return (
        <ImageBackground source={require(imgfundo)} style={styles.backG}>  
            <View style={styles.container}>
                <Input placeholder='Digite seu e-mail'
                leftIcon={{name:'person', color:'white'}}
                inputContainerStyle={styles.containerInput}/>
                
                <Input placeholder='Digite sua senha'
                leftIcon={{name:'lock', color:'white'}}  secureTextEntry={true} 
                inputContainerStyle={styles.containerInput}/>

                <Button title={'Login'} buttonStyle={styles.containerButton}
                />
                
                <Text style={styles.logar}>Não possui conta? Clique para se cadastrar</Text>

                
                  
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-end' ,
        padding: 10,
        alignItems: 'center'
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
    },
    containerInput:{
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 30,
        padding: 5,
        marginBottom: -15,
        color: 'black'

    },
    containerButton:{
        borderRadius: 30,
        marginTop: 10,
        marginHorizontal: 10,
        padding: 15
    },
    logar:{
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }

})