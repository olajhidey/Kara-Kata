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
import { EditpopPage } from '../pages/editpop/editpop';
import { TabsPage } from '../pages/tabs/tabs';
import { WholeDashPage} from '../pages/whole-dash/whole-dash';
import { WholeExplorePage } from '../pages/whole-explore/whole-explore';
import { WholeProfilePage } from '../pages/whole-profile/whole-profile';
import { WholeStorePage } from '../pages/whole-store/whole-store';
import { WholeNotificationPage } from '../pages/whole-notification/whole-notification';
import { WholeEditPage } from '../pages/whole-edit/whole-edit';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { WholeSettingsPage} from '../pages/whole-settings/whole-settings';

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
    RetailShopPage,
    EditpopPage, 
    TabsPage,
    WholeDashPage,
    WholeExplorePage,
    WholeNotificationPage,
    WholeStorePage,
    WholeProfilePage,
    WholeSettingsPage,
    ProfileEditPage,
    WholeEditPage
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
    RetailNotificationPage,
    EditpopPage,
    TabsPage,
    WholeDashPage,
    WholeExplorePage,
    WholeNotificationPage,
    WholeStorePage,
    WholeProfilePage,
    WholeEditPage,
    WholeSettingsPage,
    ProfileEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
