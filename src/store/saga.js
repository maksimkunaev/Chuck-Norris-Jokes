import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../api/getJoke';

function* fetchJoke(action) {
    try {
        const joke = yield call(api, action);

        yield put({ type: "addJoke_async_success", data: { joke }});
        yield put({ type: "status_success" });

    } catch (e) {
        yield put({ type: "addJoke_async_failed", message: e.message});
        yield put({ type: "status_error" });
        console.log(e)
    }
}

function* saga() {
    yield takeEvery("addJoke", fetchJoke);
}

export default saga;
