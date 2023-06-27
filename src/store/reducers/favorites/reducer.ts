import {
  ADD_TO_FAVORITES,
  defaultState,
  DELETE_FROM_FAVORITES
} from './constants';
import { type IFavoriteActionType, type IFavoriteListState } from './types';
import { type IMovie } from '../../../types/movie';

export const favoriteReducer = (
  state: IFavoriteListState = defaultState,
  action: IFavoriteActionType
): IFavoriteListState => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies, action.payload as IMovie]
      };
    }
    case DELETE_FROM_FAVORITES: {
      const filterPosts = state.favoritesMovies.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favoritesMovies: [...filterPosts]
      };
    }
    default: {
      return state;
    }
  }
};
