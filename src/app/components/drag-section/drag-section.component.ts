import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DragableElements } from 'src/app/constants/DragableElements';



@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss']
})

export class DragSectionComponent implements AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;

  elements = DragableElements;
  templatePortal: TemplatePortal<any>;


  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {

    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);

  }
}
