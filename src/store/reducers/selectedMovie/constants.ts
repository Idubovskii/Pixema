import { type SelectedMovieState } from './types';
import { type IMovie } from '../../../types/movie';

export const LOAD_SELECTED_MOVIE = 'LOAD_SELECTED_MOVIE';
export const defaultValue: SelectedMovieState = {
  movie: {} as IMovie
};
