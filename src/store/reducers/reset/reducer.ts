import { defaultState, RESET_FAILED, RESET_SUCCESS } from './constants';
import { type IResetPasswordAction, type IResetState } from './types';
import { type IObjectStringList } from '../../../types/types';

export const resetReducer = (
  state: IResetState = defaultState,
  action: IResetPasswordAction
): IResetState => {
  switch (action.type) {
    case RESET_SUCCESS: {
      return {
        ...state,
        isReset: true,
        errors: null
      };
    }
    case RESET_FAILED: {
      return {
        ...state,
        isReset: false,
        errors: action.payload as IObjectStringList
      };
    }
    default: {
      return state;
    }
  }
};
