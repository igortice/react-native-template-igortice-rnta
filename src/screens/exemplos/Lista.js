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
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchGitHubProjects} from '~/store/actions/exemploAction';

const Lista = ({navigation}) => {
  const count = useSelector(state => state.exemplo.count);
  let countProjetosGitHub = useSelector(state => state.exemplo.projetos.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubProjects('igortice'));
  }, [dispatch]);

  return (
    <Container style={{backgroundColor: 'beige'}}>
      <Header>
        <Body>
          <Title>Lista</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem icon onPress={() => navigation.navigate('EasyGrid')}>
            <Body>
              <Text>Easy Grid</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate('AxiosHooks')}>
            <Body>
              <Text>Axios Hooks</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate('ReduxHooks')}>
            <Body>
              <Text>Redux Hooks Counter: {count}</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate('ReduxThunk')}>
            <Body>
              <Text>
                Redux Thunk Projetos GitHub:{' '}
                {countProjetosGitHub || 'aguarde...'}
              </Text>
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
