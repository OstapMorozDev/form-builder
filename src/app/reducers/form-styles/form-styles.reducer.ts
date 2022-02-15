import { createReducer, on } from "@ngrx/store"
import { IFormStylingState } from "src/app/models/interfaces/IFormStylingState"
import * as FormStyleActions from "./form-stlyes.actions"

export const formStylesNode = "formStyles"

const initialState: IFormStylingState = {
  backgroundColor: "#FFFFF",
  width: "100%",
  height: "200px",
  borderStyle: "dashed",
  borderColor: "#2b7a78",
  borderWidth: "2px"
}

export const formStylesReducer = createReducer(
  initialState,
  on(FormStyleActions.changeBackgroundColor, (state, { color }) => {
    return {
      ...state,
      backgroundColor: color
    }
  }),
  on(FormStyleActions.changeBorderColor, (state, { borderColor }) => {
    return {
      ...state,
      borderColor: borderColor
    }
  }),
  on(FormStyleActions.changeBorderStyle, (state, { borderStyle }) => {
    return {
      ...state,
      borderStyle: borderStyle
    }
  }),
  on(FormStyleActions.changeBorderWidth, (state, { borderWidth }) => {
    return {
      ...state,
      borderWidth: borderWidth
    }
  }),
  on(FormStyleActions.changeHeight, (state, { height }) => {
    return {
      ...state,
      height: height
    }
  }),
  on(FormStyleActions.changeWidth, (state, { width }) => {
    return {
      ...state,
      width: width
    }
  }),
)


