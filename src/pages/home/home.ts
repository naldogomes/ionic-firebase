import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor
  (
  private afAuth: AngularFireAuth,
  private toast: ToastController,
  public navCtrl: NavController,
  public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data => {
    	if(data && data.email && data.uid){	
    		this.toast.create({
    			message: `Bem-vindo, ${data.email}`,
    			duration: 3000
    		}).present();

    	}
    	else{
    		this.toast.create({
    			message: 'Usuário não encontrado',
    			duration: 3000
    		}).present();
    	}
    });
  }

}
