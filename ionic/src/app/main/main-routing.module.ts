import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsPage } from './customer-details/customer-details.page';
import { DetailsPage } from './details/details.page';
import { DrawingPage } from './drawing/drawing.page';
import { HomePage } from './home/home.page';
import { OrderSuccessPage } from './order-success/order-success.page';
import { SelectionPage } from './selection/selection.page';
import { ViewDrawingPage } from './view-drawing/view-drawing.page';

const routes: Routes = [
  {
    path: 'trees',
    component: SelectionPage
  },
  {
    path: 'detail',
    component: DetailsPage
  },
  {
    path: 'trees/:id',
    component: DetailsPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'customer-details',
    component: CustomerDetailsPage
  },
  {
    path: 'drawing',
    component: DrawingPage
  },
  {
    path: 'order-success',
    component: OrderSuccessPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-drawing',
    component: ViewDrawingPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
