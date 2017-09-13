import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


/**
 * Generated class for the RetailFilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-retail-file',
  templateUrl: 'retail-file.html',
})
export class RetailFilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController, public loadCtrl : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailFilePage');
  }

  openPop() {
    let alert = this.alertCtrl
    let load = this.loadCtrl.create({
      content: "Loading",
      duration: 5000,
      
    })
    alert.create({
      title:'Choose File',
      message: 'Note: file must be an .xls extension or .cvg extension',
      inputs: [{
        type: "fIle",
       placeholder: "Choose file" 
      }],
      buttons: [{
        text: "Done",
        handler: ()=> {
          load.present();
        }
      }]
    }).present()
  }

}
