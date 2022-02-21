import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { BuilderComponent } from './builder.component';

const routes: Routes = [{ path: '', component: BuilderComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
