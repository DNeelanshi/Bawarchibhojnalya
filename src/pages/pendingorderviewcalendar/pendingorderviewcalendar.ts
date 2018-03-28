
import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { TabsPage } from '../tabs/tabs';
import { NeworderdatePage } from '../neworderdate/neworderdate';
import { CalenderPage } from '../calender/calender';

/**
 * Generated class for the PendingorderviewcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingorderviewcalendar',
  templateUrl: 'pendingorderviewcalendar.html',
})
export class PendingorderviewcalendarPage {
prodcts:any=[];
prodcts1:any=[];

userdata:any=[];
str:any;
total:any=0;
str1;str3;
str4;str5;
str6;

str2:any;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
       private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      public toastCtrl:ToastController, public http: Http) {
    
     this.userdetail();
  }
userdetail(){
//   alert('gjhgj');
     this.prodcts = JSON.parse(localStorage.getItem('PendingProductorders'))
     this.prodcts1 = this.prodcts.products
     this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
      this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
       this.str = this.prodcts.customer_address.split(",",  this.prodcts.customer_address.length);
    this.str1=this.str[0]+','+this.str[1]
    var len = this.str1.length+1;
this.str2 =  this.prodcts.customer_address.slice(len,  this.prodcts.customer_address.length);
//     this.str3 =  this.prodcts.booking_datetime.split(" ",  this.prodcts.booking_datetime.length);
//    this.str4=this.str3[1]
//    
//   this.str5 =  this.str4.split(":00.");
//   
//     console.log(this.str3[0]);
//     console.log(this.str5[0]);
          for(var k = 0;k<  this.prodcts1.length;k++){
              if( this.prodcts1[k].order_prefrence == 1){
                  this.prodcts1[k].order_prefrence ='Cook at Chef place'
              }else if( this.prodcts1[k].order_prefrence == 2){
                  this.prodcts1[k].order_prefrence ='Cook at Client Place'
              }else{
                  this.prodcts1[k].order_prefrence='Home Delivery'
              }
          }
     for(var i=0; i<this.prodcts1.length; i++){
         if(this.prodcts1[i].quantity == undefined){
             this.prodcts1[i].quantity = 0;
         }
      this.total = this.total+(this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
      }
     console.log(this.total);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
     
       var postdata1 = {
           id: this.prodcts.user_id
                         }
     var serialized = this.serializeObj(postdata1);
     var Loading = this.loadCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
     });
     Loading.present().then(() => {
       this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(response =>  {
           console.log(response);
           Loading.dismiss();
           this.userdata=response.data;
           
//           this.str = this.userdata.address.split(",", this.userdata.address.length);
//    this.str1=this.str[0]+','+this.str[1]
//    var len = this.str1.length+1;
//this.str2 = this.userdata.address.slice(len, this.userdata.address.length);



           
       },(err)=>{
      
       let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
           Loading.dismissAll();
       });
       
       })
}
accept(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
     
       var postdata1 = {
           order_id: this.prodcts._id,
           new_status:0
                        }
     
              let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Order Finished',
      buttons: [
        {
          text: 'Ok',
          role: 'save',
          handler: () => {
              var serialized = this.serializeObj(postdata1);
       this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(res => res.json()).subscribe(response =>  {
           console.log(response);
            console.log('Submit clicked');
            this.navCtrl.push(CalenderPage)})
          }
        },
         {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
//            this.navCtrl.push(TabsPage)
          }
        }
        
      ]
    });
    alert.present();
      
}
decline(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
     
       var postdata1 = {
           order_id: this.prodcts._id,
           new_status:5
                        }
     var serialized = this.serializeObj(postdata1);
       this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(res => res.json()).subscribe(response =>  {
           console.log(response);
            let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Order Declined',
      buttons: [
        {
          text: 'Ok',
          role: 'save',
          handler: () => {
            console.log('Submit clicked');
            
            this.navCtrl.push(CalenderPage)
          }
        }
        
      ]
    });
    alert.present();})
}
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
    ionViewDidLoad() {
    console.log('ionViewDidLoad PendingorderviewcalendarPage');
  }

}
