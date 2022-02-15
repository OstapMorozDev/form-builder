import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropSectionComponent } from './drop-section.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TitleComponent } from './title/title.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormElementComponent } from './form-element/form-element.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
  ],
  declarations: [
    DropSectionComponent,
    TitleComponent,
    FormElementComponent
  ],
  exports: [
    DropSectionComponent
  ]
})

export class DropSectionModule { }
