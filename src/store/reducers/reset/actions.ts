import { RESET_FAILED, RESET_SUCCESS } from './constants';
import { type IResetPasswordAction } from './types';
import { fetchNewPassword } from '../../../api/userService';
import { type IObjectStringList } from '../../../types/types';
import { type GlobalDispatch } from '../../store';

export const ResetSuccessAction = (): IResetPasswordAction => {
  return { type: RESET_SUCCESS };
};

export const ResetFailedAction = (
  errors: IObjectStringList
): IResetPasswordAction => {
  return { type: RESET_FAILED, payload: errors };
};

export const resetPasswordAsyncAction = (
  uid: string,
  token: string,
  newpassword: string,
  callback: () => void
): any => {
  return async (dispatch: GlobalDispatch) => {
    const result = await fetchNewPassword(uid, token, newpassword);
    if (result.ok) {
      dispatch(ResetSuccessAction());
      callback();
    } else {
      return;
    }
  };
};
