import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailSettingsPage } from './retail-settings';

@NgModule({
  declarations: [
    RetailSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailSettingsPage),
  ],
  exports: [
    RetailSettingsPage
  ]
})
export class RetailSettingsModule {}
