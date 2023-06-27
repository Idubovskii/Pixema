import { type SelectedPersonState } from './types';
import { type IPerson } from '../../../types/person';

export const LOAD_SELECTED_PERSON = 'LOAD_SELECTED_PERSON';
export const defaultValue: SelectedPersonState = {
  person: {} as IPerson
};
