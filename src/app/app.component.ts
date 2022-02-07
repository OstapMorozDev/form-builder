import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initAuth } from './reducers/auth/auth.actions';
import { AuthState } from './reducers/auth/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form-builder';

  constructor(private store$: Store<AuthState>) { }

  ngOnInit(): void {
    this.store$.dispatch(initAuth())
  }
}
