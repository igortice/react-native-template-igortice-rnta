/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import Success from '~/components/LottieView/Success';
import {View} from 'react-native';

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
