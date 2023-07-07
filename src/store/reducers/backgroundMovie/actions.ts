import { randomMovie } from '~/api/moviesService';
import { type GlobalDispatch } from '~/store/store';
import { type IMovie } from '~/types/movie';

import { LOAD_BACKGROUND_MOVIE } from './constants';
import { type BackgroundMovieAction } from './types';

export const loadBackgroundMovieAction = (
  movie: IMovie
): BackgroundMovieAction => {
  return {
    type: LOAD_BACKGROUND_MOVIE,
    payload: movie
  };
};

export const loadBackgroundMovieAsyncAction = (): any => {
  return (dispatch: GlobalDispatch) => [
    randomMovie().then((movie) => dispatch(loadBackgroundMovieAction(movie)))
  ];
};
