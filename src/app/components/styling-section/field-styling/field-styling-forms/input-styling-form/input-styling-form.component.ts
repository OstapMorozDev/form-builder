import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { BorderStyles } from 'src/app/models/constants/BorderStyles';
import { FontWeightGrade } from 'src/app/models/constants/FontWeightGrade';

@Component({
  selector: 'app-input-styling-form',
  templateUrl: './input-styling-form.component.html',
  styleUrls: ['./input-styling-form.component.scss', '../../field-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputStylingFormComponent {
  readonly borderStyles = BorderStyles;
  readonly fontWeightGrade = FontWeightGrade;

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
