import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { StylingComponent } from './components/form-styling/styling.component';
import { DropSectionComponent } from './components/drop-section/drop-section.component';
import { DragSectionComponent } from './components/drag-section/drag-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/drop-section/title/title.component';
import { FormElementComponent } from './components/drop-section/form-element/form-element.component';
import { StyleSectionComponent } from './components/form-styling/style-section/styling-section.component';
import { FieldChangesHandlingService } from './services/field-changes-handling.service';
import { InputStylingFormComponent } from './components/form-styling/style-section/style-forms/input-styling-form/input-styling-form.component';
import { ButtonStyleFormComponent } from './components/form-styling/style-section/style-forms/button-styling-form/button-styling-form.component';
import { SelectStylingFormComponent } from './components/form-styling/style-section/style-forms/select-styling-form/select-styling-form.component';
import { BorderControlComponent } from './components/form-styling/style-section/style-forms/border-custom-control/border-custom-control';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './reducers/auth/auth.effects';
import { TokenInterceptor } from './services/token-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckboxStylingFormComponent } from './components/form-styling/style-section/style-forms/checkbox-styling-form/checkbox-styling-form.component';
import { FormGeneralStylingComponent } from './components/drop-section/form-general-styling/form-general-styling.component';
import { ErrorMessagePipe } from "src/app/components/login/error-message.pipe"

const appRoutes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    StylingComponent,
    DropSectionComponent,
    DragSectionComponent,
    TitleComponent,
    FormElementComponent,
    StyleSectionComponent,
    InputStylingFormComponent,
    ButtonStyleFormComponent,
    SelectStylingFormComponent,
    BorderControlComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    CheckboxStylingFormComponent,
    FormGeneralStylingComponent,
    ErrorMessagePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PortalModule, DragDropModule, BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCheckboxModule, FormsModule, ReactiveFormsModule,
    MatIconModule, CdkAccordionModule, MatDividerModule,
    StoreModule.forRoot({}, {}),

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([AuthEffects]),
    JwtModule.forRoot({
      config: {
        // ...
        tokenGetter: (req) => {
          return localStorage.getItem("token");
        },
      },
    })

  ],
  providers: [FieldChangesHandlingService, AuthService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
