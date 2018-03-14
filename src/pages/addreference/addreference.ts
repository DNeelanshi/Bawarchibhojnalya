import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { ExtrastaffPage } from '../extrastaff/extrastaff';
import { Appsetting } from "../../providers/appsetting";
import { Http, Headers, RequestOptions } from '@angular/http';


/**
 * Generated class for the AddreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addreference',
  templateUrl: 'addreference.html',
})
export class AddreferencePage {
public data:any = {};
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
  
     public appsetting : Appsetting,
    public http: Http,
    // private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController
  ) {

    this.data.why ='select';
  }
extrastaff(){
   this.navCtrl.push(ExtrastaffPage);
}

  
getdata() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
   
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id: userid
    };
    console.log(postdata)
    
    var serialized = this.serializeObj(postdata);
    // this.loading.dismiss();
    this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data1 => {
      
      console.log(data1);
      if(data1.data.reference_phone_number){
        console.log(data1.data.reference_phone_number.length);
           var str = data1.data.reference_phone_number;
           //  var str1 = data1.data.responsible_contact_number;
           var res = str.substring(0, 3);
            var res1 = str.substring(3, 6);
             var res2 = str.substring(6,10);
              // var res3 = str.substring(9,12);
             
          data1.data.reference_phone_number=res+'-'+res1+'-'+res2;
           //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
              }
           

         if(data1.data.reference_phone_number1){
 console.log(data1.data.reference_phone_number1.length);
    var str = data1.data.reference_phone_number1;
    //  var str1 = data1.data.responsible_contact_number;
    var res = str.substring(0, 3);
     var res1 = str.substring(3, 6);
      var res2 = str.substring(6,9);
      //  var res3 = str.substring(9,12);
      
   data1.data.reference_phone_number1=res+'-'+res1+'-'+res2;
    //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
       }
       if(data1.data.reference_name1=='undefined' && data1.data.reference_phone_number1=='undefined' &&data1.data.relationship_with_reference1=='undefined'){
        data1.data.refrenshename1=''
        data1.data.refrenshenumber1=''
        data1.data.refrensherelation1=''
      }
     
      if (data1.data) {
        this.data.refrenshenumber = data1.data.reference_phone_number;
        this.data.refrenshename = data1.data.reference_name;
        this.data.refrensherelation = data1.data.relationship_with_reference;
        this.data.refrenshename1 = data1.data.reference_name1;
        this.data.refrenshenumber1 = data1.data.reference_phone_number1;
        this.data.refrensherelation1 = data1.data.relationship_with_reference1;
        this.data.about = data1.data.where_do_you_here_about;
        this.data.why = data1.data.whay_to_want_use_rafaho;


      }
    })

  }
  Processing(processing){
    console.log(processing.value);
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    console.log(processing.value);
     if(processing.value.refrenshenumber || processing.value.refrenshenumber1){
       if(  processing.value.refrenshenumber1!=null){ 
           processing.value.refrenshenumber1= processing.value.refrenshenumber1.replace(/-/g,"");
       }
  processing.value.refrenshenumber= processing.value.refrenshenumber.replace(/-/g,"");
  
    console.log('working');
       var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
      var refrenshe = {
      id:userid,
      reference_name:processing.value.refrenshename,
      reference_phone_number:processing.value.refrenshenumber,
      relationship_with_reference:processing.value.refrensherelation,
      reference_name1:processing.value.refrenshename1,
      reference_phone_number1:processing.value.refrenshenumber1,
      relationship_with_reference1:processing.value.refrensherelation1,
  
     where_from_here:processing.value.about,
    why:processing.value.why
  }

  console.log(refrenshe);
     
   var Serialized = this.serializeObj(refrenshe);
     var Loading = this.loadingCtrl.create({
      spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar+'refrence_info_update',Serialized,options).map(res=>res.json()).subscribe(response=>{
      console.log(response);
        //  console.log(response);
      Loading.dismiss();
       this.navCtrl.push(ExtrastaffPage);
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
  }
  
  phonevalidation(phone){
    console.log(phone);
  if(phone.length==3){
    this.data.refrenshenumber= this.data.refrenshenumber +'-';
  } else if(phone.length==7){
   this.data.refrenshenumber=this.data.refrenshenumber+'-';
  }

  }

  referencevalidation(refphone){
    console.log(refphone);
    if(refphone.length==3){
      this.data.refrenshenumber1= this.data.refrenshenumber1 +'-';
    } else if(refphone.length==7){
     this.data.refrenshenumber1=this.data.refrenshenumber1+'-';
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreferencePage');
    
    console.log('Neelanshi bhatnagar');
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
  
    this.getdata();
  }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}
