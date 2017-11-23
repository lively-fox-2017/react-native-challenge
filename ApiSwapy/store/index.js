import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import Thunk from 'redux-thunk'
import BeritaReducer from '../reducers/BeritaReducer'

const test =  applyMiddleware(Thunk)

const store = createStore(
  BeritaReducer,
  compose(test)
)

export default store
