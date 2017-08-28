import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CategoryPage } from '../category/category';
import { User } from '../../model/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login : User = {email : null, password: null}
  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public loadCtrl : LoadingController, 
    public authService: AuthServiceProvider, public alertCtrl : AlertController,
  private afauth : AngularFireAuth, private afdb : AngularFireDatabase ) {

    this.user = afdb.list('User/profile')
    
  }

  doLogin(email, password) {

      if (this.login.email == null || this.login.password == null) {
          this.alertCtrl.create({
            title: 'Error',
            message: 'Email or Password field cant be empty',
            buttons: ['Cancel']
          }).present();
      }else if(this.login.email == null && this.login.password == null) {

        this.alertCtrl.create({
          title: 'Error',
          message: 'Email and Password field cant be empty',
          buttons: ['Cancel']
        }).present()
      }else {
        console.log("i am here")
        try {
            this.afauth.auth.signInWithEmailAndPassword(this.login.email, this.login.password).then(data=> {
            
              
              this.navCtrl.setRoot(CategoryPage);
            }).catch(error => {
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

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
}
