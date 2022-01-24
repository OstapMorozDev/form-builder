import { FormElement } from 'src/app/classes/form-element.class';
import { createReducer, on } from '@ngrx/store';
import * as DropSectionActions from './drop.section.actions'
import { moveItemInArray } from "@angular/cdk/drag-drop";


export const dropSectionNode = 'drop';

export interface DropSectionState {
    formElements: FormElement[],
    formTitle: string
}

const initialState: DropSectionState = {
    formElements: [],
    formTitle: 'My Form'
}

export const dropSectionReducer = createReducer(
    initialState,

    on(DropSectionActions.addFormElement, (state, { formElement, newIndex }) => {
        const arrayCopy = [...state.formElements];
        arrayCopy.splice(newIndex, 0, formElement)

        return {
            ...state,
            formElements: arrayCopy
        }
    }),
    on(DropSectionActions.moveFormElement, (state, { currentIndex, nextIndex }) => {
        const arrayCopy: FormElement[] = [...state.formElements];

        moveItemInArray(arrayCopy, currentIndex, nextIndex);

        return {
            ...state,
            formElements: arrayCopy
        }
    }),
    on(DropSectionActions.changeTitle, (state, { value }) => {
        return {
            ...state,
            formTitle: value
        }
    }),
    on(DropSectionActions.changePlaceholderText, (state, { elementID, newText }) => {

        const arrayCopy = state.formElements.map((el, index) => {
            if (el.id === elementID) {
                return { ...el, placeholderText: newText }
            } return el;
        })

        return {
            ...state,
            formElements: arrayCopy
        }
    }),

    on(DropSectionActions.changeWidth, (state, { elementID, width }) => {

        const arrayCopy = state.formElements.map((el, index) => {
            if (el.id === elementID) {
                return { ...el, width: width }
            } return el;
        })

        return {
            ...state,
            formElements: arrayCopy
        }
    }),

    on(DropSectionActions.changeHeight, (state, { elementID, height }) => {

        const arrayCopy = state.formElements.map((el, index) => {
            if (el.id === elementID) {
                return { ...el, height: height }
            } return el;
        })

        return {
            ...state,
            formElements: arrayCopy
        }
    }),

    on(DropSectionActions.changeFontSize, (state, { elementID, fontSize }) => {

        const arrayCopy = state.formElements.map((el, index) => {
            if (el.id === elementID) {
                return { ...el, fontSize: fontSize }
            } return el;
        })

        return {
            ...state,
            formElements: arrayCopy
        }
    }),

);