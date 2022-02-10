import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-input-styling-form',
  templateUrl: './input-styling-form.component.html',
  styleUrls: ['./input-styling-form.component.scss', '../../field-styling.component.scss']
})
export class InputStylingFormComponent {

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
