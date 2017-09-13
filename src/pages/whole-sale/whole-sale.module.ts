import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WholeSalePage } from './whole-sale';

@NgModule({
  declarations: [
    WholeSalePage,
  ],
  imports: [
    IonicPageModule.forChild(WholeSalePage),
  ],
  exports: [
    WholeSalePage
  ]
})
export class WholeSaleModule {}
