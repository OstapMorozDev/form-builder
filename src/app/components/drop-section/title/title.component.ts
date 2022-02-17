import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDropSectionState } from 'src/app/models/interfaces/IDropSectionState';
import { changeTitle } from 'src/app/reducers/drop/drop.section.actions';
import { selectFormTitle } from 'src/app/reducers/drop/drop.section.selectors';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent  {
  @Input() formTitle = '';

  public titleEditMode: boolean = false;

  constructor(private store$: Store<IDropSectionState>) { }

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
