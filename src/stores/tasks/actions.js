import { store } from '../../app/store'
import types from './types'

const getList = (data) => ({
    type: types.states.name,
    data
})

const add = (data) => ({
    type: types.states.add,
    data
})

const edit = (data) => ({
    type: types.states.edit,
    data
})

const success = (data) => ({
    type: types.states.success,
    data
})

const error = (data) => ({
    type: types.states.error,
    data
})

export default {

    list: (data) => {
        store.dispatch(getList(data))
    },

    add: (data) => {
        store.dispatch(add(data))
    },
    
    edit: (data) => {
        store.dispatch(edit(data))
    },

    success,
    error,

}