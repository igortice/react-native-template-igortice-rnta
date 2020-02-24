/* eslint-disable react-native/no-inline-styles */

import {Container, Text} from 'native-base';

import LottieView from 'lottie-react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import {material} from 'react-native-typography';

const Loading = ({texto = ''}) => (
  <Container
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <StatusBar hidden={true} />
    <LottieView
      source={require('~/assets/animations/loading.json')}
      autoPlay={true}
      speed={0.8}
      style={{marginTop: -12}}
    />
    <Text style={{...material.display1, textAlign: 'center'}}>{texto}</Text>
  </Container>
);

export default Loading;
