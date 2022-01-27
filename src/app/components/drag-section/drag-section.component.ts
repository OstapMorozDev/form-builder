import { Component } from '@angular/core';
import { FormElement } from 'src/app/classes/form-element.class';



@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss']
})

export class DragSectionComponent {

  elements: FormElement[] = [
    {
      id: 0,
      type: "input",
    },
    {
      id: 1,
      type: "textarea"
    },
    {
      id: 2,
      type: "button"
    },
    {
      id: 3,
      type: "checkbox"
    },
    {
      id: 4,
      type: "select"
    }
  ]


}
