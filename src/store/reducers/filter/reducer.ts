import { defaultValue, MODAL_FILTER } from './constants';
import { type IFilterAction, type IFilterState } from './types';

export const filterReducer = (
  state: IFilterState = defaultValue,
  action: IFilterAction
): IFilterState => {
  switch (action.type) {
    case MODAL_FILTER: {
      return {
        ...state,
        sortBy: action.sortBy,
        yearFilterFrom: action.yearFilterFrom,
        yearFilterTo: action.yearFilterTo,
        ratingFilterFrom: action.ratingFilterFrom,
        ratingFilterTo: action.ratingFilterTo,
        genre: action.genre
      };
    }
    default: {
      return state;
    }
  }
};
