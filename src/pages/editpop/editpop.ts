import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {EditProfilePage} from '../edit-profile/edit-profile';
/**
 * Generated class for the EditpopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editpop',
  templateUrl: 'editpop.html',
})
export class EditpopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditpopPage');
  }

  edit(): void {
    this.navCtrl.push(EditProfilePage);
    this.viewCtrl.dismiss();
  }
}
