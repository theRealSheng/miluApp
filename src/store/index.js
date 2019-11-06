import { combineReducers } from 'redux';
import moviesReducer from './movies';
import tvsReducer from './tvs';

export default combineReducers({
  movies: moviesReducer,
  tvs: tvsReducer
})
