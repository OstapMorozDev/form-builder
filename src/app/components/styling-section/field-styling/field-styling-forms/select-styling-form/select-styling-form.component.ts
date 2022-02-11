import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';
import { BorderStyles } from 'src/app/constants/BorderStyles';
import { FontWeightGrade } from 'src/app/constants/FontWeightGrade';

@Component({
  selector: 'app-select-styling-form',
  templateUrl: './select-styling-form.component.html',
  styleUrls: ['./select-styling-form.component.scss', '../../field-styling.component.scss']
})
export class SelectStylingFormComponent {
  readonly borderStyles = BorderStyles;
  readonly fontWeightGrade = FontWeightGrade;

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}

