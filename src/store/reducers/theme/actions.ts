import { type IBaseActionType } from '~/types/types';

import { CHANGE_THEME } from './constants';

export const ThemeColorAction = (): IBaseActionType => {
  return {
    type: CHANGE_THEME
  };
};
