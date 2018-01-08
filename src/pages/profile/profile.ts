import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	profile = {} as Profile;

  constructor
  (
  private afAuth: AngularFireAuth,
  private afDatabase: AngularFireDatabase,
  public navCtrl: NavController,
  public navParams: NavParams
  ) {
  }

  createProfile(){
  	this.afAuth.authState.take(1).subscribe(auth => {
  		this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
      .then(() => this.navCtrl.setRoot('HomePage'));
  	})
  }

}