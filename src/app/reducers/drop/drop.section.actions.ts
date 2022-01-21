import { createAction, props } from '@ngrx/store';
import { FormElement } from '../../interfaces/FormElement'

export enum dropSectionActionsType {
    addFormElement = '[DROP-SECTION] addFormElement',
    moveFormElement = '[DROP-SECTION] moveFormElement',
    changeTitle = '[DROP-SECTION] changeTitle',
    changePlaceholderText = '[DROP-SECTION] changePlaceholderText'
}



export const addFormElement = createAction(
    dropSectionActionsType.addFormElement,
    props<{ formElement: FormElement,  newIndex: number}>()
);

export const moveFormElement = createAction(
    dropSectionActionsType.moveFormElement,
    props<{ currentIndex: number, nextIndex: number }>()
);


export const changeTitle = createAction(
    dropSectionActionsType.changeTitle,
    props<{ value: string }>()
);


export const changePlaceholderText = createAction (
    dropSectionActionsType.changePlaceholderText,
    props<{elementID: number, newText: string}>()
)