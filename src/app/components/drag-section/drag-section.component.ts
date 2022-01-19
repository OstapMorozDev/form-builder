import { Component, OnInit } from '@angular/core';
import { FormElement } from 'src/app/interfaces/FormElement';



@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss']
})
export class DragSectionComponent implements OnInit {

  elements: FormElement[]  = [
    {
      id: 1,
      type: "input",
    },
    {
      id: 2,
      type: "textarea"
    },
    {
      id: 3,
      type: "button"
    },
    {
      id: 4,
      type: "checkbox"
    },
    {
      id: 5,
      type: "select"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
