import { all, takeEvery } from 'redux-saga/effects'
import sagas from '../stores/sagas'

export default function* rootSaga() {
    yield all(sagas)
}