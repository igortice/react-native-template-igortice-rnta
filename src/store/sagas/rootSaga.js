import {all} from 'redux-saga/effects';
import exemploSaga from './exemploSaga';

export default function* rootSaga() {
  yield all([exemploSaga()]);
}
