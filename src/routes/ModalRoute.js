/* eslint-disable react-native/no-inline-styles */

import {Button, Text, View, StatusBar} from 'react-native';

import React from 'react';

const ModalRoute = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <StatusBar hidden={true} />
    <Text style={{fontSize: 30}}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>
);

export default ModalRoute;
