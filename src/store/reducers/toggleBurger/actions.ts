import { TOGGLE_BURGER } from './constants';
import { type IBaseActionType } from '../../../types/types';

export const burgerMenuAction = (): IBaseActionType => {
  return {
    type: TOGGLE_BURGER
  };
};
