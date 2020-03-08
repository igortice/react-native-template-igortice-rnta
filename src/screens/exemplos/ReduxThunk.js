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
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ExemploActions} from '~/store/ducks/exemploDuck';
import LoadContentList from '~/utils/LoadContentList';

const MyList = ({lista}) =>
  lista.map(ele => (
    <ListItem key={ele.id}>
      <Body>
        <Text>{ele.nome}</Text>
      </Body>
    </ListItem>
  ));

const MyContent = ({isLoading, lista}) => (
  <List>
    {isLoading ? (
      <ListItem>
        <LoadContentList />
      </ListItem>
    ) : (
      <MyList lista={lista} />
    )}
  </List>
);

const ReduxThunk = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const myGitHubProjectsLista = useSelector(state => state.exemplo.projetos);
  const dispatch = useDispatch();

  const loadGitHub = useCallback(async () => {
    setIsLoading(true);
    await dispatch(ExemploActions.fetchGitHub('igortice'));
    setIsLoading(false);
  }, [setIsLoading, dispatch]);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => loadGitHub());

    return () => onFocus();
  }, [navigation, loadGitHub]);

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
        <MyContent isLoading={isLoading} lista={myGitHubProjectsLista} />
      </Content>
    </Container>
  );
};

export default ReduxThunk;
