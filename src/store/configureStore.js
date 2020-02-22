import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// clear all stores
// persistor.purge();

export {store, persistor};
