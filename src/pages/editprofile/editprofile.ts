import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Appsetting } from '../../providers/appsetting';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController, Loading } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { MapmodalPage } from '../mapmodal/mapmodal';
import * as moment from 'moment';
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  Loader: any;
  id; userid; srcImage; imgTosend;
  proffile: any;
  public lat: number;
  public long: number;
  locstatus:boolean = false;
   date:any;

  public data: any = ''
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    public appsetting: Appsetting,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private nativeGeocoder: NativeGeocoder, public modalCtrl: ModalController, ) {
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
     });
     Loading.present().then(() => {
    this.getdata();
    Loading.dismiss();
    })
     this.date = new Date();
  }
 
  getdata() {
//    var th=this;
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
      console.log(data1.data.latitude);
      console.log(data1.data.longitude);
      this.lat = data1.data.latitude;
      this.long = data1.data.longitude;
//      this.geolo(data1.data.latitude,data1.data.longitude);
    

        this.nativeGeocoder.reverseGeocode(parseFloat(data1.data.latitude), parseFloat(data1.data.longitude))
        .then((result: NativeGeocoderReverseResult) => {console.log(JSON.stringify(result))
      if (result.subThoroughfare){
          this.locstatus = true;
        this.data.geolocation = result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            } else if (result.thoroughfare){
                 this.data.geolocation = result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
            else {
                 this.data.geolocation = result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
            }
      })
        .catch((error: any) => console.log(error));
         if(data1.data.phone){
 console.log(data1.data.phone.length);

//  var i;
//  for(i=0;i<data1.data.phone.length;i++){
//   if(i==2 && i==6 && i==11 ){
//     data1.data.phone=data1.data.phone+'-';}
//   }
    var str = data1.data.phone;
    var res = str.substring(0, 3);
     var res1 = str.substring(3, 6);
      var res2 = str.substring(6,10);
       
        // var res2 = str.substring(12,9);
   data1.data.phone=res+'-'+res1+'-'+res2;
      if (data1.data) {
       
        this.proffile = data1.data
        this.srcImage = this.proffile.user_image
        this.data = this.proffile;
      } }
    })

  }

  edituserprofile(edit) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);

    if (edit.value.firstname == null) {
      edit.value.firstname = "";
    }
    if (edit.value.lastname == null) {
      edit.value.lastname = "";
    }
    if (edit.value.phone == null) {
      edit.value.phone = "";
    }

 if(edit.value.phone){
  edit.value.phone= edit.value.phone.replace(/-/g,"");
    this.data = {
      first_name: edit.value.firstname,
      last_name: edit.value.lastname,
      phone: edit.value.phone,
      address:edit.value.geolocation,
      dob:edit.value.dob,
      gender:edit.value.gender,
     
      lat:this.lat,
      long:this.long,
      id: userid
    }
    console.log(this.data);
    var serialized = this.serializeObj(this.data);
     var Loading = this.loadingCtrl.create({
       spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        Loading.dismiss()
        if (data.status == true) {
          // this.loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "Profile is updated",
            duration: 3000,
            position: 'middle'
          });
          toast.present();


          this.navCtrl.push(ProfilePage)
        }
      },(err)=>{
        let toast = this.toastCtrl.create({
            message: "Something went wrong",
            duration: 3000,
            position: 'middle'
          });
          toast.present();
            Loading.dismissAll()
      }) }) 
      }
  }

  CameraAction() {

    console.log('opening');
     let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    let actionsheet = this.actionSheetCtrl.create({

      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          // this.loading.present();
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            //this.imgTosend = imageUri;
            // this.loading.dismiss();
//            alert('camera working');
             var postdata = {
              user_id: userid,
              profile_picture: imageUri
            };
//            alert(JSON.stringify(postdata));
            console.log(postdata);
            var serialized = this.serializeObj(postdata);
    //             var Loading = this.loadingCtrl.create({
    //   spinner: 'bubbles',
    //   cssClass: 'loader'
    // });
    // Loading.present().then(() => {
this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
              // Loading.dismiss();

// alert(JSON.stringify(data));
              console.log(data)
//              alert("saving image")

            },(err)=>{
//              alert(JSON.stringify(err))
            })
    

          }, (err) => {
//            alert(JSON.stringify(err));
            // this.loading.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          //	alert("get Picture")
          // this.loading.present();

          const options: CameraOptions = {
            quality: 10,
            sourceType: 0,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageData;
            // /	this.imgTosend = imageData;
            // this.loading.dismiss();
           
             var postdata = {
              user_id: userid,
              profile_picture: imageData
            };
//            alert(postdata)
            var serialized = this.serializeObj(postdata);

            this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
              //this.Loading.dismiss();

              console.log(data)
//              alert("saving image")

            },(err)=>{
//              alert(' api error');
              console.log(JSON.stringify(err))
//              alert(JSON.stringify(err))
            })
//            alert('gallery working');
          }, (err) => {
            // this.loading.dismiss();
//            alert('error');
//            alert(JSON.stringify(err));
            // Handle error
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          actionsheet.dismiss();

        }
      }]
    });

    actionsheet.present();
  }
  // saveimage(img) {
  //   alert('image saving');
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  //   let options = new RequestOptions({ headers: headers });
  //   var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
  //   var postdata = {
  //     id: userid,
  //     image: img
  //   };
  //   alert(postdata)
  //   var serialized = this.serializeObj(postdata);
  //   this.http.post(this.appsetting.myGlobalVar + 'edit_user_info', serialized, options).map(res => res.json()).subscribe(data => {
  //     //this.Loading.dismiss();

  //     console.log(data)
  //     alert("saving image")

  //   })
  // }

  openmapmodal() {
      if(          this.locstatus == true){
           let modal = this.modalCtrl.create(MapmodalPage);
    modal.onDidDismiss(data => {
//      alert(data.address);
      this.data.geolocation = data.address;
      console.log(this.data.geolocation)
      console.log(data.lati)
      console.log(data.longi)
      this.lat = data.lati
      this.long = data.longi
    });
    modal.present();
      }else{
          let toast = this.toastCtrl.create({
            message: 'Please turn on your location',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
      }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
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
  profile() {
    this.navCtrl.push(ProfilePage);
  }
 phonevalidation(phn){
if(phn.length==3){
  this.data.phone= this.data.phone +'-';
} else if(phn.length==7){
 this.data.phone=this.data.phone+'-';
}

}
isReadonly() {
    return this.isReadonly;   //return true/false 
  }
 ngOnInit() {

    this.date = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.date);
   
 }

}