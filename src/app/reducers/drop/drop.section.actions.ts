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
    toggleIsRequired = '[DROP-SECTION] toggleIsRequired',
    changeBorderStyle = '[DROP-SECTION] changeBorderStyle',
    changeBorderWidth = '[DROP-SECTION] changeBorderWidth',
    changeBorderColor = '[DROP-SECTION] changeBorderColor',
    changeTextColor = '[DROP-SECTION] changeTextColor',
    changeInputValue = '[DROP-SECTION] changeInputValue',
    changeFontWeight = '[DROP-SECTION] changeFontWeight'
}



export const addFormElement = createAction(
    dropSectionActionsType.addFormElement,
    props<{ formElement: FormElement, newIndex: number }>()
);

export const moveFormElement = createAction(
    dropSectionActionsType.moveFormElement,
    props<{ currentIndex: number, nextIndex: number }>()
);


export const changeTitle = createAction(
    dropSectionActionsType.changeTitle,
    props<{ value: string }>()
);


export const changePlaceholderText = createAction(
    dropSectionActionsType.changePlaceholderText,
    props<{ elementID: number, newText: string }>()
)

export const changeWidth = createAction(
    dropSectionActionsType.changeWith,
    props<{ elementID: number, width: string }>()
)

export const changeHeight = createAction(
    dropSectionActionsType.changeHeight,
    props<{ elementID: number, height: string }>()
)

export const changeFontSize = createAction(
    dropSectionActionsType.changeFontSize,
    props<{ elementID: number, fontSize: string }>()
)

export const toggleIsRequired = createAction(
    dropSectionActionsType.toggleIsRequired,
    props<{ elementID: number, isRequired: boolean }>()
)


export const changeBorderStyle = createAction(
    dropSectionActionsType.changeBorderStyle,
    props<{ elementID: number, borderStyle: string }>()
)

export const changeBorderWidth = createAction(
    dropSectionActionsType.changeBorderWidth,
    props<{ elementID: number, width: string }>()
)


export const changeBorderColor = createAction(
    dropSectionActionsType.changeBorderColor,
    props<{ elementID: number, color: string }>()
)


export const changeTextColor = createAction(
    dropSectionActionsType.changeTextColor,
    props<{ elementID: number, textColor: string }>()
)

export const changeFontWeight = createAction(
    dropSectionActionsType.changeTextColor,
    props<{ elementID: number, weight: string }>()
)
