import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';

import { formStylesNode, FormStylingState } from './form-styles.reducer';

export const selectDropSectionFeature = createFeatureSelector<FormStylingState>(formStylesNode);


export const selectFormStyles = createSelector (
    selectDropSectionFeature,
    (state: FormStylingState):FormStylingState => state
);



