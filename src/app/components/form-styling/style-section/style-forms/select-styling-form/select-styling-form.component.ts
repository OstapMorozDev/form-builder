import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-select-styling-form',
  templateUrl: './select-styling-form.component.html',
  styleUrls: ['./select-styling-form.component.scss']
})
export class SelectStylingFormComponent {

  @Input() element: FormElement;
  @Input() customFormGroup: FormGroup;
}
