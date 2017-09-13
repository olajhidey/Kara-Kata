import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WholeSalePage } from '../whole-sale/whole-sale';
import { WholeUpdatePage } from '../whole-update/whole-update';
import { WholeDeletePage } from  '../whole-delete/whole-delete';
import { WholeMonitorPage } from '../whole-monitor/whole-monitor';
import { WholeOrderPage } from '../whole-order/whole-order';
import { WholeFilePage } from '../whole-file/whole-file';
import { WholeUploadPage } from '../whole-upload/whole-upload';


@Component({
  selector: 'page-whole-store',
  templateUrl: 'whole-store.html',
})
export class WholeStorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeStorePage');
  }

goToSales() {
  this.navCtrl.push(WholeSalePage);
}

goToUpdate() {
  this.navCtrl.push(WholeUpdatePage);
}

goToDelete() {
  this.navCtrl.push(WholeDeletePage)
}

goToMonitor() {
  this.navCtrl.push(WholeMonitorPage);
}

goToOrder() {
  this.navCtrl.push(WholeOrderPage);
}

openManual() {
  this.navCtrl.push(WholeUploadPage);
}

openFile() {
  this.navCtrl.push(WholeFilePage);
}

}
