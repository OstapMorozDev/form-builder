import { createAction, props } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';

export enum styleSectionActionsType {
    setSelectedElement = '[STYLE-SECTION] setSelectedElement',
}


export const setSelectedElement = createAction (
    styleSectionActionsType.setSelectedElement,
    props<{selectedElement: FormElement}>()
);

