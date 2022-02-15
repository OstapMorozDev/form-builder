import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { AuthData } from 'src/app/models/interfaces/AuthData';
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
        map(data => {
          return AuthActions.logInSuccess({ authData: data })
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
          localStorage.setItem('authData', JSON.stringify(data.authData));
          this.router.navigate(['/'])
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logOut),
    filter(() => {
      const authData = localStorage.getItem('authData');
      return authData ? true : false;
    }),
    tap(() => {
      localStorage.removeItem('authData');
      this.router.navigate(['/login'])
    })
  ), { dispatch: false })

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUp),
    switchMap(action => this.authService.signUp({ email: action.email, password: action.password })
      .pipe(
        map(data => AuthActions.signUpSuccess())
      ))
  ))

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signUpSuccess),
        tap(() => {
          this.router.navigate(['/log-in'])
        })
      ),
    { dispatch: false }
  );

  initialAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.initAuth),
    map(() => {
      const authDataString = localStorage.getItem('authData');
      if (!authDataString) {
        return AuthActions.logOut();
      }

      const authData: AuthData = JSON.parse(authDataString);

      if ((authData.exp * 1000 - 10 * 1000 - Date.now()) < 0) {
        return AuthActions.logOut();
      }

      return AuthActions.logInSuccess({ authData });
    })
  ))
}
