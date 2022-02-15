import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { SignUpModule } from './components/sign-up/sign-up.module';
import { reducers } from './reducers';
import { AuthEffects } from './reducers/auth/auth.effects';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FieldChangesHandlingService } from './services/field-changes-handling.service';
import { TokenInterceptor } from './services/token-interceptor.service';


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
    LoginModule,
    SignUpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
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
