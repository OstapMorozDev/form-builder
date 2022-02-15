import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylingComponent } from './styling.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FieldStylingComponent } from './field-styling/field-styling.component';
import { FormGeneralStylingComponent } from '../drop-section/form-general-styling/form-general-styling.component';
import { BorderControlComponent } from './field-styling/field-styling-forms/border-custom-control/border-custom-control';
import { ButtonStyleFormComponent } from './field-styling/field-styling-forms/button-styling-form/button-styling-form.component';
import { CheckboxStylingFormComponent } from './field-styling/field-styling-forms/checkbox-styling-form/checkbox-styling-form.component';
import { InputStylingFormComponent } from './field-styling/field-styling-forms/input-styling-form/input-styling-form.component';
import { SelectStylingFormComponent } from './field-styling/field-styling-forms/select-styling-form/select-styling-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    StylingComponent,
    FieldStylingComponent,
    InputStylingFormComponent,
    ButtonStyleFormComponent,
    SelectStylingFormComponent,
    BorderControlComponent,
    CheckboxStylingFormComponent,
    FormGeneralStylingComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    PortalModule
  ],
  exports: [
    StylingComponent
  ]
})
export class StylingSectionModule { }
