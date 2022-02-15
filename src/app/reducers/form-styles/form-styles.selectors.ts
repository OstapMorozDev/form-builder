import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { IFormStylingState } from 'src/app/models/interfaces/IFormStylingState';

import { formStylesNode } from './form-styles.reducer';

export const selectDropSectionFeature = createFeatureSelector<IFormStylingState>(formStylesNode);


export const selectFormStyles = createSelector(
  selectDropSectionFeature,
  (state: IFormStylingState): IFormStylingState => state
);



