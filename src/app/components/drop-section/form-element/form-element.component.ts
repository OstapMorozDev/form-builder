import { Component, Input } from '@angular/core';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent   {

  inputValue: string = '';

  @Input() element: FormElement


}
