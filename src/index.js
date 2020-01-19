import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Row, Grid} from 'react-native-easy-grid';

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
    <Row></Row>
  </Grid>
);

export default App;
