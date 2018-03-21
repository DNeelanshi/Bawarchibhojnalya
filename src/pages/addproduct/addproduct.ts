//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcriptionbillPage } from '../subcriptionbill/subcriptionbill';
//import { ModalController } from 'ionic-angular';
import {IonTagsInputModule} from "ionic-tags-input";  
import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,ModalController } from 'ionic-angular';
import { ProcessingformPage } from '../processingform/processingform';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {RlTagInputModule} from 'angular2-tag-input';
//import {KeyboardEvent} from '@angular/core';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import { SigninPage } from '../signin/signin';
//import { ng-tags-input } from '../build/ng-tags-input';
import { ProfilePage } from '../profile/profile';
import { ActionSheetController } from 'ionic-angular';
import {FormGroup,FormBuilder} from '@angular/forms';
/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',

})
export class AddproductPage {
    
 public data:any = [];
  commision:any;
  arr:any=[];
   tag = [];
   tagss =[];
     tags:any;
     bit: number = 0;
     imgarr:any=[];
     suggestions:any=[];
 servicecookathome:any;
 servicecookatchef:any;
 servicehomedelivery:any;
     taggs:any;
   srcImage;srcImage1;srcImage2;
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public appsetting : Appsetting,
    public http: Http,
    private formBuilder: FormBuilder,
     public taginput: IonTagsInputModule,
      public tagsinput: RlTagInputModule,
    public actionSheetCtrl: ActionSheetController,
      private camera: Camera,
    private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
   public modalCtrl: ModalController) {
   
   this.getcommision();
   this.gettags();
  }
gettags(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
//    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
     this.http.get(this.appsetting.myGlobalVar + 'tags/gettags').map(res => res.json()).subscribe(dataa1 => {
         console.log(dataa1.data);
         for(var t =0; t<dataa1.data.length;t++){
             this.suggestions.push(dataa1.data[t].tagname);
         }
         console.log(this.suggestions);
     })  
}
onKeydown(event) {
  if (event.key === "a") {
    console.log(event);
  }
}
//onKeydown(events,tagi){
//    alert(events);
//     console.log(tagi);
//      console.log(this.tag);
//      if(tagi.length > 8){
//            let toast = this.toastCtrl.create({
//      message: 'Only 8 tags can be added',
//      duration: 2000,
//      position: 'middle'
//    });
//    toast.present();
//          tagi.pop()
//     this.tag = tagi;
//     this.tag = tagi
//      }
//}
getcommision(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
//    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
     this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(res => res.json()).subscribe(data1 => {
         console.log(data1.data.commision_per_product);
         this.commision= data1.data.commision_per_product;
         
     })
}
//focus(hel,){
//    console.log(hel);
//}
 focus (element) {
     console.log(element);
//    console.log(element.srcElement.onkeypress);s
    
  };
 commisioncal(){
     var x = (this.commision/100)*this.data.productprice;
     
     console.log(x);
     this.data.rafahoprice = x;
   
     this.data.chefrecieved = this.data.productprice-this.data.rafahoprice;
     
    
//      console.log( this.data.productprice);
 }
onChange(val){
    console.log(val)
    
    console.log(this.tag.toString())
//    this.tags = this.tag.toString();
//    if(this.tags.length > 8){
//        
//    }
//    console.log(this.tags);
  }
  tagslength(tagg){
      console.log(tagg);
      console.log(this.tag);
      if(tagg.length > 8){
            let toast = this.toastCtrl.create({
      message: 'Only 8 tags can be added',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
          tagg.pop()
     this.tag = tagg;
     this.tag = tagg
      }
//       this.tag = tagg.toString();
  }
  onChanges(vali){
     console.log(vali)
    console.log(this.tagss.toString())
    this.taggs = this.tagss.toString();
    console.log(this.taggs);
  }

 AddProduct(product){
     
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id;
      console.log(this.commision);
      var postdata1={
          tags:this.tag.toString()
      }
        var sserialized = this.serializeObj(postdata1);
       this.http.post(this.appsetting.myGlobalVar+'tags/addtags',sserialized,options).map(res=>res.json()).subscribe(response1=>{
           console.log(response1);
       })  
       if (this.srcImage1 == undefined){
           this.srcImage1='';
       }
          if (this.srcImage2 == undefined){
           this.srcImage2='';
       }
      if(product.value.productprice.includes('.')){
          console.log(true);
      }else{
          product.value.productprice = product.value.productprice+'.00'
      }
      if(this.servicehomedelivery == undefined){
          this.servicehomedelivery =0;
      }
       if(this.servicecookatchef == undefined){
          this.servicecookatchef =0;
      }
       if(this.servicecookathome == undefined){
          this.servicecookathome =0;
      }
      console.log(this.servicecookathome,
 this.servicecookatchef,
 this.servicehomedelivery);
    var postdata = {
       product_name:product.value.productname,
      product_price:product.value.productprice,
      discount:product.value.discount,
      product_ingredients:this.tagss.toString(),
      product_description:product.value.productdesc,
       diet_restriction:product.value.diet,
      minimum_order:product.value.minorder,
      cooking_time_at_chef_place:product.value.cookingatchef,
    cooking_time_at_user_home:product.value.cookingatclient,
     tags: this.tag.toString(),
    status: 0,
    product_image0: this.srcImage,
    product_image1:this.srcImage1,
     product_image2:this.srcImage2,
       id: userid,
       cuisine:product.value.cuisine,
      device_token:this.device.uuid,
      take_away: this.servicecookatchef,
cook_at_user_place: this.servicecookathome,
home_delivery:this.servicehomedelivery
    }
    console.log(postdata);
    if(postdata.product_ingredients){
        if(postdata.tags){
   
        if ((postdata.take_away)||(postdata.cook_at_user_place)||(postdata.home_delivery)){
        if(postdata.product_image0){
     var Serialized = this.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
      spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
    
      Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar+'add_products',Serialized,options).map(res=>res.json()).subscribe(response=>{  

      Loading.dismiss();
      if(response.status == true){
      console.log(response);
        console.log(response.data._id);
        localStorage.setItem('UserInfo',JSON.stringify(response.data));
        this.presentConfirm('Products added successfully.<br>You want to add another?');
        
      }else{
        this.AlertMsg1(response.message)
      }
    } , (err) => {
        console.log(err);
         let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
        Loading.dismissAll();
      })
  })
    }else{
      let toast = this.toastCtrl.create({
        message: 'Atleast one image have to be selected',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  } 
    }else{
      let toast = this.toastCtrl.create({
        message: 'Atleast one Service needs to be selected',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  } }else{
      let toast = this.toastCtrl.create({
        message: 'Tags need to be filled',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
  }else{
      let toast = this.toastCtrl.create({
        message: 'Product Ingredients need to be filled',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }  
 }
 backtopro(){
     this.navCtrl.push(ProfilePage);
 }
 service(get){
     console.log(get);
     if(get == true){
       this.servicehomedelivery = 1;  
     }else if(get == undefined){
          this.servicehomedelivery = 0;
     }
    
 }
  service1(get1){
     console.log(get1);
       if(get1 == true){
        this.servicecookathome = 1;  
     }else if(get1 == undefined){
            this.servicecookathome = 0;
     }

 }
  service2(get2){
     console.log(get2);
      if(get2 == true){
        this.servicecookatchef = 1;  
     }else if(get2 == undefined){
        this.servicecookatchef = 0;
     }
 }
  backtolist(){
      this.navCtrl.push(ProfilePage);
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
            this.navCtrl.push(AddproductPage);
//            this.data={
//                       'productname':' ',
//                      'addingredients':' ',
//                     
//                    };
//         this.srcImage=''
//             this.srcImage1=''
//             this.srcImage2=''
         
            console.log('Neelanshi');
            console.log(this.data);
            
            
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
    let actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: () => {
                        console.log('camera clicked');
                        this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: () => {
                        console.log('Gallery clicked');
                        this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
          // this.loading.present();
//          const options: CameraOptions = {
//            quality: 8,
//            targetWidth:767,
//            targetHeight:600,
//            sourceType: 1,
//            correctOrientation: true,
//            allowEdit:true,
//            destinationType: this.camera.DestinationType.DATA_URL,
//            encodingType: this.camera.EncodingType.JPEG,
//            mediaType: this.camera.MediaType.PICTURE
//          }
//          this.camera.getPicture(options).then((imageUri) => {
////            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
//                  //this.srcImage =imageUri;
//               this.bit = this.bit + 1;
//            //alert(this.bit);
//            if (this.bit > 3) {
//                this.AlertMsg1('Only 3 images can be added');
//            } 
//                  this.arr.push({'image':imageUri});
////                  alert(JSON.stringify(this.arr));
//                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
//    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
//    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
//    this.imgarr.push(this.srcImage);
//     this.imgarr.push(this.srcImage1);
//      this.imgarr.push(this.srcImage2);
//    this.arr='';
//    this.arr=[];
//            
////            alert('camera working');
////            
//
//          }, (err) => {
////            alert(JSON.stringify(err));
//            // this.loading.dismiss();
//            console.log(err);
//          });
//        }
//      },
//      {
//        text: 'Gallery',
//        handler: () => {
//          console.log("Gallery Clicked");
//          this.chooseImage(1);
          //	alert("get Picture")
          // this.loading.present();

          
//          this.camera.getPicture(options).then((imageData) => {
////            this.srcImage = 'data:image/jpeg;base64,' + imageData;
////            this.srcImage=imageData;
//            this.arr.push({'image':imageData});
////                  alert(JSON.stringify(this.arr));
//                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
//                 this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
//                 this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
//                 this.imgarr.push(this.srcImage);
//     this.imgarr.push(this.srcImage1);
//      this.imgarr.push(this.srcImage2);
//               this.arr='';
//                this.arr=[];
//            
////            alert('gallery working');
//          }, (err) => {
//            // this.loading.dismiss();
//            //alert('error');
////            alert(JSON.stringify(err));
//            // Handle error
//          });
//        }
//      },
//      {
//        text: 'Cancel',
//        role: 'cancel',
//        handler: () => {
//          console.log('Cancel clicked');
//          actionsheet.dismiss();
//
//        }
//      }]
//    });
//
//    actionsheet.present();
  }
    public chooseImage(Type) {
        console.log(Type)
            const options: CameraOptions = {
             quality: 10,
            sourceType:Type,
             targetWidth:767,
            targetHeight:600,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.bit = this.bit + 1;
            //alert(this.bit);
            if (this.bit > 3) {
                this.AlertMsg1('You cannot upload more than 3 images');
            } else {
                 this.arr.push('data:image/jpeg;base64,' + imageData);
                this.imgarr.push(imageData);
                if(this.imgarr.length == 1){
                    this.srcImage = this.imgarr[0];
                }else{
                    this.srcImage1 = "";
                    this.srcImage2 = "";
                }
                if(this.imgarr.length == 2){
                    this.srcImage = this.imgarr[0];
                    this.srcImage1 = this.imgarr[1];
                }else{
                    this.srcImage2 = "";
                }
                 if(this.imgarr.length == 3){
                    this.srcImage = this.imgarr[0];
                    this.srcImage1 = this.imgarr[1];
                    this.srcImage2 = this.imgarr[2];
                }
                console.log(this.arr.length);

            }
            //console.log(this.base64Image);

        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }
  delimage(index){
      console.log(index);
      if (index == 0) {
          this.srcImage = ''
      }else if(index == 1){
          this.srcImage1 = ''
      }else{
           this.srcImage2 = ''
      }
     this.arr.splice(index);
       this.imgarr.splice(index);
      console.log('here'+this.arr);
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
            console.log('ok clicked');
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
   isReadonly() {
    return this.isReadonly;   //return true/false 
  }
subcriptionbill(){
  this.navCtrl.push(SubcriptionbillPage);
}
}
