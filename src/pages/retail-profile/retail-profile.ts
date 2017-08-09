import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { EditpopPage} from '../editpop/editpop';

/**
 * Generated class for the RetailProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-profile',
  templateUrl: 'retail-profile.html',
})
export class RetailProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl : PopoverController) {
  }

  presentPopover($event): void {
    let popover = this.popCtrl.create(EditpopPage);

    popover.present(
      {
        ev: $event
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailProfilePage');
  }

}
