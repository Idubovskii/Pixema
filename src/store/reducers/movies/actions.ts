import {
  movieFilter,
  moviesPersonResponseById,
  moviesResponse,
  moviesResponseBySearch
} from '~/api/moviesService';
import { type GlobalDispatch } from '~/store/store';
import { type IData } from '~/types/data';

import { LOAD_MOVIES } from './constants';
import { type IMoviesListAction } from './types';

export const loadMoviesAction = (movies: IData): IMoviesListAction => {
  return {
    type: LOAD_MOVIES,
    payload: movies
  };
};

export const loadMoviesAsyncAction = (limit: number): any => {
  return (dispatch: GlobalDispatch) => {
    void moviesResponse(limit).then((movies) =>
      dispatch(loadMoviesAction(movies))
    );
  };
};

export const loadMoviesByIdAsyncAction = (
  limit: number,
  query: string
): any => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const movies = await moviesPersonResponseById(limit, query);
      dispatch(loadMoviesAction(movies));
    } catch (error) {
      console.error(error);
    }
  };
};

export const loadMoviesBySearchAsyncAction = (
  limit: number,
  query: string | undefined
): any => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const movies = await moviesResponseBySearch(limit, query);
      dispatch(loadMoviesAction(movies));
    } catch (error) {
      console.error(error);
    }
  };
};

export const loadMoviesByfilterAsyncAction = (
  query: string,
  limit: number
): any => {
  return async (dispatch: GlobalDispatch) => {
    try {
      const movies = await movieFilter(query, limit);
      dispatch(loadMoviesAction(movies));
    } catch (error) {
      console.error(error);
    }
  };
};
