import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Alert ,ScrollView, } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from 'react-native';
import {  Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';


export function Produto() {
    const fundopags = require('./imgs/backCadastro.png');
    const card1 = require('./imgs/card01.jpg');

  return (
    <ImageBackground source={fundopags} style={styles.background}>
        <ScrollView style={styles.orgcatalogo}>      
            <Card>
            <Card.Title>LP Barrington Levy "Original Ragga Muffin" 1997</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{
                    //width: '50%',
                    //height: '50%',
                    aspectRatio: '100%',
                }}
                source={card1}
            />
            <Button
          title=" COMPRAR"
          buttonStyle={{ backgroundColor: 'blue'}}
          icon={
            <Icon
              name="shop"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
            </Card> 
            {/* <Card>
            <Card.Title>Disco de Vinil -  The Neighbourhood</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{
                    width: '100%',
                    height: 50,
                    aspectRatio: 1,
                }}
                source={disco}
            />
            <Button
          title=" COMPRAR"
          buttonStyle={{ backgroundColor: 'blue'}}
          icon={
            <Icon
              name="shop"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
            </Card> 
            <Card>
            <Card.Title>Disco de Vinil -  Guns N Roses </Card.Title>
            <Card.Divider />
            <Card.Image
                style={{
                    width: '100%',
                    height: 50,
                    aspectRatio: 1,
                }}
                source={guns}
            />
            <Button
          title=" COMPRAR"
          buttonStyle={{ backgroundColor: 'blue'}}
          icon={
            <Icon
              name="shop"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
            </Card>  */}
            
        </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  orgcatalogo: {
    width: '50%',
    height:'50%',textAlign: 'auto'
  }
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   padding: 10,
  //   alignItems: 'stretch',
  //   marginTop: 310,
  // },
//  inputContainer: {
//    backgroundColor: 'white',
//    borderRadius: 30,
//   padding: 5,
//  },
});
