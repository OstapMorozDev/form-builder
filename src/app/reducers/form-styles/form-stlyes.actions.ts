import { createAction, props } from '@ngrx/store';

export enum FormStylesActionsType {
  changeBackgroundColor = '[FORM-STYLES] changeBackgroundColor',
  changeHeight = '[FORM-STYLES] changeHeight',
  changeWidth = '[FORM-STYLES] changeWidth',
  changeBorderColor = '[FORM-STYLES] changeBorderColor',
  changeBorderStyle = '[FORM-STYLES] changeBorderStyle',
  changeBorderWidth = '[FORM-STYLES] changeBorderWidth',
}


export const changeBackgroundColor = createAction(
  FormStylesActionsType.changeBackgroundColor,
  props<{ color: string }>()
)
export const changeHeight = createAction(
  FormStylesActionsType.changeHeight,
  props<{ height: string }>()
)
export const changeWidth = createAction(
  FormStylesActionsType.changeWidth,
  props<{ width: string }>()
)
export const changeBorderColor = createAction(
  FormStylesActionsType.changeBorderColor,
  props<{ borderColor: string }>()
)
export const changeBorderStyle = createAction(
  FormStylesActionsType.changeBorderStyle,
  props<{ borderStyle: string }>()
)
export const changeBorderWidth = createAction(
  FormStylesActionsType.changeBorderWidth,
  props<{ borderWidth: string }>()
)
