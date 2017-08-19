import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WholeDashPage} from '../whole-dash/whole-dash';
import { WholeExplorePage } from '../whole-explore/whole-explore';
import { WholeProfilePage } from '../whole-profile/whole-profile';
import { WholeStorePage } from '../whole-store/whole-store';
import { WholeNotificationPage } from '../whole-notification/whole-notification';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  //set the root pages for each tabs
  tab1Root: any = WholeDashPage;
  tab2Root: any = WholeExplorePage;
  tab3Root: any = WholeStorePage;
  tab4Root: any = WholeNotificationPage;
  tab5Root: any = WholeProfilePage;
  mySelectedIndex : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
