import { type IFilterState } from './types';

export const MODAL_FILTER = 'MODAL_FILTER';
export const defaultValue: IFilterState = {
  sortBy: 'rating.kp',
  yearFilterFrom: '1980',
  yearFilterTo: '2023',
  ratingFilterFrom: '1',
  ratingFilterTo: '10',
  genre: ''
};
