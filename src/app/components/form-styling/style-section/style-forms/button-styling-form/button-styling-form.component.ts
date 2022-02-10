import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-button-styling-form',
  templateUrl: './button-styling-form.component.html',
  styleUrls: ['./button-styling-form.component.scss']
})
export class ButtonStyleFormComponent  {

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;

}
