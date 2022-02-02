import { pipe } from '../../../../node_modules/rxjs/src/internal/util/pipe';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, Observable, switchMap, map, catchError, EMPTY, tap } from 'rxjs';


import * as AuthActions from './auth.actions'

import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService$: AuthService,

    ) { }

    logIn$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.logIn),
        switchMap((payload) => {
            return this.authService$.logIn(payload.email, payload.password).pipe(
                map((user) => {
                    console.log(user);
                    return AuthActions.logInSucces({ email: user.email, token: user.token });
                }),
                catchError(() => EMPTY)
            )
        })
    ))

    logInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.logInSucces),
        tap(user => {
            localStorage.setItem('token', user.token);
            
        })
    ))
}