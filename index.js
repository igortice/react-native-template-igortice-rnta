import 'react-native-gesture-handler';

import App from './src';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import {name as appName} from './app.json';
import configureStore from '~/store/configureStore';

const store = configureStore();
const appRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
