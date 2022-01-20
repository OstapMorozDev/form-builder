import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormStylingComponent } from './components/form-styling/form-styling.component';
import { DropSectionComponent } from './components/drop-section/drop-section.component';
import { DragSectionComponent } from './components/drag-section/drag-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FormStylingComponent,
    DropSectionComponent,
    DragSectionComponent
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
    MatSelectModule, MatCheckboxModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
