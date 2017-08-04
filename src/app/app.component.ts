import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RetailDashPage } from '../pages/retail-dash/retail-dash';
import { RetailProfilePage } from '../pages/retail-profile/retail-profile';
import { RetailExplorePage } from '../pages/retail-explore/retail-explore';
import { RetailShopPage } from '../pages/retail-shop/retail-shop';
import { RetailNotificationPage } from '../pages/retail-notification/retail-notification';
import { RetailSettingsPage } from '../pages/retail-settings/retail-settings';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{icon: string, title: string, component:any, method?: string, badge?: number}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
     this.pages = [
      {icon: "speedometer", title:"Dashboard", component:RetailDashPage},
      {icon: "person", title:"Profile", component: RetailProfilePage},
      {icon: "globe", title:"Explore", component: RetailExplorePage},
      {icon: "home", title:"Shop", component: RetailShopPage},
      {icon: "megaphone", title:"Notifications", component: RetailNotificationPage, badge: 10},
      {icon: "settings", title:"Settings", component: RetailSettingsPage},
      ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page:any): void {

    this.nav.setRoot(page.component);
    
  }
}

