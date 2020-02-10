import {combineReducers, createStore} from 'redux';

import exemploReducer from './reducers/exemploReducer';

const rootReducer = combineReducers({counter: exemploReducer});

export default () => createStore(rootReducer);
