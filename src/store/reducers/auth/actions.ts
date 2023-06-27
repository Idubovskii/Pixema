import {
  GET_ERRORS,
  GET_TOKEN_FAILED,
  GET_TOKEN_SUCCESS,
  GET_USER,
  SIGN_OUT
} from './constants';
import { type AuthUserActionType } from './types';
import { getTokensUser } from '../../../api/authService';
import {
  fetchRefreshToken,
  getUser,
  patchEmail,
  patchPassword,
  patchUser
} from '../../../api/userService';
import {
  type IBaseActionType,
  type IObjectStringList,
  type ITokenDto,
  type IUserType
} from '../../../types/types';
import { type GlobalDispatch, type GlobalState } from '../../store';

export const getTokensSuccessAction = (
  tokens: ITokenDto
): AuthUserActionType => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: tokens
  };
};

export const getTokensFailedAction = (
  errors: IObjectStringList = {}
): AuthUserActionType => {
  return {
    type: GET_TOKEN_FAILED,
    payload: errors
  };
};

export const getErrorsAction = (errors: IObjectStringList = {}) => {
  return {
    type: GET_ERRORS,
    payload: errors
  };
};

export const getTokensAsyncAction = (email: string, password: string): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await getTokensUser(email, password);
    if (result.isOk) {
      dispatch(getTokensSuccessAction(result.data));
    } else {
      dispatch(getTokensFailedAction());
    }
  };
};

export const refreshTokenAsyncAction = (): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const refreshToken = getState().auth.tokens?.refresh;
    if (!refreshToken) {
      throw new Error('no refresh token');
    }
    const result = await fetchRefreshToken(refreshToken);
    if (result.ok) {
      dispatch(
        getTokensSuccessAction({
          access: result.data.access,
          refresh: refreshToken
        })
      );
    }
  };
};

export const getUserAction = (user: IUserType) => {
  return {
    type: GET_USER,
    payload: user
  };
};

export const getUserAsyncAction = (
  email: string,
  password: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    await dispatch(getTokensAsyncAction(email, password));
    const userData = getState().auth.user?.username;
    const accessToken = getState().auth.tokens?.access;
    const refreshToken = getState().auth.tokens?.refresh;
    const errors = getState().auth.errors;

    if (!refreshToken) {
      if (errors) {
        return;
      }
      await dispatch(getTokensAsyncAction(email, password));
      await dispatch(getUserAsyncAction(email, password, callback));
    } else if (!accessToken) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(getUserAsyncAction(email, password, callback));
    } else if (userData === undefined) {
      const userInfo = await getUser(accessToken);
      dispatch(getUserAction(userInfo.data));
      callback();
    }
  };
};

export const patchUserAsyncAction = (
  username: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;
    if (!accessToken) {
      throw new Error('no Access Token');
    }
    const result = await patchUser(accessToken, username);

    if (result.ok) {
      const userInfo = await getUser(accessToken);
      dispatch(getUserAction(userInfo.data));
      callback();
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(patchUserAsyncAction(username, callback));
    } else {
      dispatch(getErrorsAction());
    }
  };
};

export const patchEmailAsyncAction = (
  password: string,
  email: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;

    if (!accessToken) {
      throw new Error('no Access Token');
    }
    const result = await patchEmail(accessToken, password, email);

    if (result.ok) {
      const userInfo = await getUser(accessToken);
      dispatch(getUserAction(userInfo.data));
      callback();
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(patchEmailAsyncAction(password, email, callback));
    } else {
      dispatch(getErrorsAction());
    }
  };
};

export const patchPasswordAsyncAction = (
  newpassword: string,
  oldpassword: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
    const accessToken = getState().auth.tokens?.access;

    if (!accessToken) {
      throw new Error('no Access Token');
    }
    const result = await patchPassword(accessToken, oldpassword, newpassword);

    if (result.ok) {
      const userInfo = await getUser(accessToken);
      dispatch(getUserAction(userInfo.data));
      callback();
    } else if (result.status === 401) {
      await dispatch(refreshTokenAsyncAction());
      await dispatch(
        patchPasswordAsyncAction(oldpassword, newpassword, callback)
      );
    } else {
      throw new Error('error');
    }
  };
};

export const signOutAction = (): IBaseActionType => {
  return {
    type: SIGN_OUT
  };
};
