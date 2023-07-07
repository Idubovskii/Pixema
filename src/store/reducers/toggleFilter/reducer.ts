import { type IBaseActionType } from '~/types/types';

export interface IBurgerState {
  isOpen: boolean;
}

export const toggleFilterAction = (): IBaseActionType => {
  return {
    type: TOGGLE_FILTER
  };
};

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const defaultValue: IBurgerState = { isOpen: false };

export const toggleFilterReducer = (
  state: IBurgerState = defaultValue,
  action: IBaseActionType
): IBurgerState => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      return {
        isOpen: !state.isOpen
      };
    }
    default: {
      return state;
    }
  }
};
