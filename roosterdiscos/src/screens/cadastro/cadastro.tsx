import * as React from 'react';
import {StyleSheet,Alert,ImageBackground, View, Text} from 'react-native';
import { useState } from 'react';
import {Button, Input} from '@rneui/base';

export function Cadastro(){
    const imgfundo= require('./backCadastro.png');

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const verificarDados = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        const isValidPassword = password.length >= 4;

        setIsValidEmail(isValidEmail);
        setIsValidPassword(isValidPassword);

    if (!isValidEmail || !isValidPassword) {
      return;
    }
    if (isValidEmail && isValidPassword) {
      return Alert.alert(`Cadastro Realizado`);
    }
  };

  return (
    <ImageBackground source={imgfundo} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto} >Cadastre seu Usuário</Text>

        <Input
          placeholder="Nome Completo"
          onChangeText={setNome}
          value={nome}
          style={{ width: 200, borderWidth: 1, marginBottom: 10 }}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(true);
          }}
          value={email}
          style={{
            width: 200,
            borderWidth: 1,
            marginBottom: 10,
            borderColor: isValidEmail ? 'black' : 'red',
          }}
        />
        {!isValidEmail && <Text style={{ color: 'red' }}>Email Invalido</Text>}
        <Input
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={{
            width: 200,
            borderWidth: 1,
            marginBottom: 10,
            borderColor: isValidPassword ? 'black' : 'red',
          }}
        />
        {!isValidPassword && (
          <Text style={{ color: 'red' }}>Senha Invalida!</Text>
        )}
        <Button
          title=" Cadastrar"
          onPress={verificarDados}
          buttonStyle={{ backgroundColor: 'blue' }}
          raised={true}></Button>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'stretch',
    marginTop: 190,
  },
  texto:{
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 5)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5,
    textDecorationStyle: 'double',
    fontSize: 30,
    color: 'white',
    fontFamily:'riffic'
  }
  // inputContainer: {
  //   backgroundColor: 'white',
  // },
});
