import { type IMovie } from '../../../types/movie';
import { type IBaseActionType } from '../../../types/types';

export interface SelectedMovieState {
  movie: IMovie;
}

export interface SelectedMovieAction extends IBaseActionType {
  payload: IMovie;
}
