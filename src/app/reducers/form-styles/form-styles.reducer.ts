import { createReducer, on } from "@ngrx/store"
import * as FormStyleActions from "./form-stlyes.actions"


export const formStylesNode = "formStyles"


export interface FormStylingState {
  backgroundColor: string;
  width: string;
  height: string;
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
}


const initialState: FormStylingState = {
  backgroundColor: "#FFFFF",
  width: "100%",
  height: "100%",
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


