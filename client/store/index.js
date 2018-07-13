import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import listVideo from '../reducers'

// const store = createStore(listVideo, applyMiddleware(thunk))
//
// export default store
const compose1 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let finalCreateStore;

finalCreateStore = compose1(
  applyMiddleware(thunk)
  // require('redux-devtools').devTools()
)

export default createStore(listVideo, finalCreateStore)
