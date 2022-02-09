import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startWith, pairwise, map } from 'rxjs';
import { FormElement } from 'src/app/classes/form-element.class';
import { StyleSectionState } from 'src/app/reducers/fields-styles/style-section.reducer';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';

@Component({
  selector: 'app-button-styling-form',
  templateUrl: './button-styling-form.component.html',
  styleUrls: ['./button-styling-form.component.scss']
})
export class ButtonStyleFormComponent  {

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;

}
