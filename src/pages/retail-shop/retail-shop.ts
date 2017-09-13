import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { RetailSalesPage } from '../retail-sales/retail-sales';
import { RetailUpdatePage } from '../retail-update/retail-update';
import { RetailDeletePage } from '../retail-delete/retail-delete';
import { RetailMonitorPage } from '../retail-monitor/retail-monitor';
import { RetailOrderPage } from '../retail-order/retail-order';
import { RetailManualUploadPage } from '../retail-manual-upload/retail-manual-upload';
import { RetailFilePage } from '../retail-file/retail-file'

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
          public actionSheet : ActionSheetController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailShopPage');
  }

  goToSales() {

    this.navCtrl.push(RetailSalesPage)
  }

  goToUpdate() {
    this.navCtrl.push(RetailUpdatePage);
  }

  goToDelete() {
    this.navCtrl.push(RetailDeletePage);
  }

  goToMonitor(){
    this.navCtrl.push(RetailMonitorPage)
  }

  placeOrder() {
    let modal = this.modalCtrl.create(RetailOrderPage);
    modal.present();
  }

  uploadManual() : any{
    let modal = this.modalCtrl.create(RetailManualUploadPage)
    return modal.present()
  }

  chooseMethod():void{

    this.actionSheet.create( {
      title: 'Choose method',
      buttons: [ 
        {
          text: 'Upload manually',
          icon: 'clipboard',
          handler: () => {
            this.uploadManual()          }
        }, 
        {
          text: 'Upload with File',
          icon: 'document',
          handler: () => {
            this.navCtrl.push(RetailFilePage)
          }
        }
      ]
    }).present()
  }
}
