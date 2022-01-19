import { FormElement } from "src/app/interfaces/FormElement";
import { createReducer, on } from '@ngrx/store';
import * as DropSectionActions from './drop.section.actions'
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { state } from "@angular/animations";



export const dropSectionNode = 'drop';

export interface DropSectionState {
    formElements: FormElement[];
}

const initialState: DropSectionState = {
    formElements: []
}

export const dropSectionReducer = createReducer(
    initialState,
    on(DropSectionActions.addFormElement, (state, { formElement }) => ({
        ...state,
        formElements: [...state.formElements, formElement]
    })),
    on(DropSectionActions.moveFormElement, (state, { currentIndex, nextIndex }) => {
        const arrayCopy: FormElement[] = [...state.formElements];

        moveItemInArray(arrayCopy, currentIndex, nextIndex);

        return {
            ...state,
            formElements: arrayCopy
        }
    }),
);