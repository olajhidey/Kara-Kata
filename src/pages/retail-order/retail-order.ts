import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FinalOrderPage } from '../final-order/final-order';


@Component({
  selector: 'page-retail-order',
  templateUrl: 'retail-order.html',
})
export class RetailOrderPage {

  cart = 0;
  dispCart = [];
  show = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    this.cart = this.dispCart.length;
    console.log('ionViewDidLoad RetailOrderPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  showDetails() {
    this.show = true;
  }

  clearQty() {

  }

  final(){
    this.navCtrl.push(FinalOrderPage)
  }

  orderItem() {

    this.show = false
  }

}
