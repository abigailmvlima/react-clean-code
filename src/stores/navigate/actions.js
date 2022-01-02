import { store } from '../../app/store'
import types from './types'

const show = (currentRoute, data) => ({
    type: types.states.name,
    current: currentRoute,
    data: data || {},
})

const success = (data) => ({
    type: types.states.success,
    data,
})

const error = (data) => ({
    type: types.states.error,
    data,
})


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    _success: success,
    _error: error,
    show: (currentRoute, data) => {
        store.dispatch(show(currentRoute, data))
    },

    success: (data) => {
        store.dispatch(success(data))
    },

    error: (data) => {
        store.dispatch(error(data))
    },

}