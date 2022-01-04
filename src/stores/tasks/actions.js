import { store } from '../../app/store'
import types from './types'

const getList = (data) => ({
    type: types.states.name,
    data
})

const add = (data) => ({
    type: types.states.add,
    value: data
})

const edit = (data) => ({
    type: types.states.edit,
    value: data
})

//remove o item da lista
const remove = (data) => ({
    type: types.states.remove,
    value: data
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

    remove: (data) => {
        store.dispatch(remove(data))
    },

    success,
    error,

}