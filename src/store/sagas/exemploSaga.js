import {COUNTER_CHANGE, FETCH_GITHUB} from '~/constants/exemplo';
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import GitHubService from '~/services/exemplo/GitHubService';
import ProjetoModel from '~/models/exemplo/ProjetoModel';
import Sleep from '~/utils/Sleep';

function* changeCount({count}) {
  try {
    yield put({type: COUNTER_CHANGE, payload: count});
  } catch (e) {
    yield put({type: 'SET_COUNT_FAILED', message: e.message});
  }
}

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};

function* fetchGitHub({username}) {
  try {
    const response = yield call(GitHubService.myRepo, username);

    yield Sleep(2000);

    const payload = filterData(response.data);

    yield put({type: FETCH_GITHUB, payload});
  } catch (e) {
    yield put({type: 'SET_COUNT_FAILED', message: e.message});
  }
}

function* exemploSaga() {
  yield all([
    takeLatest('fetchGitHub', fetchGitHub),
    takeEvery('changeCount', changeCount),
  ]);
}

export default exemploSaga;
