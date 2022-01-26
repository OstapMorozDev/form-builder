import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {

  @Input() element: FormElement

  inputTempValue: string;

  constructor() { }

  ngOnInit(): void {

  }


}
