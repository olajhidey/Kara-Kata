import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { WholeSettingsPage } from '../whole-settings/whole-settings';
import { ProfileEditPage } from '../profile-edit/profile-edit';

/**
 * Generated class for the WholeEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-whole-edit',
  templateUrl: 'whole-edit.html',
})
export class WholeEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeEditPage');
  }
  
  editProfile():void {
    this.navCtrl.push(ProfileEditPage);
    this.viewCtrl.dismiss();
  }
  
  settings():void{
    this.navCtrl.push(WholeSettingsPage);
    this.viewCtrl.dismiss();
  }

}
