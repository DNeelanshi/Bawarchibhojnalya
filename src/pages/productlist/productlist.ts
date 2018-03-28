
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {EditproductPage} from '../editproduct/editproduct';
import {ProfilePage} from '../profile/profile';
import { AddproductPage } from '../addproduct/addproduct';
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
products:any=[];
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
       private loadingCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
      this.productlist();
  }
  addpro(){
      this.navCtrl.push(AddproductPage);
  }
productlist(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id: userid
    };
    var serialized = this.serializeObj(postdata);
   var  Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
      console.log(postdata);
        Loading.present().then(() => { 
            this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data1 => {
        console.log(data1.data.products);
        Loading.dismiss();
        if(data1.status == true){
        this.products =data1.data.products
        }
    },(err)=>{
        Loading.dismissAll();
    });
    })
}
   ndelete(proid){
        console.log(proid);
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Are you sure<br>you want to delete?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            // this.navCtrl.push(RegisterPage)
          }
        },
        {
          text: 'YES',
          role: 'submit',
          handler: () => {
            console.log('Continue clicked');
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid)
    var postdata = {
      user_id: userid,
      id: proid
      
    };
//    let options = new RequestOptions({ 
//    body: body,
//    method: RequestMethod.Delete
//  });
    console.log(postdata);

     var  Loading = this.loadingCtrl.create({
           spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
       var serialized = this.serializeObj(postdata);
        Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'users/removeProduct', serialized, options).map(res => res.json()).subscribe(data1 => {
     console.log(data1);
     Loading.dismiss();
     if(data1.status==true){
           this.ToastMsg(data1.message);
           this.productlist();
           
     }

 },(err)=>{
     this.ToastMsg('Something went wrong');
     Loading.dismissAll();
 });
          });
          }
        }
      ]
    });
    alert.present();
//  
  }
     ToastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }
  backtoprofile(){
      this.navCtrl.push(ProfilePage);
  }
editpro(dat){
    
    localStorage.setItem('Producttoedit',JSON.stringify(dat));
    this.navCtrl.push(EditproductPage);
}
}
