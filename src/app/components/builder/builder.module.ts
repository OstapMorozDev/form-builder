import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder.component';
import { DragSectionModule } from './drag-section/drag-section.module';
import { DropSectionModule } from './drop-section/drop-section.module';
import { StylingSectionModule } from './styling-section/styling-section.module';

@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    DragDropModule,
    DragSectionModule,
    DropSectionModule,
    StylingSectionModule
  ],
  exports: [BuilderComponent]
})
export class BuilderModule { }
