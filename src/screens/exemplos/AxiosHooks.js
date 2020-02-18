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

import {API} from '~/configs/Api';
import LoadContentList from '~/utils/LoadContentList';
import React from 'react';
import {makeUseAxios} from 'axios-hooks';

const useAxios = makeUseAxios({
  axios: API,
});

const MyList = ({lista}) =>
  lista.colors.map((e, i) => (
    <ListItem key={i}>
      <Text style={{color: e.color}}>{e.color}</Text>
    </ListItem>
  ));

const AxiosHooks = ({navigation}) => {
  const [{data, loading}] = useAxios('/list_colors');

  const MyContent = () => (
    <List>
      {loading ? (
        <ListItem>
          <LoadContentList />
        </ListItem>
      ) : (
        <MyList lista={data} />
      )}
    </List>
  );

  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Axios Hooks</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <MyContent />
      </Content>
    </Container>
  );
};

export default AxiosHooks;
