// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { FormElement } from 'src/app/classes/form-element.class';
// import { dropSectionNode, DropSectionState } from './drop.section.reducer';


// export const selectDropSectionFeature = createFeatureSelector<DropSectionState>(dropSectionNode);

// export const selectFormElements = createSelector(
//     selectDropSectionFeature,
//     (state: DropSectionState):FormElement[] => state.formElements);

// export const selectFormTitle = createSelector (
//     selectDropSectionFeature,
//     (state: DropSectionState):string => state.formTitle
// );

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authNode, AuthState } from "./auth.reducer";

export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);

export const selectAuthErrorMsg = createSelector(
  selectAuthFeature,
  (state: AuthState): string => state.errorMessage
);

export const selectIsAuthenticated = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isAuthenticated
);



