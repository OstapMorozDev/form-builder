import { createReducer, on } from '@ngrx/store';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import * as StyleSectionActions from './style-section.actions'

export const styleSectionNode = "style";

export interface FieldStylingState {
    selectedFormElement: FormElement | null
}

const initialState: FieldStylingState = {
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
