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
import { WholeSalePage } from '../pages/whole-sale/whole-sale';
import { WholeUpdatePage } from '../pages/whole-update/whole-update';
import { WholeDeletePage } from '../pages/whole-delete/whole-delete';
import { WholeMonitorPage } from '../pages/whole-monitor/whole-monitor';
import { WholeOrderPage } from '../pages/whole-order/whole-order'
import { ImagePage } from '../pages/image/image';
import { firebaseConfig } from './firebaseconfig';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RetailServiceProvider } from '../providers/retail-service/retail-service';
import { WholesaleServiceProvider } from '../providers/wholesale-service/wholesale-service';
import { IonicStorageModule } from '@ionic/Storage';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { RetailSalesPage } from '../pages/retail-sales/retail-sales';
import { RetailUpdatePage } from '../pages/retail-update/retail-update';
import { RetailDeletePage } from '../pages/retail-delete/retail-delete';
import { RetailMonitorPage } from '../pages/retail-monitor/retail-monitor';
import { RetailOrderPage } from '../pages/retail-order/retail-order';
import { FinalOrderPage } from '../pages/final-order/final-order';
import { RetailManualUploadPage } from '../pages/retail-manual-upload/retail-manual-upload';
import { RetailCheckOutPage } from '../pages/retail-check-out/retail-check-out';
import { RetailFilePage } from '../pages/retail-file/retail-file';
import { WholeUploadPage } from '../pages/whole-upload/whole-upload';
import { WholeCheckOutPage } from '../pages/whole-check-out/whole-check-out';
import { WholeFilePage } from '../pages/whole-file/whole-file'

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
    WholeEditPage,
    WholeSalePage,
    WholeUpdatePage,
    WholeDeletePage,
    WholeMonitorPage,
    WholeOrderPage,
    ImagePage,
    RetailSalesPage,
    RetailUpdatePage,
    RetailDeletePage,
    RetailMonitorPage,
    RetailOrderPage,
    FinalOrderPage,
    RetailManualUploadPage,
    RetailCheckOutPage,
    RetailFilePage,
    WholeUploadPage,
    WholeFilePage,
    WholeCheckOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  
    
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
    WholeUpdatePage,
    ProfileEditPage,
    WholeSalePage,
    WholeDeletePage,
    WholeMonitorPage,
    WholeOrderPage,
    ImagePage,
    RetailSalesPage,
    RetailUpdatePage,
    RetailDeletePage,
    RetailMonitorPage,
    RetailOrderPage,
    FinalOrderPage,
    RetailManualUploadPage,
    RetailCheckOutPage,   
    RetailFilePage,
    WholeUploadPage,
    WholeFilePage,
    WholeCheckOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    RetailServiceProvider,
    WholesaleServiceProvider,
    Camera,
    File, FilePath, FileChooser,

  ]
})
export class AppModule {}
