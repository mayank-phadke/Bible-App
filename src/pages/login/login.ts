import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: Observable<firebase.User>;
  email: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    if (this.email !== null && this.password !== null && this.email !== '' && this.password !== '') {
      var provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope('https://www.googleapis.com/auth/gmail.readonly');

      this.afAuth.auth
        .signInWithRedirect(provider)
        .then(function(user) {console.log(user)})
        .catch(err => {console.log(err.message)});
    }
  }
}

