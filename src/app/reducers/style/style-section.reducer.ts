import { createReducer, on } from '@ngrx/store';
import { FormElement } from 'src/app/interfaces/FormElement';
import * as StyleSectionActions from './style-section.actions'



export const styleSectionNode = "style";

export interface StyleSectionState {
    selectedFormElementId: number | null,
}


const initialState: StyleSectionState = {
    selectedFormElementId: 22
}

export const styleSectionReducer = createReducer(
    initialState,
    on(StyleSectionActions.setSelectedElement, (state, { selectedFormElementId }) => {
        return {
            ...state,
            selectedFormElementId: selectedFormElementId

        }
    })
)