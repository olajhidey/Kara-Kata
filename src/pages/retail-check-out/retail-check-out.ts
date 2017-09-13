import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { RetailShopPage } from '../retail-shop/retail-shop';


@Component({
  selector: 'page-retail-check-out',
  templateUrl: 'retail-check-out.html',
})
export class RetailCheckOutPage {

  data : any[];
  number = 0
  dataLength = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController, public platform: Platform) {

   
  }

  ionViewDidLoad() {
    this.data = this.navParams.get('cart');
    console.log(this.data)
  }

  checkOut() {
    let alert = this.alertCtrl

    alert.create({
      title: `<ion-icon color="primary" name="cloud-done"></ion-icon> Success`,
      message: 'Stock uploaded successfully',
      buttons: [{
        text: 'done',
        handler: ()=> {
          this.navCtrl.setRoot(RetailShopPage);
        }
      }]
    }).present();

  }

  

  

}
