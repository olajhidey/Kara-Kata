import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailProfilePage } from './retail-profile';

@NgModule({
  declarations: [
    RetailProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RetailProfilePage),
  ],
  exports: [
    RetailProfilePage
  ]
})
export class RetailProfileModule {}
