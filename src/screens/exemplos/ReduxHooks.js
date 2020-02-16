/* eslint-disable react-native/no-inline-styles */
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import {human, material} from 'react-native-typography';
import {useDispatch, useSelector} from 'react-redux';

import {Actions} from 'react-native-router-flux';
import React from 'react';
import {changeCount} from '~/store/actions/exemploAction';

const addIcon = (
  <Icon name="add-circle" style={{fontSize: 35, color: 'green'}} />
);
const removeIcon = (
  <Icon name="remove-circle" style={{fontSize: 35, color: 'red'}} />
);
const reloadIcon = (
  <Icon name="ios-refresh" style={{fontSize: 30, color: 'gray'}} />
);

const ReduxHooks = () => {
  const count = useSelector(state => state.exemplo.count);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(changeCount(count + 1));
  };
  const handleRemove = () => {
    if (count > 0) {
      dispatch(changeCount(count - 1));
    }
  };
  const handleReload = () => {
    if (count > 0) {
      dispatch(changeCount(0));
    }
  };

  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.Lista()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Redux Hooks</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Left />
            <Body>
              <Text style={human.title2}>CONTADOR</Text>
            </Body>
            <Right />
          </CardItem>
          <CardItem CardItem>
            <Body
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={material.headline}>{count}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent onPress={handleAdd}>
                {addIcon}
              </Button>
            </Left>
            <Body>
              <Button transparent block onPress={handleReload}>
                {reloadIcon}
              </Button>
            </Body>
            <Right>
              <Button transparent onPress={handleRemove}>
                {removeIcon}
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default ReduxHooks;