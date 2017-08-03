import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RetailDashPage } from '../retail-dash/retail-dash';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  retail() {
    this.navCtrl.setRoot(RetailDashPage);
  }

  whole() {
    console.log("I am a wholesaler")
  }

}
