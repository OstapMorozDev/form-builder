import { createReducer, on } from '@ngrx/store';
import { IAuthState } from 'src/app/models/interfaces/IAuthState';
import * as AuthActionsTypes from './auth.actions'

export const authNode = "auth";

const initialState: IAuthState = {
  isAuthenticated: false,
  authData: null,
  errorMessage: ''
}

export const authReducer = createReducer(
  initialState,
  on(AuthActionsTypes.logInSuccess, (state, { authData }) => {
    return {
      ...state,
      isAuthenticated: true,
      authData: { ...authData },
      errorMessage: ''
    }
  }),

  on(AuthActionsTypes.logInFailure, (state, { message }) => {
    return {
      ...state,
      errorMessage: message
    }
  }),
  on(AuthActionsTypes.logOut, (state, { }) => {
    return {
      ...state,
      isAuthenticated: false,
      authData: null,
      errorMessage: ''
    }
  }),

  on(AuthActionsTypes.signUpSuccess, (state, { }) => {
    return {
      ...state,
    }
  }),
)
