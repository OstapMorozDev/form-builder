import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { authNode, authReducer, AuthState } from './auth/auth.reducer';
import { DropSectionState, dropSectionNode, dropSectionReducer } from './drop/drop.section.reducer';
import { styleSectionNode, StyleSectionState, styleSectionReducer } from './style/style-section.reducer';

export interface State {
  [dropSectionNode]: DropSectionState
  [styleSectionNode]: StyleSectionState
  [authNode]: AuthState
}

export const reducers: ActionReducerMap<State> = {
  [dropSectionNode]: dropSectionReducer,
  [styleSectionNode]: styleSectionReducer,
  [authNode]: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
