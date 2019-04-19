// import { put, takeLatest, all, call } from 'redux-saga/effects';
// import Actions from '../actionsTypes';
// const data = require('../../data/form_items');
//
// function* fetchNews() {
//     try {
//         yield put({type: Actions.SET_DATA_IN_STORE, payload: data});
//     } catch (e) {
//         console.log(e.toString());
//     }
// }
// function* actionWatcher() {
//     yield takeLatest(Actions.GET_DATA, fetchNews);
// }
//
// export default function* rootSaga() {
//     yield all([
//         actionWatcher(),
//     ]);
// }

import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInput() {
    try {
        const response = yield axios.get('/data');
        yield put({type: 'INPUT_VIEW_RECEIVED', jsonInp: response.data.form[0]});
    } catch (e) {
        console.log(e.toString());
    }
}

function* fetchTxtArea() {
    try {
        const response = yield axios.get('/data');
        yield put({type: 'TEXTAREA_VIEW_RECEIVED', jsonTxtArea: response.data.form[1]});
    } catch (e) {
        console.log(e.toString());
    }
}

function* fetchSelectOption() {
    try {
        const response = yield axios.get('/data');
        yield put({type: 'SELECT_OPTION_VIEW_RECEIVED', jsonSelectOpt: response.data.form[2]});
    } catch (e) {
        console.log(e.toString());
    }
}

function* actionWatcher() {
    yield takeLatest('GET_VIEW', fetchInput);
}

function* actionWatcherTxtArea() {
    yield takeLatest('GET_VIEW_TEXTAREA', fetchTxtArea);
}

function* actionWatcherSelectOption() {
    yield takeLatest('GET_VIEW_SELECT_OPTION', fetchSelectOption);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
        actionWatcherTxtArea(),
        actionWatcherSelectOption()
    ]);
}
