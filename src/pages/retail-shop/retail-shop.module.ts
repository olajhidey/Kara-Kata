import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailShopPage } from './retail-shop';

@NgModule({
  declarations: [
    RetailShopPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailShopPage),
  ],
  exports: [
    RetailShopPage
  ]
})
export class RetailShopModule {}
