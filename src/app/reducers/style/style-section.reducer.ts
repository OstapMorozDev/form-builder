import { createReducer, on } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import * as StyleSectionActions from './style-section.actions'



export const styleSectionNode = "style";

export interface StyleSectionState {
    selectedFormElement: FormElement | null
}


const initialState: StyleSectionState = {
    selectedFormElement: null
}

export const styleSectionReducer = createReducer(
    initialState,
    on(StyleSectionActions.setSelectedElement, (state, { selectedElement }) => {
        return {
            ...state,
            selectedFormElement: selectedElement

        }
    })
)