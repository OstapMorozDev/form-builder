import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthData } from 'src/app/models/interfaces/IAuthData';
import { logOut } from 'src/app/reducers/auth/auth.actions';
import { selectAuthData, selectIsAuthenticated } from 'src/app/reducers/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isLogged: boolean = true;

  public isAuth$: Observable<boolean> = this.store$.pipe(select(selectIsAuthenticated));
  public authData$: Observable<IAuthData | null> = this.store$.pipe(select(selectAuthData));

  constructor(private store$: Store) { }

  logOut() {
    this.store$.dispatch(logOut())
  }
}
