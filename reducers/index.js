import { combineReducers } from 'redux'

import Sources from './sourcesReducer'
import Articles from './articlesReducer'

const rootReducer = combineReducers({
  Sources,
  Articles
})

export default rootReducer
