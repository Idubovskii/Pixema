import { type BackgroundMovieState } from './types';
import { type IMovie } from '../../../types/movie';

export const LOAD_BACKGROUND_MOVIE = 'LOAD_BACKGROUND_MOVIE';
export const defaultValue: BackgroundMovieState = {
  movie: {} as IMovie
};
