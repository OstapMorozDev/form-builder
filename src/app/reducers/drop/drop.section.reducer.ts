import { FormElement } from 'src/app/models/classes/FormElement.class';
import { createReducer, on } from '@ngrx/store';
import * as DropSectionActions from './drop.section.actions'
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { IDropSectionState } from 'src/app/models/interfaces/IDropSectionState';


export const dropSectionNode = 'drop';


const initialState: IDropSectionState = {
  formElements: [],
  formTitle: 'My Form',

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

  on(DropSectionActions.toggleIsRequired, (state, { elementID, required }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, required: required }
      } return el;
    })

    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeBorderStyle, (state, { elementID, borderStyle }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, borderStyle: borderStyle }
      } return el;
    })

    return {
      ...state,
      formElements: arrayCopy
    }
  }),


  on(DropSectionActions.changeBorderWidth, (state, { elementID, width }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, borderWidth: width }
      } return el;
    })

    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeBorderColor, (state, { elementID, color }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, borderColor: color }
      } return el;
    })

    return {
      ...state,
      formElements: arrayCopy
    }
  }),
  on(DropSectionActions.changeTextColor, (state, { elementID, color }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, color: color }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeFontWeight, (state, { elementID, weight }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, fontWeight: weight }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeBackgroundColor, (state, { elementID, color }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, backgroundColor: color }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeBorderControl, (state, { elementID, borderControl }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, borderControl: { ...borderControl } }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeLabelText, (state, { elementID, labelText }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, labelText: labelText }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

  on(DropSectionActions.changeCheckboxStyle, (state, { elementID, style }) => {

    const arrayCopy = state.formElements.map((el, index) => {
      if (el.id === elementID) {
        return { ...el, checkboxStyle: style }
      } return el;
    })
    return {
      ...state,
      formElements: arrayCopy
    }
  }),

);
