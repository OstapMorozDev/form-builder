import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { logIn } from 'src/app/reducers/auth/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  formSubscription: any;

  constructor(private store$: Store) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.store$.dispatch(logIn(this.loginForm.value));
  }
}
