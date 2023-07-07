import {
  type IObjectStringList,
  type ITokenDto,
  type IUserType
} from '~/types/types';

import {
  defaultState,
  GET_ERRORS,
  GET_TOKEN_FAILED,
  GET_TOKEN_SUCCESS,
  GET_USER,
  SIGN_OUT
} from './constants';
import { type AuthUserActionType, type IAuthState } from './types';

export const authReducer = (
  state: IAuthState = defaultState,
  action: AuthUserActionType
): IAuthState => {
  switch (action.type) {
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        tokens: action.payload as ITokenDto,
        errors: null
      };
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        tokens: null,
        errors: action.payload as IObjectStringList
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload as IUserType
      };
    }
    case GET_ERRORS: {
      return {
        ...state,
        errors: action.payload as IObjectStringList
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        tokens: null,
        errors: null,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};
