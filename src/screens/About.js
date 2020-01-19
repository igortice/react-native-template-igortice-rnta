import {Button, Text, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import React from 'react';
import {material} from 'react-native-typography';

const About = () => {
  return (
    <View>
      <Text style={[material.display3, {textAlign: 'center'}]}>
        About Screen
      </Text>
      <Button onPress={() => Actions.home()} title={'Go to Home'} />
    </View>
  );
};

export default About;
