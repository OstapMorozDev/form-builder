import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormElement } from 'src/app/models/classes/FormElement.class';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
