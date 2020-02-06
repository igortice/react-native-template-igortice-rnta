/* eslint-disable react-native/no-inline-styles */
import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  List,
  ListItem,
  Right,
  Text,
  Title,
} from 'native-base';

import {Actions} from 'react-native-router-flux';
import React from 'react';

const Lista = () => {
  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Body>
          <Title>Lista</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem icon onPress={() => Actions.EasyGrid()}>
            <Body>
              <Text>Easy Grid</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => Actions.AxiosHooks()}>
            <Body>
              <Text>Axios Hooks</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Lista;
