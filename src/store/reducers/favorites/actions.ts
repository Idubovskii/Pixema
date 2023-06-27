import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './constants';
import { type IMovie } from '../../../types/movie';

export const addToFavoritesPostsAction = (movie: IMovie) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: movie
  };
};
export const deleteFromFavoritesPostsAction = (id: number | undefined) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: id
  };
};
