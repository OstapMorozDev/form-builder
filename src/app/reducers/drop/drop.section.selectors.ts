import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/interfaces/FormElement';
import { dropSectionNode, DropSectionState } from './drop.section.reducer';


export const selectDropSectionFeature = createFeatureSelector<DropSectionState>(dropSectionNode);

export const selectFormElements = createSelector(
    selectDropSectionFeature,
    (state: DropSectionState):FormElement[] => state.formElements
)