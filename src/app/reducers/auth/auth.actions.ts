import { createAction, props } from '@ngrx/store';
import {  IAuthData } from 'src/app/models/interfaces/IAuthData';


export enum authActionTypes {
  logIn = '[AUTH] Login',
  logInSucces = '[Auth] Login Success',
  logInFailure = '[Auth] Login Failure',
  logOut = '[Auth] Logout',
  signUp = '[Auth] Signup',
  signtUpSuccess = '[Auth] Signup Success',
  initAuth = '[Auth] Initial Auth'
}


export const logIn = createAction(
  authActionTypes.logIn,
  props<{ email: string, password: string }>()
);


export const logInSuccess = createAction(
  authActionTypes.logInSucces,
  props<{ authData: IAuthData }>()
);

export const logInFailure = createAction(
  authActionTypes.logInFailure,
  props<{ message: string }>()
);


export const logOut = createAction(
  authActionTypes.logOut
);

export const signUp = createAction(
  authActionTypes.signUp,
  props<{ email: string, password: string }>()
);

export const signUpSuccess = createAction(
  authActionTypes.signtUpSuccess,
);

export const initAuth = createAction(
  authActionTypes.initAuth,
);

