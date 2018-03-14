import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular'
import { OrderlistPage } from '../orderlist/orderlist';
import { TabsPage } from '../tabs/tabs';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the ExtrastaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extrastaff',
  templateUrl: 'extrastaff.html',
})
export class ExtrastaffPage {
  // public extra = [1];
  public data: any = {};
  arr:any=[];
  // public staff:any = [];
  // public firstname = [];
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams,

    public appsetting: Appsetting,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
//    alert('extraff profile jdhfjk');
    //console.log(this.extra.length);
  }

  Extrastaff(staffdata) {
    console.log(staffdata.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    
    var options = new RequestOptions({ headers: headers });
    // if(staffdata.value.phone==' '){
    //   console.log(staffdata.value.phone);
    //   staffdata.value.phone= staffdata.value.phone.replace(' ','');}
    if(staffdata.value.phone){
      console.log('happy')
      staffdata.value.phone= staffdata.value.phone.replace(/-/g,"");
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id: userid,
      firstname: staffdata.value.firstname,
      lastname: staffdata.value.lastname,
      occupation: staffdata.value.occupation,
      phone: staffdata.value.phone,
    }
    console.log(postdata);
    this.arr.push(this.data);
    console.log(this.arr.length);
     if(this.arr.length==6){
        this.alert('Only 5 Extra Staff could be added');
    } else{
    
    var serialized = this.serializeObj(postdata);
    
    this.http.post(this.appsetting.myGlobalVar + 'add_staff_info', serialized, options)
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);

        if (response.status == true) {
          
          localStorage.setItem('Completed', 'complete');
          this.presentConfirm('Extra staff added successfully.<br>You want to add another?');
          //this.navCtrl.push(TabsPage)
        }
      }, (err) => {
        console.log(err);
      }) }
      }
    

  }
  presentConfirm(msg) {
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.push(TabsPage)
          }
        },
        {
          text: 'ADD',
          handler: () => {
            console.log(this.data);
            // this.data.firstname = ' ';
            // this.data.lastname = ' ';
            // this.data.occupation = ' ';
            // this.data.phone = ' ';
            this.data={'firstname':' ',
                      'lastname':' ',
                    'occupation':' ',
                    'phone':''};
            // this.data.vikki=' ';
            // this.data={};
            console.log('vikki');
            console.log(this.data);
            
            
          }
        }
      ]
    });
    alert.present();
  }

 alert(msg) {
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'submit',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.push(TabsPage)
          }
        }
       
        
      ]
    });
    alert.present();
  }

  phonevalidation(phn) {
    console.log(phn);
     console.log(phn.length);
    if (phn.length == 3) {
      this.data.phone = this.data.phone + '-';
    } else if (phn.length == 7) {
      this.data.phone = this.data.phone + '-';
    }
    // else if (phn.value.phone.length == 12) {
    //   phn.value.phone = phn.value.phone + '-';
    // }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Orderlist');
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
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  // tabs() {

  //   this.navCtrl.push(TabsPage);
  // }
  orderlist() {
    this.navCtrl.push(OrderlistPage);
  }

}
