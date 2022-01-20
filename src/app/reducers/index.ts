import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { DropSectionState, dropSectionNode, dropSectionReducer } from './drop/drop.section.reducer';
import { styleSectionNode, StyleSectionState, styleSectionReducer } from './style/style-section.reducer';

export interface State {
  [dropSectionNode]: DropSectionState
  [styleSectionNode]: StyleSectionState
}

export const reducers: ActionReducerMap<State> = {
  [dropSectionNode]: dropSectionReducer,
  [styleSectionNode]: styleSectionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
