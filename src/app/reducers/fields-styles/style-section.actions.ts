import { createAction, props } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';

export enum styleSectionActionsType {
    setSelectedElement = '[STYLE-SECTION] setSelectedElement',
}


export const setSelectedElement = createAction (
    styleSectionActionsType.setSelectedElement,
    props<{selectedElement: FormElement}>()
);

