import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController} from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import{ EditstaffPage}from '../editstaff/editstaff';
import{ ExtrastaffPage}from '../extrastaff/extrastaff';
import {ProfilePage} from '../profile/profile';
/**
/**
 * Generated class for the StafflistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stafflist',
  templateUrl: 'stafflist.html',
})
export class StafflistPage {
 array:any;
  public data1: any = ''
  public data2: any = ''
  public data3: any = ''
  public data4: any = ''
  public data5: any = ''
   proffile1: any;
    proffile2: any;
     proffile3: any;
      proffile4: any;
       proffile5: any;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
       private loadingCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
  this.stafflist();
   }
     add(){
      this.navCtrl.push(ExtrastaffPage);
  }
 stafflist(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id: userid
    };
    var serialized = this.serializeObj(postdata);
    // this.loading.dismiss();
    var Loading = this.loadingCtrl.create({
               spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
        });
      console.log(postdata);
        Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data1 => {
        Loading.dismiss();
           if (data1.data) {
         console.log(data1.data.extra_staffs);
        this.array = data1.data.extra_staffs
        console.log(this.array);
        
     
      }
        
        localStorage.removeItem('Extrastaff');
//         localStorage.removeItem('Extrastaff2');
//          localStorage.removeItem('Extrastaff3');
//           localStorage.removeItem('Extrastaff4');
//            localStorage.removeItem('Extrastaff5');
        
    },(err)=>{
        let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
      Loading.dismissAll();
    });  })
 }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StafflistPage');
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
  backtostafflist(){
      this.navCtrl.push(ProfilePage);
  }
   ndelete(del){
        
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
//    var options = new RequestOptions({ headers: headers });
    
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid+','+del)
    var body = {
      user_id: userid,
      staff_id: del
      
    };
    let options = new RequestOptions({ 
    body: body,
    method: RequestMethod.Delete
  });
//    console.log(postdata);
//    var serialized = 'user_id=5a33981e31120335884ecb12&staff_id=5a3398dc31120335884ecb13';
//    console.log(serialized);
    this.http.request('http://rafao.us-west-2.elasticbeanstalk.com/api/extra_staff/?',options).map(res => res.json()).subscribe(data1 => {
     console.log(data1);
   
     if(data1.status==true){
           this.ToastMsg(data1.message);
           this.stafflist();
           
     }
//     this.navCtrl.push(StafflistPage);
 });
          }
        }
      ]
    });
    alert.present();
  
  }
   ToastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
edit(dat){
    
    localStorage.setItem('Extrastaff',JSON.stringify(dat));
    this.navCtrl.push(EditstaffPage);
}
//edit1(){
//   localStorage.setItem('Extrastaff2',JSON.stringify(this.array[0][1]));
//    this.navCtrl.push(EditstaffPage);
//}
//edit2(){
//     localStorage.setItem('Extrastaff3',JSON.stringify(this.array[0][2]));
//    this.navCtrl.push(EditstaffPage);
//}
//edit3(){
//   localStorage.setItem('Extrastaff4',JSON.stringify(this.array[0][3]));
//    this.navCtrl.push(EditstaffPage);
//}
//edit4(){
//  localStorage.setItem('Extrastaff5',JSON.stringify(this.array[0][4]));
//    this.navCtrl.push(EditstaffPage);
//}
}
