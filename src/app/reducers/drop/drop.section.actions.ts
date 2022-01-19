import { createAction, props } from '@ngrx/store';
import { FormElement } from '../../interfaces/FormElement'

export enum dropSectionActionsType {
    addFormElement = 'DROP-SECTION addFormElement',
    moveFormElement = 'DROP-SECTION moveFormElement'
}

export const addFormElement = createAction(
    dropSectionActionsType.addFormElement,
    props<{ formElement: FormElement }>()
);

export const moveFormElement = createAction(
    dropSectionActionsType.moveFormElement,
    props<{ currentIndex: number, nextIndex: number }>()
);

export const changeElementWidth = createAction(
    dropSectionActionsType.moveFormElement,
    props<{ currentIndex: number, nextIndex: number }>()
);