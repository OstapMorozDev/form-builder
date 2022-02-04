import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import { authNode, AuthState } from './auth.reducer';


export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);



export const selectIsAuthenticated = createSelector(
    selectAuthFeature,
    (state: AuthState): boolean => state.isAuthenticated);

export const selectErrorMessage = createSelector(
    selectAuthFeature,
    (state: AuthState): string | null => state.errorMessage);
