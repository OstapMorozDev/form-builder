import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';
import { FontWeightGrade } from 'src/app/constants/FontWeightGrade';

@Component({
  selector: 'app-button-styling-form',
  templateUrl: './button-styling-form.component.html',
  styleUrls: ['./button-styling-form.component.scss', '../../field-styling.component.scss']
})
export class ButtonStyleFormComponent  {

  readonly fontWeightGrade = FontWeightGrade;

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;

}
