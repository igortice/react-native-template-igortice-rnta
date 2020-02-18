import * as React from 'react';

import AxiosHooks from '~/screens/exemplos/AxiosHooks';
import EasyGrid from '~/screens/exemplos/EasyGrid';
import Lista from '~/screens/exemplos/Lista';
import {NavigationContainer} from '@react-navigation/native';
import ReduxHooks from '~/screens/exemplos/ReduxHooks';
import ReduxThunk from '~/screens/exemplos/ReduxThunk';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="EasyGrid" component={EasyGrid} />
      <Stack.Screen name="AxiosHooks" component={AxiosHooks} />
      <Stack.Screen name="ReduxHooks" component={ReduxHooks} />
      <Stack.Screen name="ReduxThunk" component={ReduxThunk} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
