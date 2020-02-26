import {persistor, store} from '~/store/configureStore';

import LoadingFullCenter from './utils/LoadingFullCenter';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import Routes from './routes';

export default () => (
  <Provider store={store}>
    <PersistGate
      loading={<LoadingFullCenter texto={'Carregando...'} />}
      persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);
