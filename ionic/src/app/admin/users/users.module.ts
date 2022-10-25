import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list/list.page';
import { UserRoutingModule } from './user-routing.module';
import { CreatePage } from './create/create.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListPage, CreatePage],
  imports: [
    CommonModule,
    IonicModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
