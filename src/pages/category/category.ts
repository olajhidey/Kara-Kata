import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category: string
  retailer : FirebaseListObservable<any[]>;
  wholesaler : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afdb : AngularFireDatabase, private afauth: AngularFireAuth) {

      this.retailer = afdb.list('Retailers');
      this.wholesaler = afdb.list('Wholesaler');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  retail() {


    this.category = "retailer"

    let data = {
      category : this.category
    }
    // this.retailer.push({
    //   userid: this.afauth.auth.currentUser.uid
    // })

    this.navCtrl.setRoot(EditProfilePage, data);
  }

  whole() {
    this.category = "wholesaler"
    // this.wholesaler.push({
    //   userid: this.afauth.auth.currentUser.uid
    // }) 

   this.navCtrl.setRoot(ProfileEditPage, this.category)
  }

}
