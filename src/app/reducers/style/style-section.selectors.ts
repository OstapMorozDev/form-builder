import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/interfaces/FormElement';
import { styleSectionNode, StyleSectionState } from './style-section.reducer';


export const selectStyleSectionFeature = createFeatureSelector<StyleSectionState>(styleSectionNode);


export const selectedElement = createSelector(
    selectStyleSectionFeature,
    (state: StyleSectionState): FormElement | null => state.selectedFormElement);