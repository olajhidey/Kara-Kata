import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../model/auth'; 
import { CategoryPage } from '../category/category';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  login : User = {email : null , password: null};

  users : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl : ToastController, public authService : AuthServiceProvider,
    private afauth : AngularFireAuth, private afdb : AngularFireDatabase, public alertCtrl: AlertController) {

      this.users = this.afdb.list('Users')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister(email, pass) {
    if (this.login.email == null || this.login.password == null) {
      this.toastCtrl.create({
        message: 'Email or Password field cant be empty',
        closeButtonText: "Retry",
        showCloseButton: true,
        duration: 3000
      }).present();
  }else if(this.login.email == null && this.login.password == null) {

    this.toastCtrl.create({
      message: 'Email and Password field cant be empty',
      showCloseButton: true,
      closeButtonText: 'Cancel',
      duration: 3000
    }).present()
  }else {
    console.log("i am here")
    try {
        this.afauth.auth.createUserWithEmailAndPassword(this.login.email, this.login.password).then(data=> {    
          
          this.alertCtrl.create({
            title: 'Success',
            message: "Account created successfully",
            buttons : ['Cancel']
          }).present();

          this.navCtrl.setRoot(CategoryPage);
        })
        .catch(error => {
          this.alertCtrl.create({
            title: 'Warning',
            message: error.message,
            buttons : ['Cancel']
          }).present();
        })

    }catch(error) {
      console.log(error);
    }
  }

}

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
