import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePage } from './create/create.page';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: 'create/:id',
    component: CreatePage
  },
  {
    path: 'order/:id',
    component: CreatePage
  },
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule { }
