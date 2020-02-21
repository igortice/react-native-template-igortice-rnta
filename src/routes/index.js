import * as React from 'react';

import MainRoute from './MainRoute';
import ModalRoute from './ModalRoute';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainRoute} />
      <RootStack.Screen name="Modal" component={ModalRoute} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Routes;
