import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import FilesystemStorage from 'redux-persist-filesystem-storage';
import RNFetchBlob from 'rn-fetch-blob';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

FilesystemStorage.config({
  storagePath: `${RNFetchBlob.fs.dirs.DocumentDir}/persistStore`,
});

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
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
