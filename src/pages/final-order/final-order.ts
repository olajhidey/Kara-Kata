import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the FinalOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-final-order',
  templateUrl: 'final-order.html',
})
export class FinalOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalOrderPage');
  }

  makeOrder() {
    let alert = this.alertCtrl.create( {
      title: 'Success<ion-icon name="bicycle"></ion-icon>',
      message: `
        <h3 text-left color="primary">Stock ordered</h3>
      `,
      buttons: ['OK']
    })

    alert.present();
  }

}
