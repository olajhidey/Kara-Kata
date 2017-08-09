import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailExplorePage } from './retail-explore';

@NgModule({
  declarations: [
    RetailExplorePage,
  ],
  imports: [
    IonicPageModule.forChild(RetailExplorePage),
  ],
  exports: [
    RetailExplorePage
  ]
})
export class RetailExploreModule {}
