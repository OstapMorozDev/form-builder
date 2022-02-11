import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';
import { FontWeightGrade } from 'src/app/constants/FontWeightGrade';

@Component({
  selector: 'app-checkbox-styling-form',
  templateUrl: './checkbox-styling-form.component.html',
  styleUrls: ['./checkbox-styling-form.component.scss', '../../field-styling.component.scss']
})
export class CheckboxStylingFormComponent {
  readonly fontWeightGrade = FontWeightGrade;

  constructor() { }

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
