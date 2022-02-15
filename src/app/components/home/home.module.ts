import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragSectionModule } from '../drag-section/drag-section.module';
import { DropSectionModule } from '../drop-section/drop-section.module';
import { HomeComponent } from './home.component';
import { StylingSectionModule } from '../styling-section/styling-section.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DragSectionModule,
    DropSectionModule,
    StylingSectionModule,
    DragDropModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
