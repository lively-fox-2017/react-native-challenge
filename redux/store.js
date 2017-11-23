import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import thunk from 'redux-thunk';
import MovieDetail from './reducers/MovieDetail';

const reducers = combineReducers({ MovieDetail });

export default createStore(reducers, undefined, applyMiddleware(thunk));
