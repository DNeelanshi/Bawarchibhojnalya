import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {LoadingController,ToastController} from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import {Http, Headers, RequestOptions} from '@angular/http';
import { RafahofeedbackPage } from '../rafahofeedback/rafahofeedback';
import { AddproductPage } from '../addproduct/addproduct';
import { EditprofilePage } from '../editprofile/editprofile';
import {AccountnumberPage} from '../accountnumber/accountnumber';
import {AddspecialitiesPage} from '../addspecialities/addspecialities';
import { TermPage} from '../term/term';
import {FrequentquestionsPage} from '../frequentquestions/frequentquestions';
import {HelpPage} from '../help/help';
import { GeolocationPage} from '../geolocation/geolocation';
import { PaymentPage } from '../payment/payment';
import { ChangepasswordPage } from '../changepassword/changepassword';
import{ SpecialitylistsPage }from '../specialitylists/specialitylists';
import{ RegisterPage}from '../register/register';
import{ SigninPage}from '../signin/signin';
import{ EditstaffPage}from '../editstaff/editstaff';
import{ StafflistPage}from '../stafflist/stafflist';

import{ ProductlistPage}from '../productlist/productlist';






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
 profile;srcImage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public http:Http,
  public appsetting: Appsetting,
   public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
   public app:App
  ) {
    this.Userprofile();
  }

  Userprofile(){
  	let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);

		var postdata = {
			id: userid
		};
		

      var serialized = this.serializeObj(postdata);
      var Loading = this.loadingCtrl.create({
               spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
        });
      console.log(postdata);
        Loading.present().then(() => {
this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data => {
	 Loading.dismiss();
  console.log(data);
			 this.profile = data.data;
			 this.srcImage=this.profile.user_image;
			
			 console.log(this.profile);

		},(err)=>{
                 let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
                    Loading.dismissAll();
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
    console.log('ionViewDidLoad ProfilePage');
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
editproduc(){
    console.log('productlist');
    this.navCtrl.push(ProductlistPage);
}
 product(){
  this.navCtrl.push(AddproductPage);
}

  feedback(){
  this.navCtrl.push(RafahofeedbackPage);
}
 
  editprofile(){
  this.navCtrl.push(EditprofilePage);
}
editstaff(){
     this.navCtrl.push(StafflistPage);
}
 accountnumber(){
  this.navCtrl.push(AccountnumberPage);
}

addspecialities(){
  this.navCtrl.push( AddspecialitiesPage);
}
termcondition(){
  this.navCtrl.push(TermPage);
}
frequentquestions(){
  this.navCtrl.push(FrequentquestionsPage);
}
help(){
  this.navCtrl.push(HelpPage);
}

geolocation(){
  this.navCtrl.push(GeolocationPage);
}
Payment(){
  this.navCtrl.push(PaymentPage);
}
changepassword(){
  this.navCtrl.push(ChangepasswordPage);
}
editspeciality(){
    this.navCtrl.push( SpecialitylistsPage); 
}
logout(){
   if(localStorage.getItem('UserInfo')){
      // console.log(localStorage.getItem('UserInfo'));
      localStorage.removeItem('UserInfo');
      // alert("local storage cleared");
      //  this.navCtrl.push(SigninPage);
        this.app.getRootNav().setRoot(SigninPage);
      // this.rootPage = TabsPage;
    }
  // this.navCtrl.push(RegisterPage);
}
}