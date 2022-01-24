import { createAction, props } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';

export enum dropSectionActionsType {
    addFormElement = '[DROP-SECTION] addFormElement',
    moveFormElement = '[DROP-SECTION] moveFormElement',
    changeTitle = '[DROP-SECTION] changeTitle',
    changePlaceholderText = '[DROP-SECTION] changePlaceholderText',
    changeWith = '[DROP-SECTION] changeWidth',
    changeHeight = '[DROP-SECTION] changeHeight',
    changeFontSize = '[DROP-SECTION] changeFontSize',
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

export const changeWidth = createAction (
    dropSectionActionsType.changeWith,
    props<{elementID: number, width: string}>()
)

export const changeHeight = createAction (
    dropSectionActionsType.changeHeight,
    props<{elementID: number, height: string}>()
)

export const changeFontSize = createAction (
    dropSectionActionsType.changeFontSize,
    props<{elementID: number, fontSize: string}>()
)
