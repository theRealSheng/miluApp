import {
  FETCH_TVS_REQUESTED,
  FETCH_TVS_SUCCEEDED,
  FETCH_TVS_FAILED
} from './types';

const initialState = {
  tvListByGenres: {},
  genresTvHash: {},
  loading: false,
  error: null
}

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TVS_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case FETCH_TVS_SUCCEEDED: {
      return {
        ...state,
        ...action.payload
      }
    }
    case FETCH_TVS_FAILED: {
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

export default tvReducer;