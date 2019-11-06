import {
  FETCH_MOVIES_REQUESTED,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIES_FAILED
} from './types';

const initialState = {
  movieListByGenres: {},
  genresMoviesHash: {},
  loading: false,
  error: null
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case FETCH_MOVIES_SUCCEEDED: {
      return {
        ...state,
        ...action.payload
      }
    }
    case FETCH_MOVIES_FAILED: {
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