import { type IBaseActionType } from '~/types/types';

import { TOGGLE_BURGER } from './constants';

export const burgerMenuAction = (): IBaseActionType => {
  return {
    type: TOGGLE_BURGER
  };
};
