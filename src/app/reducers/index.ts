import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { DropSectionState, dropSectionNode, dropSectionReducer } from './drop/drop.section.reducer';

export interface State {
  [dropSectionNode]: DropSectionState
}

export const reducers: ActionReducerMap<State> = {
  [dropSectionNode]: dropSectionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
