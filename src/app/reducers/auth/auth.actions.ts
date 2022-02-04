import { createAction, props } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import { User } from 'src/app/interfaces/user';

export enum authActionTypes {
  logIn = '[AUTH] login',
  logInSucces = '[Auth] Login Success',
  logInFailure = '[Auth] Login Failure',
  logOut =  '[Auth] Logout',
}


export const logIn = createAction(
  authActionTypes.logIn,
  props<{ email: string, password: string }>()
);


export const logInSuccess = createAction(
  authActionTypes.logInSucces,
  props<{ token: string }>()
);

export const logInFailure = createAction(
  authActionTypes.logInFailure,
  props<{ message: string }>()
);


export const logOut = createAction(
  authActionTypes.logOut
);

