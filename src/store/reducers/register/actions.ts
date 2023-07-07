import { activateUser, registerUser } from '~/api/registerService';
import { type GlobalDispatch } from '~/store/store';
import { type IObjectStringList, type IUserType } from '~/types/types';

import {
  ACTIVATION_FAILED,
  ACTIVATION_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS
} from './constants';
import { type ILoadUserRegisterActionType } from './types';

export const loadUserRegisterAction = (
  user: IUserType
): ILoadUserRegisterActionType => {
  return { type: REGISTRATION_SUCCESS, payload: user };
};

export const errorRegistrationUserAction = (errors: IObjectStringList = {}) => {
  return {
    type: REGISTRATION_FAILED,
    payload: errors
  };
};

export const registerUserAsyncAction = (
  username: string,
  email: string,
  password: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await registerUser(username, email, password);
    if (result.isOk) {
      dispatch(loadUserRegisterAction(result.data as IUserType));
      callback();
    } else {
      dispatch(errorRegistrationUserAction());
    }
  };
};

export const activationSuccessAction = (): ILoadUserRegisterActionType => {
  return {
    type: ACTIVATION_SUCCESS,
    payload: {}
  };
};

export const activationFailedAction = (
  errors: IObjectStringList = {}
): ILoadUserRegisterActionType => {
  return {
    type: ACTIVATION_FAILED,
    payload: errors
  };
};

export const activateUserAsyncAction = (
  uid: string,
  token: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await activateUser(uid, token);

    if (result.status === 204) {
      dispatch(activationSuccessAction());
      callback();
    } else {
      dispatch(activationFailedAction());
    }
  };
};
