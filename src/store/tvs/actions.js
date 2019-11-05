import { 
  createHashById,
  generateApiActionRespose
} from '../../utils';
import { KEYS, STRINGS } from '../../constants';
import {
  FETCH_TVS_REQUESTED,
  FETCH_TVS_SUCCEEDED,
  FETCH_TVS_FAILED
} from './types';

export const fetchTvsRequested = () => async (dispatch) => {
  dispatch({ type: FETCH_TVS_REQUESTED })
  // Fetch all tv genres
  const tvGenreList = await generateApiActionRespose(
    FETCH_TVS_FAILED,
    `${STRINGS.TvGenre}${KEYS.API_KEY}${STRINGS.GenreZone}`,
    dispatch
  );

  // Create hash for Tv Genres
  const genresTvHash = createHashById(tvGenreList.genres);

  // Store the tv list by genre
  let tvListByGenres = {};

  // Get popular tv list
  const popularTvListResponse = await generateApiActionRespose(
    FETCH_TVS_FAILED,
    `${STRINGS.PopularTV}${KEYS.API_KEY}${STRINGS.PopularZone}`
  );

  if (popularTvListResponse && popularTvListResponse.results) {
    tvListByGenres = {
      popular: popularTvListResponse.results
    }
  }

  // Loop each genre type and fetch all movies list with that genre
  const ready = await Promise.all(tvGenreList.genres.map(async (tvGenre) => {
      if (!tvGenre.id) return;
  
      let responseData = await generateApiActionRespose(
        FETCH_TVS_FAILED,
        `${STRINGS.DicoveryTv}${KEYS.API_KEY}${STRINGS.GenreZone}${STRINGS.GenreBridge}${tvGenre.id}`
      )

      if (responseData && responseData.results) {
        tvListByGenres = {
          ...tvListByGenres,
          [tvGenre.name]: responseData.results
        }
      }
    })
  )

  if (ready) {
    const payload = {
      tvListByGenres,
      genresTvHash,
      loading: false,
      error: null
    }

    
    dispatch({ type: FETCH_TVS_SUCCEEDED, payload })
  }
}