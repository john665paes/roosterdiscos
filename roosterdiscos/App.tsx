import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  {Loginscreen}  from './src/screens/login';
import React from 'react';


export default function App() {
  return (
    <Loginscreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3FCCFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "purple",
    fontSize: 50
  }
});
