import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController } from 'ionic-angular';
import { AddreferencePage } from '../addreference/addreference';
import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';
// import { Device } from '@ionic-native/device';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ProcessingformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-processingform',
  templateUrl: 'processingform.html',
})
export class ProcessingformPage {
public bit:boolean = false;
  public data:any = {};
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
  
     public appsetting : Appsetting,
    public http: Http,
    // private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController) {
//      alert('neelanshiiii');
      
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

         if(data1.data.alternative_phone && data1.data.responsible_contact_number){
 console.log(data1.data.alternative_phone.length);
    var str = data1.data.alternative_phone;
     var str1 = data1.data.responsible_contact_number;
    var res = str.substring(0, 3);
     var res1 = str.substring(3, 6);
      var res2 = str.substring(6,10);
      //  var res3 = str.substring(9,12);
       /************************* */
        var res1 = str.substring(0, 3);
     var res11 = str.substring(3, 6);
      var res21 = str.substring(6,10);
      
   data1.data.alternative_phone = res+'-'+res1+'-'+res2;
     data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21;
      if (data1.data) {
        this.data.companyname = data1.data.company_name;
        this.data.position = data1.data.postion;
        this.data.phone = data1.data.alternative_phone;
        this.data.address = data1.data.home_address;
        this.data.contactname = data1.data.responsible_contact_name;
        this.data.contactnumber = data1.data.responsible_contact_number;
        this.data.occupationchef = data1.data.occupation_of_chef;
        this.data.workaddress = data1.data.chef_address;
      } 
    }
    })

  }
  chefadres(){
       this.AlertMsg('Is your home address is same as the work place address?');
       
       console.log(this.data.address);
  }
    AlertMsg(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.bit = true;
            if(this.data.workaddress !=''){
                this.data.workaddress = '';
            }
//            this.AlertMsg(msg) 
            // this.navCtrl.push(RegisterPage)
          }
        },
        {
          text: 'Yes',
          role: 'submit',
          handler: () => {
            console.log('Continue clicked');
            
            this.data.workaddress = this.data.address;
            //            this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    if(this.bit == true){
        
    }else{
    alert.present();
    }
  } 
  Processing(process){
    console.log(process);
    console.log(process.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if(process.value.phone && process.value.contactnumber){
  process.value.phone= process.value.phone.replace(/-/g,"");
    process.value.contactnumber= process.value.contactnumber.replace(/-/g,"");
  var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id:userid,
      company_name:process.value.companyname,
      position:process.value.position,
      phone_number:process.value.phone,
      home_address:process.value.address,
      chef_address:process.value.workaddress,
      responsible_contact_name:process.value.contactname,
      responsible_contact_number:process.value.contactnumber,
     occupation_of_chef:process.value.occupationchef,
     experience:process.value.experience
    
    }
    console.log(postdata);
    var Serialized = this.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
           spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
    Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar+'general_info_update',Serialized,options).map(res=>res.json()).subscribe(response=>{
      console.log(response);
      Loading.dismiss();
       this.navCtrl.push(AddreferencePage);
    })
  })
 }
}



  // addreference() {
  //   console.log('ionViewDidLoad ProcessingformPage');
  //   this.navCtrl.push(AddreferencePage);
  // }
  tabs(){
     this.navCtrl.push(TabsPage);
  }
  phonevalidation(phn){
    console.log(phn.length);
  if(phn.length==3){
    this.data.phone= this.data.phone +'-';
  } else if(phn.length==7){
   this.data.phone=this.data.phone+'-';
  }
 
  }

  contactvalidation(contactnumber){
    console.log(contactnumber.length);
  if(contactnumber.length==3){
    this.data.contactnumber= this.data.contactnumber +'-';
  } else if(contactnumber.length==7){
   this.data.contactnumber=this.data.contactnumber+'-';
  }
 
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessingformPage');
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
  back(){
    this.navCtrl.push(SigninPage);
  }

}
