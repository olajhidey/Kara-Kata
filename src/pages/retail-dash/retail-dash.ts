import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RetailDashPage page.s
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-dash',
  templateUrl: 'retail-dash.html',
})
export class RetailDashPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public AlertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailDashPage');
  }


}
