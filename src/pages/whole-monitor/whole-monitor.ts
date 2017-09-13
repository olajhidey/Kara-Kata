import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-whole-monitor',
  templateUrl: 'whole-monitor.html',
})
export class WholeMonitorPage {

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
