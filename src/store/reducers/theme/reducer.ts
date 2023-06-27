import { CHANGE_THEME, defaultValue } from './constants';
import { type IThemeState } from './types';
import { type IBaseActionType } from '../../../types/types';

export const themeReducer = (
  state: IThemeState = defaultValue,
  action: IBaseActionType
) => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        hasThemeColor: !state.hasThemeColor
      };
    }
    default: {
      return state;
    }
  }
};
