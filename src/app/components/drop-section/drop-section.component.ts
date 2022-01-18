import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Portal, TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DragSectionComponent, Element } from '../drag-section/drag-section.component';


@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss']
})
export class DropSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('portalContent') portalContent: TemplateRef<unknown>;
  // templatePortal: TemplatePortal<any>;

  portalOutlette: Portal<any>;
  componentPortal: ComponentPortal<DragSectionComponent>;


  elements: Element[] = [];

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.templatePortal = new TemplatePortal(this.portalContent, this.viewContainerRef);
    this.componentPortal = new ComponentPortal(DragSectionComponent);
  }


  drop(event: CdkDragDrop<any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
