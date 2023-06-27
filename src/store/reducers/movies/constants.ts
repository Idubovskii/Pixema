import { type IData } from '../../../types/data';
import { type IMovie } from '../../../types/movie';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const defaultvalue: IData = {
  docs: [] as IMovie[],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0
};
