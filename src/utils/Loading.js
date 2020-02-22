/* eslint-disable react-native/no-inline-styles */

import {StatusBar, View} from 'react-native';

import LottieView from 'lottie-react-native';
import React from 'react';

const Loading = ({navigation}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <StatusBar hidden={true} />
    <LottieView
      source={require('~/assets/animations/loading.json')}
      autoPlay={true}
    />
  </View>
);

export default Loading;
