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
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ExemploCreators} from '~/store/ducks/exemploDuck';
import LoadContentList from '~/utils/LoadContentList';

const MyList = ({lista}) =>
  lista.map(ele => (
    <ListItem key={ele.id}>
      <Body>
        <Text>{ele.nome}</Text>
      </Body>
    </ListItem>
  ));

const MyContent = ({lista}) => (
  <List>
    {lista.length === 0 ? (
      <ListItem>
        <LoadContentList />
      </ListItem>
    ) : (
      <MyList lista={lista} />
    )}
  </List>
);

const ReduxThunk = ({navigation}) => {
  const myGitHubProjectsLista = useSelector(state => state.exemplo.projetos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ExemploCreators.fetchGitHub('igortice'));
  }, [dispatch]);

  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>ReduxThunk</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <MyContent lista={myGitHubProjectsLista} />
      </Content>
    </Container>
  );
};

export default ReduxThunk;
