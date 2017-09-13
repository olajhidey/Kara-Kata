import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-whole-file',
  templateUrl: 'whole-file.html',
})
export class WholeFilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeFilePage');
  }

  openFile(){
    let alert = this.alertCtrl

    alert.create({
      title: 'Choose file', 
      message: 'Note: file must be an .xls extension or .cvg extension',
      inputs: [{
        type: 'file',
        placeholder: 'choose file..'
      }],
      buttons: [{
        text: 'Done',
        handler: ()=> {
          console.log('do something');
        }
      }]

    }).present()
  }

}
