import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data  = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister(email, pass) {
    let toast = this.toastCtrl.create({
      message: "Email and Password cant be empty",
      duration: 3000,
      position: "bottom"
    })

    if(email == null || pass == null) {
      toast.present();
    }
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
