import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPage } from './auth/auth.page';

@NgModule({
  declarations: [
    AuthPage
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
