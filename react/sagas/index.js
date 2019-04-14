import { put, takeLatest, all, call } from 'redux-saga/effects';
import Actions from '../actionsTypes';
const data = require('../../data/form_items');

function* fetchNews() {
    try {
        yield put({type: Actions.SET_DATA_IN_STORE, payload: data});
    } catch (e) {
        console.log(e.toString());
    }
}
function* actionWatcher() {
    yield takeLatest(Actions.GET_DATA, fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}