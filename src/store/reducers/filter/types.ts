import { type IBaseActionType } from '~/types/types';

export interface IFilterState {
  sortBy: string;
  yearFilterFrom: string;
  yearFilterTo: string;
  ratingFilterFrom: string;
  ratingFilterTo: string;
  genre: string;
}

export interface IFilterAction extends IBaseActionType {
  sortBy: string;
  yearFilterFrom: string;
  yearFilterTo: string;
  ratingFilterFrom: string;
  ratingFilterTo: string;
  genre: string;
}
