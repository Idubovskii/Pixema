import {
  type IBaseActionType,
  type IObjectStringList,
  type IUserType
} from '../../../types/types';

interface ILoadUserRegisterActionType extends IBaseActionType {
  payload: IUserType | IObjectStringList;
}

interface IRegisterState {
  isRegistered: boolean;
  user?: IUserType;
  errors?: IObjectStringList;
  isActivated: boolean;
}

export type { ILoadUserRegisterActionType, IRegisterState };
