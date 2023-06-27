import { MODAL_FILTER } from './constants';
import { type IFilterAction } from './types';

export const filterAction = (
  sortBy: string,
  yearFrom: string,
  yearTo: string,
  ratingFrom: string,
  ratingTo: string,
  genre: string
): IFilterAction => {
  return {
    type: MODAL_FILTER,
    sortBy: sortBy,
    yearFilterFrom: yearFrom,
    yearFilterTo: yearTo,
    ratingFilterFrom: ratingFrom,
    ratingFilterTo: ratingTo,
    genre: genre
  };
};
