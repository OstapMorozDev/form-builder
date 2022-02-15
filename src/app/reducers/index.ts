import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IAuthState } from '../models/interfaces/IAuthState';
import { IDropSectionState } from '../models/interfaces/IDropSectionState';
import { IFieldStylingState } from '../models/interfaces/IFieldStylingState';
import { IFormStylingState } from '../models/interfaces/IFormStylingState';
import { authNode, authReducer } from './auth/auth.reducer';
import { dropSectionNode, dropSectionReducer } from './drop/drop.section.reducer';
import { styleSectionNode, styleSectionReducer } from './fields-styles/style-section.reducer';
import { formStylesNode, formStylesReducer } from './form-styles/form-styles.reducer';


export interface State {
  [dropSectionNode]: IDropSectionState
  [styleSectionNode]: IFieldStylingState
  [authNode]: IAuthState
  [formStylesNode]: IFormStylingState
}

export const reducers: ActionReducerMap<State> = {
  [dropSectionNode]: dropSectionReducer,
  [styleSectionNode]: styleSectionReducer,
  [authNode]: authReducer,
  [formStylesNode]: formStylesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
