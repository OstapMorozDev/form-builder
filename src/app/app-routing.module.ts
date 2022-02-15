import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'log-in', loadChildren: () => import('./components/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up-routing.module').then(m => m.SignUpRoutingModule) },
  { path: '', loadChildren: () => import('./components/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
