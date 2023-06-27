import { type IData } from '../../../types/data';
import { type IMovie } from '../../../types/movie';
import { type IBaseActionType } from '../../../types/types';

export interface IFavoriteActionType extends IBaseActionType {
  payload: IMovie | IData[] | number;
}

export interface IFavoriteType {
  id: number;
  favoritesMovies: IMovie[];
}

export interface IFavoriteListState {
  favoritesMovies: IMovie[];
}
