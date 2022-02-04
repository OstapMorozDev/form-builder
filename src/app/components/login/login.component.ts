import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logIn } from 'src/app/reducers/auth/auth.actions';
import { selectErrorMessage } from 'src/app/reducers/auth/auth.selectors';


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

  public errorMessage$: Observable<string | null> = this.store$.pipe(select(selectErrorMessage));


  constructor(private store$: Store, private http: HttpClient) { }

  onSubmit() {

    const { email, password } = this.loginForm.value
    this.store$.dispatch(logIn({ email, password }));
  }
}
