import {Container, Text} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';
import React from 'react';
import {material} from 'react-native-typography';

const Loading = ({texto = ''}) => (
  <Container style={styles.container}>
    <StatusBar hidden={true} />
    <LottieView
      source={require('~/assets/animations/loading.json')}
      autoPlay={true}
      speed={0.8}
      style={styles.lottieview}
    />
    <Text style={styles.text}>{texto}</Text>
  </Container>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieview: {
    marginBottom: 25,
  },
  text: {
    ...material.display1,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
