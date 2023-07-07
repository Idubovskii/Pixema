import { moviesResponseById } from '~/api/moviesService';
import { type GlobalDispatch } from '~/store/store';
import { type IMovie } from '~/types/movie';

import { LOAD_SELECTED_MOVIE } from './constants';
import { type SelectedMovieAction } from './types';

export const loadSelectedMovieAction = (movie: IMovie): SelectedMovieAction => {
  return {
    type: LOAD_SELECTED_MOVIE,
    payload: movie
  };
};

export const loadSelectedMovieAsyncAction = (id: string | undefined): any => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const movie = await moviesResponseById(id);
      dispatch(loadSelectedMovieAction(movie));
    } catch (error) {
      console.error(error);
    }
  };
};
