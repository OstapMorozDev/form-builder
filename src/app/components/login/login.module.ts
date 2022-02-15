import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthErrorMessagePipe } from 'src/app/pipes/auth-error-message.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginComponent, AuthErrorMessagePipe],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
