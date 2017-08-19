import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RetailShopPage } from '../retail-shop/retail-shop';
import { TabsPage } from '../tabs/tabs';

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
    this.navCtrl.setRoot(RetailShopPage);
  }

  whole() {
   this.navCtrl.setRoot(TabsPage)
  }

}
