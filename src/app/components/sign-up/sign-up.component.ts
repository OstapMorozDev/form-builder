import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/reducers/auth/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private store$: Store) { }


  onSubmit() {
    this.store$.dispatch(signUp(this.signUpForm.value))
  }

}
