import * as Yup from 'yup';

/* eslint-disable react-native/no-inline-styles */
import {
  Body,
  Button,
  Container,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Right,
  Spinner,
  Text,
  Title,
} from 'native-base';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ExemploActions} from '~/store/ducks/exemploDuck';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Campo Inválido!')
    .required('Obrigatório!'),
  password: Yup.string()
    .min(3, 'Pelo menos 3 caracteres!')
    .required('Obrigatório!'),
});

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = useSelector(state => state.exemplo.login);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={LoginSchema}
      onSubmit={values => {
        const submitLogin = async () => {
          setIsLoading(true);
          await dispatch(ExemploActions.fetchLogin(values));
          setIsLoading(false);
        };

        submitLogin().then(_ => navigation.navigate('Modal'));
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <Form>
          <Item floatingLabel error={!!errors.email}>
            <Label>Email {errors.email}</Label>
            <Input
              autoCapitalize={'none'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email ? <Icon name="close-circle" /> : null}
          </Item>
          <Item floatingLabel error={!!errors.password}>
            <Label>Password {errors.password}</Label>
            <Input
              autoCapitalize={'none'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password ? <Icon name="close-circle" /> : null}
          </Item>
          <Button
            onPress={handleSubmit}
            style={{marginTop: 30}}
            block
            disabled={isLoading}>
            {isLoading ? <Spinner color="gray" /> : <Text>Enviar</Text>}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const Formulario = ({navigation}) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Formik</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <FormLogin />
      </Content>
    </Container>
  );
};

export default Formulario;
