import reducers from './reducers'

import thunkMiddleware from 'redux-thunk'

import {
    createLogger
} from 'redux-logger'

import {
    createStore,
    applyMiddleware
} from 'redux'

const loggerMiddleware = createLogger()

export const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)