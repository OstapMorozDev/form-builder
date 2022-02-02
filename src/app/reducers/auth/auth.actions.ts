import { createAction, props } from '@ngrx/store';
import { FormElement } from 'src/app/classes/form-element.class';
import { User } from 'src/app/interfaces/user';

export enum authActionTypes {
    logIn = '[AUTH] login',
    logInSucces = '[Auth] Login Success',
}


export const logIn = createAction(
    authActionTypes.logIn,
    props<{ email: string, password: string }>()
);


export const logInSucces = createAction(
    authActionTypes.logInSucces,
    props<{ email: string, token: string }>()
);

