import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ProcessingformPage } from '../processingform/processingform';
import { ForgotPage } from '../forgot/forgot';
import { FCM } from '@ionic-native/fcm';
 import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
 public iconname = 'eye';
   public showpass:boolean = false;
   public ptype = 'password';
public data:any = '';
 devicetokenn:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting : Appsetting,
    public http: Http,
    private fcm: FCM,
    public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController
  ) {
//     fcm.getToken().then(token=>{
//     this.devicetokenn = token;
//     })
//     fcm.onNotification().subscribe(data=>{
//  if(data.wasTapped){
//    console.log("Received in background");
//  } else {
//    console.log("Received in foreground");
//  };
//})
  }

Signin(logindata){
  console.log('login');
  console.log(logindata.value);
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  if (logindata.value.password.indexOf(' ') >= 0) {
    let toast = this.toastCtrl.create({
      message: 'Space not allowed in password',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  } else {
      console.log(this.devicetokenn);
  var postdata = {
    email:logindata.value.email,
    password:logindata.value.password,
    role:'chef',
    divice_token:this.devicetokenn
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
  this.http.post(this.appsetting.myGlobalVar+'loginuser',Serialized,options).map(res=>res.json()).subscribe(response=>{
//    if(response.status == true && response.userinfo.role== 'chef'){
//    console.log('chef');
//    }else{
//       console.log('pta ni'); 
//    }
    Loading.dismiss();
    if(response.status == true ){
      console.log(response.userinfo._id);
      localStorage.setItem('UserInfo',JSON.stringify(response.userinfo));
      this.ToastMsg('Login successfully');
//     if((localStorage.getItem('UserInfo'))&& !(localStorage.getItem('Completed')) ){
//              this.navCtrl.push(ProcessingformPage);
//     }
//     else
//     {this.navCtrl.push(TabsPage);}
       if(response.userinfo.prossing_form==1){
           this.navCtrl.push(TabsPage);
       }
       else{
           this.navCtrl.push(ProcessingformPage)
       }
    }
    else{
          let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: response.message,
    buttons: [
      {
        text:'ok' ,
        role: 'ok',
        handler: () => {
          console.log('ok clicked');
        }
      }
    ]
  });
  alert.present();
//      this.ToastMsg(response.message);
      Loading.dismissAll();
    }
  },(err)=>{
      Loading.dismissAll();
  })
}) 
}
}
 showPassword() {    
   console.log('showpassword');   
    this.showpass = !this.showpass;   
     if(this.showpass){    
       this.ptype = 'text';  
           this.iconname = 'eye-off';  
             } else {    
               this.ptype = 'password';   
                  this.iconname = 'eye';    }  }
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
      duration: 3000,
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
AlertMsg3(msg){
  let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: 'Invalid chef',
    buttons: [
      {
        text: 'ok',
        role: 'submit',
        handler: () => {
          console.log('ok clicked');
        }
      }
    ]
  });
  alert.present();
}
forgot(){
  this.navCtrl.push(ForgotPage);
}
register(){
  this.navCtrl.push(RegisterPage);
}

}
