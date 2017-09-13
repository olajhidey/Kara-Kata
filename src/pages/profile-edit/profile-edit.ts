import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Profile } from '../../model/auth';
import { TabsPage } from '../tabs/tabs'

/**
 * Generated class for the ProfileEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  profile : Profile = {
    fullname: null,
    phone: undefined,
    storename:null,
    tag: null,
    link: null,
    location: null,
    bio: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  saveProfile():void{

      let alert = this.alertCtrl.create({
        title: 'Success',
        message: 'Profile updated successfully',
        buttons: [{
          text: 'cool',
          handler:()=> {
            this.navCtrl.setRoot(TabsPage);
          }
        }]
      })

      alert.present();


  }

}
