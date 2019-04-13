import { put, takeLatest, all, call } from 'redux-saga/effects';
import {fetchData} from '../Api';
// import axios from 'axios';

function* fetchNews() {
    try {
        const response = yield call(fetchData);
        // const response = yield axios.get('/data');
        yield put({type: 'NEWS_RECEIVED', json: response.data.articles,});
    } catch (e) {
        console.log(e.toString());
    }
}
function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}