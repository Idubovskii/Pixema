import { type IMovie } from '~/types/movie';

import { type BackgroundMovieState } from './types';

export const LOAD_BACKGROUND_MOVIE = 'LOAD_BACKGROUND_MOVIE';
export const defaultValue: BackgroundMovieState = {
  movie: {} as IMovie
};
