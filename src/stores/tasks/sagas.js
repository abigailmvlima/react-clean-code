import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import actions from './actions'
import handlers from '../../handlers'
import types from './types'

function* edit({ current, data }) {
    
}

function* add({ current, data }) {

}

export default [
    takeEvery(types.states.edit, edit),
    takeEvery(types.states.add, add),

]