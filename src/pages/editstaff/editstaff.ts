import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController ,LoadingController} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import{ StafflistPage}from '../stafflist/stafflist';
/**
 * Generated class for the EditstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editstaff',
  templateUrl: 'editstaff.html',
})
export class EditstaffPage {
 array:any;
 proffile:any;
staffid:any;
  public data: any = ''
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, public http: Http,
       private loadCtrl:LoadingController,
       public navParams: NavParams,private toastCtrl:ToastController) {
      this.editstaf();
  }
 editstaf(){

         if (localStorage.getItem('Extrastaff')) {
            
             this.array = JSON.parse(localStorage.getItem('Extrastaff'));
             console.log(this.array.phonenumber);
             
              
//            console.log(Extrastaff1);
        if(this.array.phonenumber){
 console.log(this.array.phonenumber.length);

//  var i;
//  for(i=0;i<data1.data.phone.length;i++){
//   if(i==2 && i==6 && i==11 ){
//     data1.data.phone=data1.data.phone+'-';}
//   }
    var str = this.array.phonenumber;
    var res = str.substring(0, 3);
     var res1 = str.substring(3, 6);
      var res2 = str.substring(6,10);
       
        // var res2 = str.substring(12,9);
  this.array.phonenumber=res+'-'+res1+'-'+res2;
    this.data = this.array;
        console.log(this.data);
        this.staffid=this.data._id;
        console.log(this.staffid)
       
//        this.proffile =this;
//        this.srcImage = this.proffile.user_image
       
      }}
      
     
        
    }  
 
 editstaffprofile(edit){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);
  
    
    console.log(this.staffid)
 if(edit.value.phonenumber){
  edit.value.phonenumber= edit.value.phonenumber.replace(/-/g,"");
    var postdata = {
      firstname: edit.value.firstname,
      lastname: edit.value.lastname,
      phonenumber: edit.value.phonenumber,
       profession: edit.value.profession,
       status:edit.value.status,
      //  alternatephone:edit.value.alternatephone,
      staff_id:this.staffid,
           id: userid
    }
    console.log(postdata);
    var serialized = this.serializeObj(postdata);
     var Loading = this.loadCtrl.create({
      spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'edit_staff_info', serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss();
        if (data.status == true) {
          // this.loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "Staff is updated",
            duration: 3000,
            position: 'middle'
          });
          toast.present();


          this.navCtrl.push(StafflistPage)
        } else{
             let toast = this.toastCtrl.create({
            message: "Staff is updated",
            duration: 3000,
            position: 'middle'
          });
          toast.present();


          this.navCtrl.push(StafflistPage)
        }
      },(err)=>{
           let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
           Loading.dismissAll();
      })}) }}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditstaffPage');
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
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
   phonevalidation(phn){
       
if(phn.length==3){
  this.data.phonenumber= this.data.phonenumber +'-';
} else if(phn.length==7){
 this.data.phonenumber=this.data.phonenumber +'-';
}

}
  backtostafflist(){
      this.navCtrl.push(StafflistPage);
  }

}
