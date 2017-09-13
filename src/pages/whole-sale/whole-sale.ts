import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-whole-sale',
  templateUrl: 'whole-sale.html',
})
export class WholeSalePage {

  data : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
     this.data = [
       {name: 'Iphone 5', quantity: 10},
       {name: 'Samsung S5', quantity: 10},
       {name: 'Tecno A5', quantity: 10}
     ]

  }

}
