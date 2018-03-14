import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular'
import { HomePage } from '../home/home';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import {TabsPage} from '../../pages/tabs/tabs';
import {ProfilePage} from '../../pages/profile/profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the AddspecialitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addspecialities',
  templateUrl: 'addspecialities.html',
})
export class AddspecialitiesPage {
  public data: any = {};
  srcImage='';srcImage1='';srcImage2='';
   arr:any=[]
   array:any=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,
       public appsetting: Appsetting,
    public http: Http,
    public alertCtrl: AlertController,
     public toastCtrl: ToastController,
     public actionSheetCtrl: ActionSheetController,
       private camera: Camera,
    public loadingCtrl: LoadingController) {
//    alert('ioioio');
    console.log(this.arr.length);
  }
  Addspeciality(speciality) {
    console.log(speciality.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    
    var options = new RequestOptions({ headers: headers });
   
   
    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        if (this.srcImage1 == undefined){
           this.srcImage1='';
       }
          if (this.srcImage2 == undefined){
           this.srcImage2='';
       }
    var postdata = {
      id: userid,
      specialties_product: speciality.value.specialtiesproduct,
     add_ingredients: speciality.value.addingredients,
     speciality_cuisine:speciality.value.specialtiescuisine,
     specialities_product_image1:'jijio',
     specialities_product_image2: this.srcImage1,
     specialities_product_image3: this.srcImage2

    }
    console.log(postdata);
     this.array.push(this.data);
     console.log(this.array.length);
     if(postdata.specialities_product_image1){
    var serialized = this.serializeObj(postdata);
     var Loading = this.loadingCtrl.create({
      spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
    
      Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'add_specialties', serialized, options)
      .map(res => res.json())
      .subscribe(response => {
        console.log(response);
 Loading.dismiss();
        if (response.status == true) {
          
         
          this.presentConfirm('Specialities added successfully.<br>You want to add another?');
          //this.navCtrl.push(TabsPage)
        }
      }, (err) => {
        console.log(err);
        Loading.dismissAll();
      })
      }) }else{
        let toast = this.toastCtrl.create({
        message: 'Atleast one image have to be selected',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
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
            this.navCtrl.push(ProfilePage)
          }
        },
        {
          text: 'ADD',
          handler: () => {
            console.log(this.data);
           
            this.data={
                       'specialtiesproduct':' ',
                      'addingredients':' ',
                     'specialtiescuisine':' ',
                     'specialities_product_image1':'',
                     'specialities_product_image2':'',
                     'specialities_product_image3':''
                    };
         this.srcImage=''
             this.srcImage1=''
             this.srcImage2=''
         
            console.log('Neelanshi');
            console.log(this.data);
            console.log(this.srcImage, this.srcImage1, this.srcImage2);
            
            
          }
        }
      ]
    });
    alert.present();
  }
  
  CameraAction(){
    

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
             targetWidth:767,
            targetHeight:600,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
//            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                  //this.srcImage =imageUri;
                  this.arr.push({'image':imageUri});
//                  alert(JSON.stringify(this.arr));
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
    this.arr='';
    this.arr=[];
            
//            alert('camera working');
//            

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
            targetWidth:767,
            targetHeight:600,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
//            this.srcImage = 'data:image/jpeg;base64,' + imageData;
//            this.srcImage=imageData;
            this.arr.push({'image':imageData});
//                  alert(JSON.stringify(this.arr));
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
                 this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
                 this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
               this.arr='';
                this.arr=[];
            
//            alert('gallery working');
          }, (err) => {
            // this.loading.dismiss();
            //alert('error');
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
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddspecialitiesPage');
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
home(){
  this.navCtrl.push(HomePage);
}
}
