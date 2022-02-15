import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { authNode, authReducer, AuthState } from './auth/auth.reducer';
import { DropSectionState, dropSectionNode, dropSectionReducer } from './drop/drop.section.reducer';
import { styleSectionNode, FieldStylingState, styleSectionReducer } from './fields-styles/style-section.reducer';
import { formStylesNode, formStylesReducer, FormStylingState } from './form-styles/form-styles.reducer';

export interface State {
  [dropSectionNode]: DropSectionState
  [styleSectionNode]: FieldStylingState
  [authNode]: AuthState
  [formStylesNode]: FormStylingState
}

export const reducers: ActionReducerMap<State> = {
  [dropSectionNode]: dropSectionReducer,
  [styleSectionNode]: styleSectionReducer,
  [authNode]: authReducer,
  [formStylesNode]: formStylesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
