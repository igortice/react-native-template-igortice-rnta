import * as Animatable from 'react-native-animatable';

import {Body, Container, Header, Text, Title} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

import React from 'react';
import {material} from 'react-native-typography';

const App = () => (
  <Container>
    <Header>
      <Body>
        <Title>Header</Title>
      </Body>
    </Header>
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
  </Container>
);

export default App;
