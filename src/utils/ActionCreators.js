import { SETTINGS } from './Settings';

const db = SETTINGS? SETTINGS.Movie_Base_Api : undefined;

//  Handle error for API calls
export const errorHandler = (TYPE_FAIL, e, dispatch) => {
  let payload;
  switch (e.status) {
    case 400:
    case 407:
      payload = 'There was an error in your request, please try again';
      break;
    case 401:
    case 403:
      payload = 'You are not authorized to make this request';
      break;
    case 404:
      payload = 'Please check your internet connection and try again';
      break;
    case 408:
      payload = 'Sorry, the request was cancel due to the time required. Please try again.';
      break;
    case 429:
      payload = 'You have made too many request. Please wait few minutes and try again.';
      break;
    case 500:
    case 502:
    case 504:
      payload = 'We apologized, there was an error at our part. Please try again';
      break;
    case 503:
      payload = 'We enconter a problem in our server. Please try again after 10 min';
      break;
    case 511:
      payload = 'Sorry, there was a problem wiht your request. Please close the app and try again.';
      break;
    default:
      payload = 'We apologized, but an error has occurred, please contact us';
  }
  
  return  dispatch({ type: TYPE_FAIL, payload })
}

// Helper method
export const createHashById = (array) => {
  let hash = {};
  array.forEach((item) => {
    if (!hash[item.id]) {
      hash[item.id] = item;
    }
  });
  return hash;
}

// Standard Action creator method that return response data
export const generateApiActionRespose = async (
  TYPE_FAIL,
  API_ROUTE,
  dispatch
) => {
  try {
    if (!db) return;
    let response = await db.get(API_ROUTE);
    return response.data;
  } catch (e) {
    return errorHandler(TYPE_FAIL, e, dispatch);
  }
}

// Helper method to create a params for API calls
export const generateGenreParams = (genreArray, genresHash) => {
  let genreString = '';
  genreArray.forEach((genre, index) => {
    if (!genresHash[genre]) return;

    if (index !== genreArray.length - 1) {
      genreString += `${genresHash[genre].id}%2C`;
    } else {
      genreString += `${genresHash[genre].id}`;
    }
  });
  return genreString;
}