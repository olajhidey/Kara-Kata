import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RetailMonitorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-monitor',
  templateUrl: 'retail-monitor.html',
})
export class RetailMonitorPage {

data: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = [
      {name:'IPhone 6' , quantity: 45},
      {name:'Samsung S8' , quantity: 39},
      {name:'Galaxy Note 6' , quantity: 40},
      {name:'IPhone 7' , quantity: 30},
      {name:'IPhone 5' , quantity: 22},
      {name:'Samsung S7' , quantity: 33},

    ]
  }

}
