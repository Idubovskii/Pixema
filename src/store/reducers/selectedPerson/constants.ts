import { type IPerson } from '~/types/person';

import { type SelectedPersonState } from './types';

export const LOAD_SELECTED_PERSON = 'LOAD_SELECTED_PERSON';
export const defaultValue: SelectedPersonState = {
  person: {} as IPerson
};
