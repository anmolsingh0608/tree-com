import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './auth/auth.page';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./nav/nav.module').then(m => m.NavPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthPage,
    canActivate: [AutoLoginGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
