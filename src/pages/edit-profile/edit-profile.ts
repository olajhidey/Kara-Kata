import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { RetailShopPage } from '../retail-shop/retail-shop';
import { TabsPage } from '../tabs/tabs';
import { Profile } from '../../model/auth'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ImagePage } from '../image/image';
import firebase from 'firebase';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

   profiledb : FirebaseListObservable <any[]>



  profile : Profile = {
    fullname : null,
    phone : null,
    storename: null,
    location : null,
    link : null, 
    bio : null,
    tag : null
  }
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionCtrl : ActionSheetController, public camera: Camera, public file : File,
      public filepath : FilePath, public filechooser: FileChooser, private afauth : AngularFireAuth, private afdb: AngularFireDatabase, public ngzone : NgZone,
      public alertCtrl : AlertController, public loadctrl : LoadingController, private platform : Platform
    
     ) {

        this.profiledb = afdb.list('User/profile');
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }



  saveProfile() {

    // let load = this.loadctrl.create({
    //   content: 'Loading'
    // })

    // load.present();

    // let category = this.navParams.get("category");

    // console.log(category);

    // try {

    //   this.profiledb.push({
    //     userid : this.afauth.auth.currentUser.uid,
    //     fullname : this.profile.fullname,
    //     location: this.profile.location,
    //     phone : this.profile.phone,
    //     link : this.profile.bio,
    //     tag : this.profile.tag,
    //     storename: this.profile.storename,
    //     bio : this.profile.bio,
    //   }).then((res)=> {
    //     load.dismiss();
  
    //     this.alertCtrl.create({
    //       title: "Success",
    //       buttons: [{
    //         text: "Done",
    //         handler: ()=> {
    //           if(category == "retailer") {
                this.navCtrl.setRoot(RetailShopPage);
    //         }
  
    //       }
    //       }]
    //     }).present();
        
    //   }, (error) => {
    //     load.dismiss()
    //     alert(error.message)
    //   })

    // }catch(e){
    //   alert(e)
    // }

  

}


   
  
  



 


}

