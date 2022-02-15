import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { FontWeightGrade } from 'src/app/models/constants/FontWeightGrade';

@Component({
  selector: 'app-checkbox-styling-form',
  templateUrl: './checkbox-styling-form.component.html',
  styleUrls: ['./checkbox-styling-form.component.scss', '../../field-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxStylingFormComponent {
  readonly fontWeightGrade = FontWeightGrade;

  constructor() { }

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
