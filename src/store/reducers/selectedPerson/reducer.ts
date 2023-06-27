import { defaultValue, LOAD_SELECTED_PERSON } from './constants';
import { type SelectedPersonAction, type SelectedPersonState } from './types';

export const selectedPersonReducer = (
  state: SelectedPersonState = defaultValue,
  action: SelectedPersonAction
): SelectedPersonState => {
  switch (action.type) {
    case LOAD_SELECTED_PERSON: {
      return {
        ...state,
        person: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
