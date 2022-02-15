import { createReducer, on } from '@ngrx/store';
import { IFieldStylingState } from 'src/app/models/interfaces/IFieldStylingState';
import * as StyleSectionActions from './style-section.actions';

export const styleSectionNode = "style";



const initialState: IFieldStylingState = {
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
