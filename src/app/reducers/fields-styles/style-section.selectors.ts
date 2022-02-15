import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { styleSectionNode, FieldStylingState } from './style-section.reducer';


export const selectStyleSectionFeature = createFeatureSelector<FieldStylingState>(styleSectionNode);


export const selectedElement = createSelector(
  selectStyleSectionFeature,
  (state: FieldStylingState): FormElement | null => state.selectedFormElement);
