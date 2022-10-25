import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeRoutingModule } from './tree-routing.module';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list/list.page';
import { CreatePage } from './create/create.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [ListPage, CreatePage],
  imports: [
    CommonModule,
    TreeRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    NgSelectModule
  ]
})
export class TreesModule { }
