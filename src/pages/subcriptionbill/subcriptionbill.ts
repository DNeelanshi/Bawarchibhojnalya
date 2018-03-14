import { Component } from '@angular/core';
import { IonicPage,} from 'ionic-angular';
import { NavController, NavParams, ViewController,LoadingController,ToastController} from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the SubcriptionbillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcriptionbill',
  templateUrl: 'subcriptionbill.html',
})
export class SubcriptionbillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SubcriptionbillPage');
  // }
  // dismiss() {
  //   this.viewCtrl.dismiss();
  // }
Payment(){
  this.navCtrl.push(PaymentPage);
}

}