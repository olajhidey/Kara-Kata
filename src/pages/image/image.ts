import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {

  imgSource =  this.navParams.get('imgSource');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }
  
 
}
