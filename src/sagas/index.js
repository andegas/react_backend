import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchNews() {
    try {
        const response = yield axios.get('/data');
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