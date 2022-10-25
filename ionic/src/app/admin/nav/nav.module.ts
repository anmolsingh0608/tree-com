import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavPageRoutingModule } from './nav-routing.module';

import { NavPage } from './nav.page';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule,
    NavPageRoutingModule
  ],
  declarations: [NavPage],
  providers: [
  ]
})
export class NavPageModule {}
