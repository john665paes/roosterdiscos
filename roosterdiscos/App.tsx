import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import  {Loginscreen}  from './src/screens/login';
import React from 'react';
import { Cadastro } from './src/screens/cadastro/cadastro';
import { Produto } from './src/screens/Produtos/produtos';

export default function App() {
  return (
     //<Loginscreen/>
     //<Cadastro/>
     <Produtos/>
  );
}

const styles = StyleSheet.create({
 
});
