import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage } from './create/create.page';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: 'create/:id',
    component: CreatePage
  },
  {
    path: 'create',
    component: CreatePage
  },
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule { }
