import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../common/button-styles.scss', '../../common/colors.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {

  constructor() { }
}
