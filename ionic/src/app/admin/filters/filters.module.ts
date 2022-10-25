import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FiltersRoutingModule } from './filters-routing.module';
import { ListPage } from './list/list.page';
import { CreatePage } from './create/create.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListPage, CreatePage],
  imports: [
    CommonModule,
    FiltersRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class FiltersModule { }
