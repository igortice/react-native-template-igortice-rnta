import AxiosHooks from '~/screens/exemplos/AxiosHooks';
import EasyGrid from '~/screens/exemplos/EasyGrid';
import Lista from '~/screens/exemplos/Lista';
import React from 'react';
import ReduxHooks from '~/screens/exemplos/ReduxHooks';
import ReduxThunk from '~/screens/exemplos/ReduxThunk';
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
  </MainStack.Navigator>
);

export default MainRoute;
