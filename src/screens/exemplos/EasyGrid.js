/* eslint-disable react-native/no-inline-styles */
import {
  Body,
  Button,
  Col,
  Container,
  Grid,
  Header,
  Icon,
  Left,
  Right,
  Row,
  Title,
} from 'native-base';

import {Actions} from 'react-native-router-flux';
import React from 'react';

const EasyGrid = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.Lista()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Easy Grid</Title>
        </Body>
        <Right />
      </Header>
      <Grid>
        <Col>
          <Row style={{backgroundColor: 'purple'}} />
        </Col>
        <Col>
          <Row style={{backgroundColor: 'red'}} />
          <Row style={{backgroundColor: 'yellow'}} />
        </Col>
      </Grid>
    </Container>
  );
};

export default EasyGrid;
