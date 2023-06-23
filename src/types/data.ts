import { type IMovie, type IMoviePerson } from './movie';

export interface IData {
  docs: IMovie[];
  total?: number;
  limit?: number;
  page?: number;
  pages?: number;
}

export interface IDataPerson {
  docs: IMoviePerson[];
  total?: number;
  limit?: number;
  page?: number;
  pages?: number;
}
