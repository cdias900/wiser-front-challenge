import {
  all, put, takeLatest,
} from 'redux-saga/effects';
import {
  actionTypes, authResult, initAuth,
} from './actions';

import api from '../services/api';

function* login(action) {
  yield put(initAuth());
  try {
    const url = Math.random() > 0.5 ? '/1260517b-a0f1-4397-b9ff-bd881a7653ea' : '/9b9cdbe1-3f39-4a41-9ae0-f82a334e2c1f';
    const res = yield api.post(url, {
      email: action.email,
      password: action.password,
    });
    if (res) yield put(authResult(true));
  } catch (e) {
    yield put(authResult(false));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN, login),
  ]);
}

export default rootSaga;
