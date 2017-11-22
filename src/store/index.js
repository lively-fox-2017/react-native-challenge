import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const middleware = applyMiddleware(thunk)

const store = createStore(reducers, middleware)
