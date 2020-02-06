/* eslint-disable react-native/no-inline-styles */
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
} from 'native-base';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';

import {API} from '~/configs/Api';
import {Actions} from 'react-native-router-flux';
import React from 'react';
import {makeUseAxios} from 'axios-hooks';

const loadContent = () => (
  <ListItem>
    <ContentLoader
      speed={0.8}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#c0c0c0"
      foregroundColor="#ff2600">
      <Circle cx="10" cy="20" r="8" />
      <Rect x="25" y="15" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="50" r="8" />
      <Rect x="25" y="45" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="80" r="8" />
      <Rect x="25" y="75" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="110" r="8" />
      <Rect x="25" y="105" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="140" r="8" />
      <Rect x="25" y="135" rx="5" ry="5" width="85%" height="10" />
    </ContentLoader>
  </ListItem>
);

const useAxios = makeUseAxios({
  axios: API,
});

const AxiosHooks = () => {
  const [{data, loading}] = useAxios('/list_colors');

  const myList = () =>
    data.colors.map((e, i) => (
      <ListItem key={i}>
        <Text style={{color: e.color}}>{e.color}</Text>
      </ListItem>
    ));

  const myContent = () => <List>{loading ? loadContent() : myList()}</List>;

  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.Lista()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Axios Hooks</Title>
        </Body>
        <Right />
      </Header>
      <Content>{myContent()}</Content>
    </Container>
  );
};

export default AxiosHooks;
