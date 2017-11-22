import { combineReducers } from 'redux'
import newsReducers from './News'

const rootReducer = combineReducers({
  news: newsReducers
})

export default rootReducer
