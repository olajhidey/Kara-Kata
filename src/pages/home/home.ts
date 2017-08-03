import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadCtrl : LoadingController) {
    
  }

  doLogin() {
    this.navCtrl.setRoot(CategoryPage)
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
