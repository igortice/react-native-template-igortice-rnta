import {persistor, store} from '~/store/configureStore';

import Loading from './utils/Loading';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import Routes from './routes';

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
