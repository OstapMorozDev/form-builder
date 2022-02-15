import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { IDropSectionState } from 'src/app/models/interfaces/IDropSectionState';
import { dropSectionNode } from './drop.section.reducer';


export const selectDropSectionFeature = createFeatureSelector<IDropSectionState>(dropSectionNode);

export const selectFormElements = createSelector(
    selectDropSectionFeature,
    (state: IDropSectionState):FormElement[] => state.formElements);

export const selectFormTitle = createSelector (
    selectDropSectionFeature,
    (state: IDropSectionState):string => state.formTitle
);



