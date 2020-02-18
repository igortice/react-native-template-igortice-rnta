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

import React from 'react';

const EasyGrid = ({navigation}) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
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
