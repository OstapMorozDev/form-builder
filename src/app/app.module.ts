import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { FormStylingComponent } from './components/form-styling/form-styling.component';
import { DropSectionComponent } from './components/drop-section/drop-section.component';
import { DragSectionComponent } from './components/drag-section/drag-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/drop-section/title/title.component';
import { FormElementComponent } from './components/drop-section/form-element/form-element.component';
import { StyleSectionComponent } from './components/form-styling/style-section/styling-section.component';
import { FormChangesHandlingService } from './services/form-changes-handling.service';
import { InputStylingFormComponent } from './components/form-styling/style-section/style-forms/input-styling-form/input-styling-form.component';
import { ButtonStyleFormComponent } from './components/form-styling/style-section/style-forms/button-styling-form/button-styling-form.component';
import { SelectStylingFormComponent } from './components/form-styling/style-section/style-forms/select-styling-form/select-styling-form.component';
import { BorderInputComponent } from './components/form-styling/style-section/style-forms/border-input/border-input.component';


@NgModule({
  declarations: [
    AppComponent,
    FormStylingComponent,
    DropSectionComponent,
    DragSectionComponent,
    TitleComponent,
    FormElementComponent,
    StyleSectionComponent,
    InputStylingFormComponent,
    ButtonStyleFormComponent,
    SelectStylingFormComponent,
    BorderInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states

    }),
    PortalModule, DragDropModule, BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCheckboxModule, FormsModule, ReactiveFormsModule,
    MatIconModule
  ],
  providers: [FormChangesHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
