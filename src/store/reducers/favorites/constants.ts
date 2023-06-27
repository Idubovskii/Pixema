import { type IFavoriteListState } from './types';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';
export const defaultState: IFavoriteListState = {
  favoritesMovies: []
};
