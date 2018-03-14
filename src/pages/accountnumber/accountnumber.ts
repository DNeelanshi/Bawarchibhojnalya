import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';



/**
 * Generated class for the AccountnumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountnumber',
  templateUrl: 'accountnumber.html',
})
export class AccountnumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountnumberPage');
  }
   showAlert() {
     this.navCtrl.push(PaymentPage);
    let alert = this.alertCtrl.create({
      title: 'Payment',
      subTitle: 'Your payment has been successfully processed.',
      cssClass: 'alertDanger'
    });
    alert.present();
  }

}
