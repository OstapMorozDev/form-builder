import {TemplatePortal} from '@angular/cdk/portal';
import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DragableElements} from 'src/app/models/constants/DragableElements';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DragSectionComponent implements OnInit {

  @ViewChild('templatePortalContent', { static: true }) templatePortalContent: TemplateRef<unknown>;

  elements = DragableElements;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }
}
