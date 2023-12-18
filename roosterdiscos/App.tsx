import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import  {Loginscreen}  from './src/screens/login';
import React from 'react';
import { Cadastro } from './src/screens/cadastro/cadastro';

export default function App() {
  return (
     //<Loginscreen/>
    <Cadastro/>
  );
}

const styles = StyleSheet.create({
 
});
