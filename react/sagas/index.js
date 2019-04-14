import { put, takeLatest, all, call } from 'redux-saga/effects';

function* fetchNews() {
    try {
        // const response = yield axios.get('/data');
        // yield put({type: 'SET_DATA_IN_STORE', json: response.data.articles,});
    } catch (e) {
        console.log(e.toString());
    }
}
function* actionWatcher() {
    yield takeLatest('GET_DATA', fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}