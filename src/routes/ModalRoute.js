/* eslint-disable react-native/no-inline-styles */

import {StatusBar, View} from 'react-native';

import React from 'react';
import Success from '~/components/LottieView/Success';

const ModalRoute = ({navigation}) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#adff2f',
    }}>
    <Success goTo={() => navigation.navigate('Lista')} />
  </View>
);

export default ModalRoute;
