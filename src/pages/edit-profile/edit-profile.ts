import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
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

  nativepath : any;
  firestore = firebase.storage();
  imgSource : any = "assets/img/picture.jpg";
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
      public alertCtrl : AlertController
    
     ) {

        this.profiledb = afdb.list('User/profile');

        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  chooseImage(): void {

    this.actionCtrl.create( {
      title: 'Choose option',
      buttons: [{
        text: 'View image',
        icon: 'image',
        handler : () => {
            this.viewImage()
        }

      },
        
        {
        text: 'Take picture',
        icon: 'camera',
        handler : () => {
            this.takePicture()
        }
      },
        {
          text: 'File',
          icon: 'document',
          handler: () => {
            this.chooseFile();
          }
        }
    ]
    }).present();

    

  }

  saveProfile() : void {

    let category = this.navParams.get("category");

    this.profiledb.push({
      userid : this.afauth.auth.currentUser.uid,
      fullname : this.profile.fullname,
      location: this.profile.location,
      phone : this.profile.phone,
      link : this.profile.bio,
      storename : this.profile.tag,
      bio : this.profile.bio,
    })
  
    this.alertCtrl.create({
      title: "Success",
      buttons: [{
        text: "Done",
        handler: ()=> {
          if(category == "retailer") {
            this.navCtrl.setRoot(RetailShopPage);
          }else if (category == "wholesaler") {
            this.navCtrl.setRoot(TabsPage)
          }
        }
      }]
    }).present();

  }

  takePicture(): void {

    try {

      this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        saveToPhotoAlbum: true
      }).then(ImageData => {
        
              let base64Image = 'data:image/jpeg;base64,'+ ImageData;
        
              var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
        
              imageStore.put(base64Image).then(res=> {
        
                  alert("Image uploaded succesfully");
        
                  this.firestore.ref('/profileImages').child(firebase.auth().currentUser.uid).getDownloadURL().
                  then((url) => {
        
                    this.ngzone.run(() => {
        
                      this.imgSource = url
        
                    })
                  })
        
              }).catch(error => {
        
                alert(error.message);
              })
            }) 
    }catch(error) {
      console.log(error);
    }
    

  }

  chooseFile() : void {

    try {
      this.filechooser.open().then((url) => {
        (<any>Window).FilePath.resolveNativePath(url, (result) => {

          this.nativepath = result;

          this.uploadPicture();
        })
      })

    }catch(error) {
      console.log(error)
    }
     
  }

  uploadPicture(): void {

    try {

      (<any>Window).resolveLocalFileSystemUrl(this.nativepath, res => {
        res.file( (resFile) => {
          var reader = new FileReader();
          reader.readAsArrayBuffer(resFile);
          reader.onloadend = (evt:any) => {
            var imgBlob = new Blob([evt.target.result],  {type: "image/jpeg"});
            var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
         
         imageStore.put(imgBlob).then((res)=> {
           alert("file uploaded successfully")

           this.firestore.ref('/profileImages').child(firebase.auth().currentUser.uid).getDownloadURL()
           .then((url) => {

              this.ngzone.run(()=> {
                this.imgSource = url
              })
           })

         }).catch((error) => {
           alert(error.message);
         })
          }
        } )
      })

    }catch(error) {
      alert("Something went wrong")
    }
     
  }

  viewImage(): void {

    try {

      this.firestore.ref('/profileImages').child(firebase.auth().currentUser.uid).
      getDownloadURL().then((url) => {

          this.ngzone.run(()=> {
            this.imgSource = url
            this.navCtrl.push(ImagePage, this.imgSource)
          })
      })
  

    }catch(error) {
      alert("Something happened")
    }

  
  }


}

