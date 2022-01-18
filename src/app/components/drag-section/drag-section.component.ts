import { Component, OnInit } from '@angular/core';


export interface Element {
  id: number;
  type: string;
}

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss']
})
export class DragSectionComponent implements OnInit {

  elements: Element[]  = [
    {
      id: 1,
      type: "input"
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
