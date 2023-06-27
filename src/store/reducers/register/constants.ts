import { type IRegisterState } from './types';

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const ACTIVATION_FAILED = 'ACTIVATION_FAILED';
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS';
export const defaultState: IRegisterState = {
  user: undefined,
  isRegistered: false,
  isActivated: false
};
