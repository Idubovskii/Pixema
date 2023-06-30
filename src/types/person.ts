import { type IFact, type IMovie } from './movie';

export interface Profession {
  value: string;
}

interface IPersonSpouse {
  _id: string;
  id: number;
  name: string;
  hasDivorced: boolean;
  divorcedReason: string;
  children: number;
  relation: string;
}

export interface IPerson {
  spouses: IPersonSpouse[];
  id: string;
  _v: number;
  age: number;
  birthPlace: string[];
  birthday: Date;
  countAwards: number;
  createdAt: Date;
  death?: string;
  deathPlace: string[];
  enName: string;
  facts: IFact[];
  growth: number;
  movies: IMovie[];
  name: string;
  photo: string;
  profession: Profession[];
  sex: string;
  updatedAt: Date;
}
