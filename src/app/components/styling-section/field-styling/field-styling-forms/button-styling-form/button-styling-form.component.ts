import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { FontWeightGrade } from 'src/app/models/constants/FontWeightGrade';

@Component({
  selector: 'app-button-styling-form',
  templateUrl: './button-styling-form.component.html',
  styleUrls: ['./button-styling-form.component.scss', '../../field-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonStyleFormComponent  {

  readonly fontWeightGrade = FontWeightGrade;

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;

}
