/* eslint-disable require-yield */
import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import actions from './actions'
import { store } from '../../app/store'
import types from './types'

function* edit({ current, data }) {}

function* add(params) {
    // função que salva a lista das tarefas
	try {
        const {title} = params?.value
		
        // pega valor do estado dos reducers ou do navegador
        const state = yield store.getState() 
        
        // pega valor da lista em data
        const stateTask = state?.TASKS?.data || [] 
		
        const tasks = [...stateTask] // gera a lista 

        // adiciona o item novo na lista
		tasks.push({
			title,
		})


        // salva os dados da lista nova no estado ou reducer
		yield put(actions.success(tasks))
	} catch (error) {
        console.log(error)
    }
}

export default [takeEvery(types.states.edit, edit), takeEvery(types.states.add, add)]
