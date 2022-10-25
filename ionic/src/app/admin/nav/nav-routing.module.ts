import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPage } from './nav.page';

const routes: Routes = [
  {
    path: '',
    component: NavPage,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'trees',
        loadChildren: () => import('../trees/trees.module').then(m => m.TreesModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'filters',
        loadChildren: () => import('../filters/filters.module').then(m => m.FiltersModule)
      },
      {
        path: 'cities',
        loadChildren: () => import('../cities/cities.module').then(m => m.CitiesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPageRoutingModule { }
