import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startWith, pairwise, map } from 'rxjs';
import { FormElement } from 'src/app/classes/form-element.class';
import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';

@Component({
  selector: 'app-input-styling-form',
  templateUrl: './input-styling-form.component.html',
  styleUrls: ['./input-styling-form.component.scss']
})
export class InputStylingFormComponent {

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
