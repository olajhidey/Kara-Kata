import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

/**
 * Generated class for the RetailSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-settings',
  templateUrl: 'retail-settings.html',
})
export class RetailSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailSettingsPage');
  }
  
  logout():void {
    this.navCtrl.setRoot(HomePage)
  }

}
