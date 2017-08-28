import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { TabsPage } from '../tabs/tabs';
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
    this.retailer.push({
      userid: this.afauth.auth.currentUser.uid
    })

    this.navCtrl.setRoot(EditProfilePage, this.category);
  }

  whole() {
    this.category = "wholesaler"
    this.wholesaler.push({
      userid: this.afauth.auth.currentUser.uid
    })
    
   this.navCtrl.setRoot(TabsPage, this.category)
  }

}
