import {applyMiddleware, combineReducers, createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import exemploReducer from './reducers/exemploReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({exemplo: exemploReducer});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
