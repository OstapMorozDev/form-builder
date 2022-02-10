import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { logIn } from 'src/app/reducers/auth/auth.actions';
import { AuthState } from 'src/app/reducers/auth/auth.reducer';
import { selectAuthErrorMsg } from 'src/app/reducers/auth/auth.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  public errorMessage$: Observable<string> = this.store$.select(selectAuthErrorMsg)

  constructor(private store$: Store<AuthState>) { }



  onSubmit() {
    const { email, password } = this.loginForm.value
    this.store$.dispatch(logIn({ email, password }));
  }


}
