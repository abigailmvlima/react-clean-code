/* eslint-disable require-yield */
import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import actions from './actions'
import { store } from '../../app/store'
import types from './types'
import moment from 'moment'

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
        const id = stateTask.length + 1

        const tasks = [...stateTask] // gera a lista 

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

export default [takeEvery(types.states.edit, edit), takeEvery(types.states.add, add)]
