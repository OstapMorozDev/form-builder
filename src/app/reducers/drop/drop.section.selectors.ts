import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import { dropSectionNode, DropSectionState } from './drop.section.reducer';


export const selectDropSectionFeature = createFeatureSelector<DropSectionState>(dropSectionNode);

export const selectFormElements = createSelector(
    selectDropSectionFeature,
    (state: DropSectionState):FormElement[] => state.formElements);

export const selectFormTitle = createSelector (
    selectDropSectionFeature,
    (state: DropSectionState):string => state.formTitle
);



