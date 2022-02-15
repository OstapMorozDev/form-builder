import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTitle } from 'src/app/reducers/drop/drop.section.actions';
import { DropSectionState } from 'src/app/reducers/drop/drop.section.reducer';
import { selectFormTitle } from 'src/app/reducers/drop/drop.section.selectors';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent  {

  public formTitle$: Observable<string> = this.store$.pipe(select(selectFormTitle));
  public titleEditMode: boolean = false;

  constructor(private store$: Store<DropSectionState>) { }



  onTitleChange(value: string) {
    this.store$.dispatch(changeTitle({ value }))
  }

  onInputDoubleClick($event: any) {
    this.titleEditMode = true;
  }

  onTitleInputBlur($event: any) {
    this.onTitleChange($event.target.value)
    this.titleEditMode = false;
  }
}
