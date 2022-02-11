import { Component, Input } from '@angular/core';
import { FormElement } from 'src/app/classes/form-element.class';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent {

  public inputValue: string;

  @Input() element: FormElement

  constructor() {
  }

  hideBorders() {
    return {
      hideBottomBorder: !this.element.borderControl?.borderBottom,
      hideTopBorder: !this.element.borderControl?.borderTop,
      hideLeftBorder: !this.element.borderControl?.borderLeft,
      hideRightBorder: !this.element.borderControl?.borderRight
    }
  }

  getElementStyles() {
    return this.element;
  }

}
