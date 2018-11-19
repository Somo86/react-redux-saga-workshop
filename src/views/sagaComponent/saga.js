import { takeEvery, put } from 'redux-saga/effects';
import {FETCH_COLOR_LIST, getColorListSuccess} from "./action";
import Service from '../../services/color-service';

export default function* watchColorRequest() {
    yield takeEvery(FETCH_COLOR_LIST, fetchColorList);
}

function* fetchColorList() {
    try {
        let response = yield Service.fetch();
        yield put(getColorListSuccess(response));
    } catch (error) {
        throw new Error(error);
    }
}
