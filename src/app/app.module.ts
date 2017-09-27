import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GeneratorPage } from '../pages/generator/generator';
import { ScannerPage } from '../pages/scanner/scanner';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyB2idxFjo5NAozDiua7t2Ar32LAwSPCj94",
  authDomain: "ionicapp-d6a6e.firebaseapp.com",
  databaseURL: "https://ionicapp-d6a6e.firebaseio.com",
  projectId: "ionicapp-d6a6e",
  storageBucket: "ionicapp-d6a6e.appspot.com",
  messagingSenderId: "593808686866"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GeneratorPage,
    ScannerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GeneratorPage,
    ScannerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
