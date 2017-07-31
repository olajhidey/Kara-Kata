import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doLogin() {
    this.navCtrl.setRoot(EditProfilePage)
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
