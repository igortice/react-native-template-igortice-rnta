import AxiosHooks from '~/screens/exemplos/AxiosHooks';
import EasyGrid from '~/screens/exemplos/EasyGrid';
import Formulario from '~/screens/exemplos/Formulario';
import Lista from '~/screens/exemplos/Lista';
import React from 'react';
import ReduxHooks from '~/screens/exemplos/ReduxHooks';
import ReduxThunk from '~/screens/exemplos/ReduxThunk';
import VetorIcons from '~/screens/exemplos/VetorIcons';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

const MainRoute = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <MainStack.Screen name="Lista" component={Lista} />
    <MainStack.Screen name="EasyGrid" component={EasyGrid} />
    <MainStack.Screen name="AxiosHooks" component={AxiosHooks} />
    <MainStack.Screen name="ReduxHooks" component={ReduxHooks} />
    <MainStack.Screen name="ReduxThunk" component={ReduxThunk} />
    <MainStack.Screen name="Formulario" component={Formulario} />
    <MainStack.Screen name="VetorIcons" component={VetorIcons} />
  </MainStack.Navigator>
);

export default MainRoute;
