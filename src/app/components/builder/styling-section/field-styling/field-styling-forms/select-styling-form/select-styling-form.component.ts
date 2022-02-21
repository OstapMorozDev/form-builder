import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { BorderStyles } from 'src/app/models/constants/BorderStyles';
import { FontWeightGrade } from 'src/app/models/constants/FontWeightGrade';

@Component({
  selector: 'app-select-styling-form',
  templateUrl: './select-styling-form.component.html',
  styleUrls: ['./select-styling-form.component.scss', '../../field-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectStylingFormComponent {
  readonly borderStyles = BorderStyles;
  readonly fontWeightGrade = FontWeightGrade;

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}

