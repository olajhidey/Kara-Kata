import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WholeUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-whole-update',
  templateUrl: 'whole-update.html',
})
export class WholeUpdatePage {

  data: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.data = [ 
      {name: 'Iphone6', quantity: '46'},
      {name: 'Galaxy Note 4', quantity: '30'},
      {name: 'Tecno WX3', quantity: '20'},
      {name: 'Infinix Hot Note', quantity: '30'},
    ]
  }

}
