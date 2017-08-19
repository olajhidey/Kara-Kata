import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { WholeEditPage} from '../whole-edit/whole-edit';

/**
 * Generated class for the WholeProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-whole-profile',
  templateUrl: 'whole-profile.html',
})
export class WholeProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popover: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeProfilePage');
  }
  
  openPop($event):void {
    
      let pop = this.popover.create(WholeEditPage);
      
      pop.present({
        ev: $event
      })
  }

}
