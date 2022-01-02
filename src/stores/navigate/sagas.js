import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import actions from './actions'
import handlers from '../../handlers'
import types from './types'

function* execute({ current, data }) {
    if (!current) yield put(actions._error({ msg: 'Unreported route' }))
    yield put(actions._success({ data }))
    yield handlers.navigate.push(current)
}

const list = [takeEvery(types.states.name, execute)]

export default list
