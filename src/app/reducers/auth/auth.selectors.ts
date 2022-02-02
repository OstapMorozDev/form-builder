import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import { authNode, AuthState } from './auth.reducer';


export const selectStyleSectionFeature = createFeatureSelector<AuthState>(authNode);


// export const selectedElement = createSelector(
//     selectStyleSectionFeature,
//     (state: AuthState): FormElement | null => state);