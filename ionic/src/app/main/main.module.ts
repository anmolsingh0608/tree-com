import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { SelectionPage } from './selection/selection.page';
import { DetailsPage } from './details/details.page';
import { CustomerDetailsPage } from './customer-details/customer-details.page';
import { DrawingPage } from './drawing/drawing.page';
import { OrderSuccessPage } from './order-success/order-success.page';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewDrawingPage } from './view-drawing/view-drawing.page';


@NgModule({
  declarations: [HomePage, DetailsPage, SelectionPage, CustomerDetailsPage, DrawingPage, OrderSuccessPage, ViewDrawingPage],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgSelectModule,
  ]
})
export class MainModule { }
