import { LOAD_MOVIES } from './constants';
import { type IMoviesListAction } from './types';
import {
  movieFilter,
  moviesPersonResponseById,
  moviesResponse,
  moviesResponseBySearch
} from '../../../api/moviesService';
import { type IData } from '../../../types/data';
import { type GlobalDispatch } from '../../store';

export const loadMoviesAction = (movies: IData): IMoviesListAction => {
  return {
    type: LOAD_MOVIES,
    payload: movies
  };
};

export const loadMoviesAsyncAction = (limit: number): any => {
  return (dispatch: GlobalDispatch): any => {
    void moviesResponse(limit).then((movies: IData) =>
      dispatch(loadMoviesAction(movies))
    );
  };
};

export const loadMoviesByIdAsyncAction = (
  limit: number,
  query: string
): any => {
  return async (dispatch: GlobalDispatch): Promise<void> => {
    try {
      const movies = (await moviesPersonResponseById(limit, query)) as IData;
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
  return async (dispatch: GlobalDispatch): Promise<void> => {
    try {
      const movies = await moviesResponseBySearch(limit, query);
      dispatch(loadMoviesAction(movies as IData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const loadMoviesByfilterAsyncAction = (
  query: string,
  limit: number
): any => {
  return async (dispatch: GlobalDispatch): Promise<void> => {
    try {
      const movies = await movieFilter(query, limit);
      dispatch(loadMoviesAction(movies as IData));
    } catch (error) {
      console.error(error);
    }
  };
};
