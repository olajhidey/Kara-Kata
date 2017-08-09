import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailNotificationPage } from './retail-notification';

@NgModule({
  declarations: [
    RetailNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailNotificationPage),
  ],
  exports: [
    RetailNotificationPage
  ]
})
export class RetailNotificationModule {}
