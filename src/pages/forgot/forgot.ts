import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TabsPage} from '../tabs/tabs';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

public data:any = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting : Appsetting,
    public http: Http,
    public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController
  ) {
   
  }

  Forgot(forgotdata){
  console.log('forgot');
  console.log(forgotdata.value);
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  var postdata = {
    email:forgotdata.value.email
  }
  console.log(postdata);
  //alert(JSON.stringify(postdata));
  var Serialized = this.serializeObj(postdata);
  var Loading = this.loadingCtrl.create({
     spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
  });
  Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar+'forgetpassword',Serialized,options).map(res=>res.json()).subscribe(response=>{
    console.log(response);
    Loading.dismiss();
    if(response.status == true){
      this.ToastMsg('Check you email to reset password');
      this.navCtrl.push(SigninPage);
    }else{
      this.ToastMsg(response.message);
    }
  })

})
}
serializeObj(obj) {
  var result = [];
  for (var property in obj)
    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

  return result.join("&");
}
ionViewDidLoad() {
  console.log('ionViewDidLoad RegisterPage');
  console.log('Rahul Maurya');
  console.log(window.navigator.onLine);
  if (window.navigator.onLine == true) {
  } else {
    let toast = this.toastCtrl.create({
      message: 'Network connection failed',
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }
}
ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
AlertMsg(msg){
  let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: msg,
    buttons: [
      {
        text: 'Continue',
        role: 'cancel',
        handler: () => {
          console.log('Continue clicked');
        }
      }
    ]
  });
  alert.present();
}
signin(){
  this.navCtrl.push(SigninPage);
}

}
