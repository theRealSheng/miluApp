import {
  FETCH_ALL_MOVIES_REQUESTED,
  FETCH_ALL_MOVIES_SUCCESSED,
  FETCH_ALL_MOVIES_FAILED
} from './types';

const initialState = {
  listByGenres: {},
  genresMoviesHash: {},
  loading: false,
  error: null
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case FETCH_ALL_MOVIES_SUCCESSED: {
      return {
        ...state,
        ...action.payload
      }
    }
    case FETCH_ALL_MOVIES_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

export default movieReducer;