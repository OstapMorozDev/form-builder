import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logOut } from 'src/app/reducers/auth/auth.actions';
import { selectIsAuthenticated } from 'src/app/reducers/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isLogged: boolean = true;

  public isAuth$: Observable<boolean> = this.store$.pipe(select(selectIsAuthenticated));


  constructor(private store$: Store) { }



  logOut() {
    console.log(this.isAuth$)
    this.store$.dispatch(logOut())
  }
}
