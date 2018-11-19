import { all } from 'redux-saga/effects';
import watchColorRequest from '../views/sagaComponent/saga';

export default function* rootSaga() {
    yield all([
        watchColorRequest()
    ]);
}