/* eslint-disable react-native/no-inline-styles */

import {StatusBar, View} from 'react-native';

import LottieView from 'lottie-react-native';
import React from 'react';

const ModalRoute = ({navigation}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#adff2f',
    }}>
    <StatusBar hidden={true} />
    <LottieView
      source={require('~/assets/animations/success.json')}
      autoPlay={true}
      loop={false}
      autoSize={true}
      speed={0.6}
      onAnimationFinish={() => navigation.goBack()}
    />
  </View>
);

export default ModalRoute;
