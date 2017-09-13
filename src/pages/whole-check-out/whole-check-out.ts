import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WholeOrderPage } from '../whole-order/whole-order';

@Component({
  selector: 'page-whole-check-out',
  templateUrl: 'whole-check-out.html',
})
export class WholeCheckOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  data = this.navParams.get('cart');

  checkOut() {

    let alert = this.alertCtrl
    alert.create({
      title: 'Success',
      message: 'Stock uploaded successfully',
      buttons: [{
        text: 'Done',
        handler: ()=> {
          this.navCtrl.setRoot(WholeOrderPage)
        }
      }]
    }).present();
    
  }
}
