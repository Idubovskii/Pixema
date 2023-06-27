import { CHANGE_THEME } from './constants';
import { type IBaseActionType } from '../../../types/types';

export const ThemeColorAction = (): IBaseActionType => {
  return {
    type: CHANGE_THEME
  };
};
