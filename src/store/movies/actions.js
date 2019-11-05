import { 
  createHashById,
  generateApiActionRespose
} from '../../utils';
import { KEYS, STRINGS } from '../../constants';
import {
  FETCH_ALL_MOVIES_REQUESTED,
  FETCH_ALL_MOVIES_SUCCESSED,
  FETCH_ALL_MOVIES_FAILED
} from './types';

export const fetchAllMoviesRequested = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_MOVIES_REQUESTED })
  // Fetch all movie genres
  const movieGenreList = await generateApiActionRespose(
    FETCH_ALL_MOVIES_FAILED,
    `${STRINGS.MovieGenre}${KEYS.API_KEY}${STRINGS.GenreZone}`,
    dispatch
  );

  // Create hash for Movie Genres
  const genresMoviesHash = createHashById(movieGenreList.genres);

  // Store the movie list by genre
  let listByGenres = {};

  // Get popular movie list
  const popularMovieListResponse = await generateApiActionRespose(
    FETCH_ALL_MOVIES_FAILED,
    `${STRINGS.PopularMovie}${KEYS.API_KEY}${STRINGS.PopularZone}`
  );

  if (popularMovieListResponse && popularMovieListResponse.results) {
    listByGenres = {
      popular: popularMovieListResponse.results
    }
  }

  // Loop each genre type and fetch all movies list with that genre
  const ready = await Promise.all(movieGenreList.genres.map(async (movieGenre) => {
      if (!movieGenre.id) return;
  
      let responseData = await generateApiActionRespose(
        FETCH_ALL_MOVIES_FAILED,
        `${STRINGS.DicoverMovie}${KEYS.API_KEY}${STRINGS.GenreZone}${STRINGS.GenreBridge}${movieGenre.id}`
      )

      if (responseData && responseData.results) {
        listByGenres = {
          ...listByGenres,
          [movieGenre.name]: responseData.results
        }
      }
    })
  )

  if (ready) {
    const payload = {
      listByGenres,
      genresMoviesHash,
      loading: false,
      error: null
    }

    
    dispatch({ type: FETCH_ALL_MOVIES_SUCCESSED, payload })
  }
}