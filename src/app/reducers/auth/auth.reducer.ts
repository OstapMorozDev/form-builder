import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import * as AuthActionsTypes from './auth.actions'



export const authNode = "auth";

export interface AuthState {
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    // error message
    errorMessage: string | null;
}


const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null

}

export const authReducer = createReducer(
    initialState,
    on(AuthActionsTypes.logInSucces, (state, { email, token }) => {
        return {
            ...state,
            isAuthenticated: true,
            user: { ...state.user, token, email },
            errorMessage: null
        }
    })
)