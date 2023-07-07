import { personResponseById } from '~/api/moviesService';
import { type GlobalDispatch } from '~/store/store';
import { type IPerson } from '~/types/person';

import { LOAD_SELECTED_PERSON } from './constants';
import { type SelectedPersonAction } from './types';

export const loadSelectedPersonAction = (
  person: IPerson
): SelectedPersonAction => {
  return {
    type: LOAD_SELECTED_PERSON,
    payload: person
  };
};

export const loadSelectedPersonAsyncAction = (id: string | undefined): any => {
  return async (dispatch: GlobalDispatch): Promise<void> => {
    try {
      const person = await personResponseById(id);
      dispatch(loadSelectedPersonAction(person));
    } catch (error) {
      console.error(error);
    }
  };
};
