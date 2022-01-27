import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FormElement } from 'src/app/classes/form-element.class';
import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { selectedElement } from '../../reducers/style/style-section.selectors'

@Component({
  selector: 'app-form-styling',
  templateUrl: './form-styling.component.html',
  styleUrls: ['./form-styling.component.scss']
})
export class FormStylingComponent  {

  public selectedFormElement$: Observable<FormElement | null> = this.store$.pipe(select(selectedElement));


  constructor(private store$: Store<StyleSectionState>) { }



}
