import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from './models/interfaces/IAuthState';
import { initAuth } from './reducers/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form-builder';

  constructor(private store$: Store<IAuthState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(initAuth())
  }
}
