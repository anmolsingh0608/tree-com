import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePage } from './create/create.page';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list/list.page';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreatePage, ListPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    OrdersRoutingModule,
    NgbPaginationModule,
  ]
})
export class OrdersModule { }
