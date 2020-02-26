import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import FilesystemStorage from 'redux-persist-filesystem-storage';
import RNFetchBlob from 'rn-fetch-blob';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './ducks/rootReducer';
import thunk from 'redux-thunk';

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
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

// clear all stores
// persistor.purge();

export {store, persistor};
