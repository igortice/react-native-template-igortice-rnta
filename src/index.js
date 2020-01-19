import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Row, Grid} from 'react-native-easy-grid';
import {material} from 'react-native-typography';
import {Text} from 'react-native';

const App = () => (
  <Grid>
    <Row
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
      }}>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{fontSize: 50}}>
        Animatable
      </Animatable.Text>
    </Row>
    <Row
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
      }}>
      <Text style={material.display2}>Hello Material!</Text>
    </Row>
  </Grid>
);

export default App;
