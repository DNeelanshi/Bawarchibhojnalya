import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,ModalController } from 'ionic-angular';
import { ProcessingformPage } from '../processingform/processingform';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FCM } from '@ionic-native/fcm';
import { Device } from '@ionic-native/device';
import { SigninPage } from '../signin/signin';
import{MapmodalPage}from '../mapmodal/mapmodal';
// import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
// import { DatePipe } from "@angular/common/src/pipes";
import * as moment from 'moment';
import { CountryPickerModule, CountryPickerService } from 'angular2-countrypicker'
// import { ModalController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//  declare var google;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  //  providers: [DatePipe]
})
export class RegisterPage {
    public countries: any[];
    phone_number;
  date: any;
  pass: boolean;
  public lat: number;
  loststaus:boolean =false;
  public Ctype = 'password';
  public iconname1 = 'eye';
  public long: number;
  public ptype = 'password';
  public iconname = 'eye';
   public showCpass:boolean = false;
  public showpass:boolean = false;
  public data:any = [];
  devicetoken:any;
  // user: FormGroup;
  constructor(
    public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public appsetting : Appsetting,
    private fcm: FCM,
    public http: Http,
    private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
   public modalCtrl: ModalController,
   private countryPickerService: CountryPickerService
   
    // private datePipe: DatePipe
  ) {
  this.phone_number = 32;
  this.countryPickerService.getCountries().subscribe(countries => {
  this.countries = countries;
  console.log(countries);
  });

  
    console.log('Device UUID is: updated' + this.device.uuid);
   // this.data.result='hggjgj';
   this.date = new Date();
   console.log(this.date);

//alert('update hogai');
//      fcm.getToken().then(token=>{
////          alert(token);
//          
//     this.devicetoken = token;
//     })
//     fcm.onTokenRefresh().subscribe(newtoken=>{
////         alert("new");
////         alert(newtoken)
//        console.log(newtoken);
//    })
//     fcm.onNotification().subscribe(data=>{
//  if(data.wasTapped){
//    console.log("Received in background");
//  } else {
//    console.log("Received in foreground");
//  };
//})

   console.log(this.devicetoken);
  }
     ngOnInit() {

    this.date = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.date);
    this.GetLocation();
 }




  Registration(register){
    console.log('registration');
    console.log(register.value);
//     alert(JSON.stringify(register.value));
    console.log(this.lat,this.long);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if (register.value.password.indexOf(' ') >= 0) {
      let toast = this.toastCtrl.create({
        message: 'Space not allowed in password',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }
    else if(register.value.password == register.value.cpassword) {
if(register.value.phone){
  register.value.phone= register.value.phone.replace(/-/g,"");


    var postdata = {
      first_name:register.value.firstname,
      last_name:register.value.lastname,
      birth_day:register.value.dob,
      gender:register.value.gender,
      phone:register.value.phone,
      emailid:register.value.email,
      password:register.value.password,
      lat:this.lat,
      long:this.long,
      address:register.value.result,
      role:'chef',
      device_token:this.devicetoken
    }
    console.log(postdata);
   
    var Serialized = this.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
      
    });
    Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar+'chefregistration',Serialized,options).map(res=>res.json()).subscribe(response=>{
      console.log(response);

      Loading.dismiss();
      if(response.status == true){
           this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
        if(localStorage.getItem('UserInfo')){
          localStorage.removeItem('UserInfo');
        }

    //   geolocation:null
    // };
        console.log(response.data._id);
        localStorage.setItem('UserInfo',JSON.stringify(response.data));
//        this.navCtrl.push(SigninPage);
      }else{
        this.AlertMsg1(response.message)
      }
    },(err)=>{
     this.AlertMsg1('Something went wrong')
        Loading.dismissAll();
    })
  })}
  } else{
     let alert = this.alertCtrl.create({
            title: 'Registration',
            subTitle: 'Password did not match',
      });
          alert.present();
          setTimeout(()=>alert.dismiss(),1500);
    }
  }

  /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
  GetLocation(){
        var Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
         Loading.present().then(() => {
    this.geolocation.getCurrentPosition().then((resp) => {
              console.log('latitude:'+resp.coords.latitude+'longitude:'+resp.coords.longitude);
              this.loststaus = true;
          setTimeout(() => {
    Loading.dismiss();
           }, 4000);



      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
      .then((result: NativeGeocoderReverseResult) => {
        // alert(JSON.stringify(result));
                 this.loststaus = true;
      if (result.subThoroughfare){
        this.data.result = result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            } else if (result.thoroughfare){
                 this.data.result = result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
            else {
                 this.data.result = result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
        //  alert(this.data.result +'Neelanshi');
              Loading.dismiss();
      }).catch((error: any) => console.log(error));
     }).catch((error) => {
       console.log('Error getting location', error);
       this.ToastMsg('Please enable your location');
       Loading.dismissAll();
     }); })
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
                  
                    showCPassword() {    
   console.log('showCpassword');   
    this.showCpass = !this.showCpass;   
     if(this.showCpass){    
       this.Ctype = 'text';  
           this.iconname1 = 'eye-off';  
             } else {    
               this.Ctype = 'password';   
                  this.iconname1 = 'eye';    }  }
  
 isReadonly() {
    return this.isReadonly;   //return true/false 
  }

backtosignin(){
    this.navCtrl.push(SigninPage);
  }

  openmapmodal() {
      if(this.loststaus == true){ let modal = this.modalCtrl.create(MapmodalPage);
    modal.onDidDismiss(data => { 
    this.data.result=data.address;
    console.log(this.data.result)
    console.log(data.lati)
    console.log(data.longi)
    this.lat = data.lati
    this.long = data.longi
  });
    modal.present();}else{
          this.ToastMsg('Please turn on your Location')
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
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            // this.navCtrl.push(RegisterPage)
          }
        },
        {
          text: 'Continue',
          role: 'submit',
          handler: () => {
            console.log('Continue clicked');
            this.navCtrl.push(SigninPage);
          }
        }
      ]
    });
    alert.present();
  }  
  AlertMsg1(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
              this.openmapmodal();
            console.log('ok clicked');
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
  process(){
  this.navCtrl.push(ProcessingformPage);
}
phonevalidation(phn){
  console.log(phn.length);
if(phn.length==3){
  this.data.phone= this.data.phone +'-';
} else if(phn.length==7){
 this.data.phone=this.data.phone+'-';
}

}
}