import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '', pathMatch: 'full',loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'builder', loadChildren: () => import('./components/builder/builder.module').then(m => m.BuilderModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
