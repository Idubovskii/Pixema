import { LOAD_BACKGROUND_MOVIE } from './constants';
import { type BackgroundMovieAction } from './types';
import { randomMovie } from '../../../api/moviesService';
import { type IMovie } from '../../../types/movie';
import { type GlobalDispatch } from '../../store';

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
