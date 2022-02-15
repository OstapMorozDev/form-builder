import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { IFieldStylingState } from 'src/app/models/interfaces/IFieldStylingState';
import { styleSectionNode } from './style-section.reducer';


export const selectStyleSectionFeature = createFeatureSelector<IFieldStylingState>(styleSectionNode);


export const selectedElement = createSelector(
  selectStyleSectionFeature,
  (state: IFieldStylingState): FormElement | null => state.selectedFormElement);
