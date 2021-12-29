import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'
import sagas from './sagas'

export const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = []
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistedReducer(persistConfig, reducers(history))
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
)

const persistor = persistStore(store)
sagaMiddleware.run(sagas)

export { store, persistor }