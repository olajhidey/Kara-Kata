import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whole-explore',
  templateUrl: 'whole-explore.html',
})
export class WholeExplorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,) {

  }

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad WholeExplorePage');
  }

    



}
