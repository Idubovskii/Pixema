import { type IPerson } from '~/types/person';
import { type IBaseActionType } from '~/types/types';

export interface SelectedPersonState {
  person: IPerson;
}

export interface SelectedPersonAction extends IBaseActionType {
  payload: IPerson;
}
