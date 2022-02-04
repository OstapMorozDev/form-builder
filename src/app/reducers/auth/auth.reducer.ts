import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import * as AuthActionsTypes from './auth.actions'



export const authNode = "auth";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}


const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
}

export const authReducer = createReducer(
  initialState,
  on(AuthActionsTypes.logInSuccess, (state, { token }) => {
    return {
      ...state,
      isAuthenticated: true,
      user: { ...state.user, token },
      errorMessage: null
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
      user: null,
      errorMessage: null
    }
  }),

  on(AuthActionsTypes.signUpSuccess, (state, { token }) => {
    return {
      ...state,
      isAuthenticated: true,
      user: {...state.user, token},
      errorMessage: null
    }
  }),
)
