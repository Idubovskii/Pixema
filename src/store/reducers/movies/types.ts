import { type IData } from '~/types/data';
import { type IBaseActionType } from '~/types/types';

export interface IMoviesList {
  docs: IData;
}

export interface IMoviesListAction extends IBaseActionType {
  payload: IData;
}
