import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePage } from './create/create.page';
import { ListPage } from './list/list.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CitiesRoutingModule } from './cities-routing.module';


@NgModule({
  declarations: [CreatePage, ListPage],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule
  ]
})
export class CitiesModule { }
