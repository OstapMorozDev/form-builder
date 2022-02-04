import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as AuthActions from './auth.actions'


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logIn),
    switchMap(action => this.authService.login({ email: action.email, password: action.password })
      .pipe(
        tap(data => console.log(data)),
        map(data => {
          return AuthActions.logInSuccess({ token: data.access_token })
        }),
        catchError((response) => {
          return of(AuthActions.logInFailure({ message: response.error.message }));
        })
      ))
  ))

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logInSuccess),
        tap((data) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/'])
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logInFailure),
  ), { dispatch: false })


  logOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logOut),
    tap(() => {
      localStorage.removeItem('token');
    })
  ), { dispatch: false })
}
