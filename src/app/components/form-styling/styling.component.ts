import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FormElement } from 'src/app/classes/form-element.class';
import { StyleSectionState } from 'src/app/reducers/fields-styles/style-section.reducer';
import { selectedElement } from '../../reducers/fields-styles/style-section.selectors'
import { FormGeneralStylingComponent } from '../drop-section/form-general-styling/form-general-styling.component';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})


export class StylingComponent implements OnInit {


  public selectedFormElement$: Observable<FormElement | null> = this.store$.pipe(select(selectedElement));
  public componentPortal: ComponentPortal<FormGeneralStylingComponent>

  constructor(private store$: Store<StyleSectionState>) { }

  ngOnInit(): void {
    this.componentPortal = new ComponentPortal(FormGeneralStylingComponent);
  }



}
