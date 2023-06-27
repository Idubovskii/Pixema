import { defaultValue, LOAD_BACKGROUND_MOVIE } from './constants';
import { type BackgroundMovieAction, type BackgroundMovieState } from './types';

export const backgroundMovieReducer = (
  state: BackgroundMovieState = defaultValue,
  action: BackgroundMovieAction
): BackgroundMovieState => {
  switch (action.type) {
    case LOAD_BACKGROUND_MOVIE: {
      return {
        ...state,
        movie: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
