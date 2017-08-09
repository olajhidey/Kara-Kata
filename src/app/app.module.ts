import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { CategoryPage } from '../pages/category/category';
import { RetailDashPage } from '../pages/retail-dash/retail-dash';
import { RetailProfilePage } from '../pages/retail-profile/retail-profile';
import { RetailExplorePage } from '../pages/retail-explore/retail-explore';
import { RetailShopPage } from '../pages/retail-shop/retail-shop';
import { RetailNotificationPage } from '../pages/retail-notification/retail-notification';
import { RetailSettingsPage } from '../pages/retail-settings/retail-settings';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    EditProfilePage,
    CategoryPage,
    RetailDashPage,
    RetailExplorePage,
    RetailNotificationPage,
    RetailProfilePage,
    RetailSettingsPage,
    RetailShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    EditProfilePage,
    CategoryPage,
    RetailDashPage,
    RetailExplorePage,
    RetailProfilePage,
    RetailSettingsPage,
    RetailShopPage,
    RetailNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
