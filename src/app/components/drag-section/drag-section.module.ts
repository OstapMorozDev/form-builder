import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragSectionComponent } from './drag-section.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    PortalModule
  ],
  declarations: [
    DragSectionComponent
  ],
  exports: [
    DragSectionComponent
  ]
})
export class DragSectionModule { }
