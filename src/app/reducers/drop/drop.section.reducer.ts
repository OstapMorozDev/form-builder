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
    // formElements: [{
    //     id: 1,
    //     type: "input",
    // },
    // {
    //     id: 2,
    //     type: "textarea"
    // },
    // {
    //     id: 3,
    //     type: "button"
    // },
    // {
    //     id: 4,
    //     type: "checkbox"
    // },
    // {
    //     id: 5,
    //     type: "select"
    // }]
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

        // const temp: FormElement = arrayCopy[currentIndex];
        // arrayCopy[currentIndex] = arrayCopy[nextIndex];
        // arrayCopy[nextIndex] = temp;

        moveItemInArray(arrayCopy, currentIndex, nextIndex);


        return {
            ...state,
            formElements: arrayCopy
        }
    }),
);