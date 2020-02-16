import {applyMiddleware, combineReducers, createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import exemploReducer from './reducers/exemploReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({exemplo: exemploReducer});

export default () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
