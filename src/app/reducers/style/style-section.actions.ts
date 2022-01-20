import { createAction, props } from '@ngrx/store';
import { FormElement } from '../../interfaces/FormElement'



export enum styleSectionActionsType {
    setSelectedElement = '[STYLE-SECTION] setSelectedElement',
}


export const setSelectedElement = createAction (
    styleSectionActionsType.setSelectedElement,
    props<{selectedFormElementId: number}>()
);

