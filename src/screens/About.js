import * as Animatable from 'react-native-animatable';

import {Body, Container, Header, Text, Title} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

import { Actions } from 'react-native-router-flux';
import React from 'react';
import {material} from 'react-native-typography';

const Home = () => (
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
          About
        </Animatable.Text>
      </Row>
      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'deepskyblue',
        }}>
        <Text onPress={() => Actions.home()} style={material.display2}>
          Go Home! Click me.
        </Text>
      </Row>
    </Grid>
  </Container>
);

export default Home;
