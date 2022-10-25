import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePage } from './create/create.page';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'create',
    component: CreatePage
  },
  {
    path: 'create/:id',
    component: CreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
