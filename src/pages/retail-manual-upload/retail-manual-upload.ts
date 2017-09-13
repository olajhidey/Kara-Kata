import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {RetailCheckOutPage} from '../retail-check-out/retail-check-out'

@Component({
  selector: 'page-retail-manual-upload',
  templateUrl: 'retail-manual-upload.html',
})
export class RetailManualUploadPage {

  numStock = 0;
  myStock = [];
  cartLength;
  prd_name =null;
  prd_quantity = null;
  cart = []
  data : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public alertCtrl : AlertController) {
  }

  openList(stk) {
    var i
    for(i=0; i< stk ; i++) {
      this.myStock.push(i);
    } 
  }

  

  closeModal() {
    this.viewCtrl.dismiss();
    this.viewCtrl.onDidDismiss(()=> {
      this.myStock = [];

    })
  }

  addToCart(name, quantity, i) {

    this.cart.push({
      name: name,
      quantity: quantity
    })

    this.cartLength = this.cart.length
    console.log(this.cartLength)
    console.log(this.cart)

    this.myStock.splice(i, 1)

  }

  checkOut() {

    let data = {
      cart : this.cart
    }

    this.navCtrl.setRoot(RetailCheckOutPage, data)
    
  }


}
