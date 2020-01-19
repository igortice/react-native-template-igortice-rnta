import {Button, Text, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import React from 'react';
import {material} from 'react-native-typography';

const Home = () => {
  return (
    <View>
      <Text style={[material.display3, {textAlign: 'center'}]}>
        Home Screen
      </Text>
      <Button onPress={() => Actions.about()} title={'Go to About'} />
    </View>
  );
};

export default Home;
