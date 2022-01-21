import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/interfaces/FormElement';
import { changePlaceholderText } from 'src/app/reducers/drop/drop.section.actions';
import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { selectedElement } from '../../reducers/style/style-section.selectors'

@Component({
  selector: 'app-form-styling',
  templateUrl: './form-styling.component.html',
  styleUrls: ['./form-styling.component.scss']
})
export class FormStylingComponent implements OnInit {

  public selectedFormElement$: Observable<FormElement | null> = this.store$.pipe(select(selectedElement));

  constructor(private store$: Store<StyleSectionState>) { }

  changePlaceholderText(elementID: number, newText: string) {
    this.store$.dispatch(changePlaceholderText({ elementID, newText }))
  }


  handlePlaceholderInputBlur($event: any, elementID: number) {
    this.changePlaceholderText(elementID, $event.target.value)
  }

  ngOnInit(): void {
  }

}
