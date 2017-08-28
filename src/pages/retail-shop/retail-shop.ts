import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the RetailShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-shop',
  templateUrl: 'retail-shop.html',
})
export class RetailShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public actionSheet : ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailShopPage');
  }

  chooseMethod():void{

    this.actionSheet.create( {
      title: 'Choose method',
      buttons: [ 
        {
          text: 'Upload stock',
          icon: 'clipboard',
          handler: () => {

          }
        }, 
        {
          text: 'file',
          icon: 'document',
          handler: () => {
            
          }
        }
      ]
    })
  }
}
