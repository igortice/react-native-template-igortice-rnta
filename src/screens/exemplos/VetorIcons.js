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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const VetorIcons = ({navigation}) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Vetor Icons</Title>
        </Body>
        <Right />
      </Header>
      <Grid>
        <Col>
          <Row
            style={{
              backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name={'comments'} color={'white'} size={50} solid />
          </Row>
        </Col>
      </Grid>
    </Container>
  );
};

export default VetorIcons;
