import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const middleware = applyMiddleware(thunkMiddleware)

export default createStore(
  rootReducer,
  compose(middleware)
)
