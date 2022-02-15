import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldChangesHandlingService } from './services/field-changes-handling.service';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './reducers/auth/auth.effects';
import { TokenInterceptor } from './services/token-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { SignUpModule } from './components/sign-up/sign-up.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    LoginModule,
    SignUpModule,
    EffectsModule.forRoot([AuthEffects]),
    JwtModule.forRoot({
      config: {
        // ...
        tokenGetter: (req) => {
          return localStorage.getItem("authData");
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
