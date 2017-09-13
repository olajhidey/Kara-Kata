import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WholeCheckOutPage } from '../whole-check-out/whole-check-out';

@Component({
  selector: 'page-whole-upload',
  templateUrl: 'whole-upload.html',
})
export class WholeUploadPage {
  
  stock: number
  listArr = [];
  cart = [];
  cartLength : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeUploadPage');
  }

  loadList() {
    for(let i = 0; i < this.stock; i++) {
      this.listArr.push(i)
    }
  }

  checkOut() {

    let data = {
      cart: this.cart
    }
    this.navCtrl.setRoot(WholeCheckOutPage, data)
  }

  addToCart(name,qty,i) {
    this.cart.push({
      name: name,
      quantity: qty
    })

      this.cartLength = this.cart.length
    

    this.listArr.splice(i,1)
  }

}
