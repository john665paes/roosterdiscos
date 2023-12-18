import React from 'react';
import fundopags from './../../assets/images/fundopags.png';
import disco from './../../assets/images/disco.jpeg';
import nirvana from './../../assets/images/nirvana.jpeg';
import guns from './../../assets/images/guns.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert,ScrollView, } from 'react-native';
import { Input } from '@rneui/themed';
import { Button, Icon } from 'react-native-elements';
import {  Card } from '@rneui/themed';

export function Produto() {
  return (
    <ImageBackground source={fundopags} style={styles.background}>
        <ScrollView style={styles.orgcatalogo}>      
            <Card>
            <Card.Title>Disco de Vinil -  Nirvana</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{
                    width: '100%',
                    height: 100,
                    aspectRatio: 1,
                }}
                source={nirvana}
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
            </Card> 
            
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
    height:'50%'
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
