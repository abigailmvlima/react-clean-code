/* eslint-disable require-yield */
import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import actions from './actions'
import { store } from '../../app/store'
import types from './types'
import moment from 'moment'

export const sortBy = (function () {
    let toString = Object.prototype.toString,
        // default parser function
        parse = function (x) {
            return x
        },
        // gets the item to be sorted
        getItem = function (x) {
            let isObject = x != null && typeof x === 'object'
            let isProp = isObject && this.prop in x
            return this.parser(isProp ? x[this.prop] : x)
        }

    return function sortby(array, cfg) {
        if (!(array instanceof Array && array.length)) return []
        if (toString.call(cfg) !== '[object Object]') cfg = {}
        if (typeof cfg.parser !== 'function') cfg.parser = parse
        cfg.desc = !!cfg.desc ? -1 : 1
        return array.sort(function (a, b) {
            a = getItem.call(cfg, a)
            b = getItem.call(cfg, b)
            return cfg.desc * (a < b ? -1 : +(a > b))
        })
    }
})()


function* edit(params) {
    try {
        const state = yield store.getState()
        const stateTask = state?.TASKS?.data || []
        const tasks = [...stateTask.filter(f => f.id != params?.value?.id), params?.value] // gera a lista 
        console.log({ stateTask, tasks, params })
        yield put(actions.success(tasks))

    } catch (error) {
        console.log(error)
    }
}

function* add(params) {
    // função que salva a lista das tarefas
    try {
        const { title } = params?.value

        // pega valor do estado dos reducers ou do navegador
        const state = yield store.getState()

        // pega valor da lista em data
        const stateTask = state?.TASKS?.data || []

        // ordena a lista pelo primeiro indice do objeto que é o id
        const tasks = sortBy(stateTask)
        const id = tasks[tasks.length - 1]?.id + 1

        // adiciona o item novo na lista
        tasks.push({
            id,
            title,
        })


        // salva os dados da lista nova no estado ou reducer
        yield put(actions.success(tasks))

    } catch (error) {
        console.log(error)
    }
}

function* remove(params) {
    try {
        const state = yield store.getState()
        const stateTask = state?.TASKS?.data || []
        const tasks = [...stateTask.filter(f => f.id != params?.value?.id)] // gera a lista 
        yield put(actions.success(tasks))

    } catch (error) {
        console.log(error)
    }
}


export default [
    takeEvery(types.states.edit, edit),
    takeEvery(types.states.add, add),
    takeEvery(types.states.remove, remove)
]
