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
   Productofficialtosendprice:any;
   tagss =[];
     tags:any;
     bit: number = 0;
     imgarr:any=[];
     suggestions:any=[];
 servicecookathome:any;
 servicecookatchef:any;
 attributes:any=[];
 cuisiness:any=[];
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
//   alert('ok');
   this.getcommision();
   this.gettags();
     this.getattributes();
   this.getcuisine();
 this.data.discount = '0';
 
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
getattributes(){
        let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
     this.http.get(this.appsetting.myGlobalVar + 'attribute/all').map(res => res.json()).subscribe(ress=> {
         console.log(ress);
         for(var t =0; t<ress.data.length;t++){
             this.attributes.push(ress.data[t]);
         }
         console.log(this.attributes);
         this.data.attribute ='New Year Spacial'
     })  
}
getcuisine(){
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
  
     this.http.get(this.appsetting.myGlobalVar + 'Cuisine/all').map(res => res.json()).subscribe(ress1 => {
         console.log(ress1.data);
         for(var u =0; u<ress1.data.length; u++){
             this.cuisiness.push(ress1.data[u]);
         }
         this.data.cuisine = 'Spanish'
         console.log(this.cuisiness);
     })  
}

commas(price){
      this.Productofficialtosendprice = price;
       this.Productofficialtosendprice = this.Productofficialtosendprice.replace(/,/g, "");
    var Price:any;
    console.log(price.length)
    price = price.replace(/,/g, "")
    console.log(price);
        this.data.productprice = this.data.productprice.replace(/,/g, "");
        console.log(this.data.productprice);
      Price = this.data.productprice.split('')
          console.log(Price);
           var str = price;
    var n = str.includes(".");
          if(n == false){
          if(price.length == 4){
     this.data.productprice = Price[0]+','+Price[1]+''+Price[2]+''+Price[3];
     console.log(this.data.productprice);  
 } else if(price.length == 5){ 
     this.data.productprice = Price[0]+''+Price[1]+','+Price[2]+''+Price[3]+''+Price[4];
      console.log(this.data.productprice)
} else if(price.length == 6){ 
     this.data.productprice = Price[0]+''+Price[1]+''+Price[2]+','+Price[3]+''+Price[4]+''+Price[5];
      console.log(this.data.productprice)
  }
    else if(price.length == 7) {
     this.data.productprice = Price[0]+','+Price[1]+''+Price[2]+''+Price[3]+','+Price[4]+''+Price[5]+''+Price[6];
      console.log(this.data.productprice)
}
 else if(price.length == 8){ 
     this.data.productprice = Price[0]+''+Price[1]+','+Price[2]+''+Price[3]+''+Price[4]+','+Price[5]+''+Price[6]+''+Price[7];
      console.log(this.data.productprice)
 }
 else if(price.length == 9){ 
     this.data.productprice = Price[0]+''+Price[1]+''+Price[2]+','+Price[3]+''+Price[4]+''+Price[5]+','+Price[6]+''+Price[7]+''+Price[8];
      console.log(this.data.productprice)
 }
 else if(price.length == 10){ 
     this.data.productprice = Price[0]+','+Price[1]+''+Price[2]+''+Price[3]+','+Price[4]+''+Price[5]+''+Price[6]+','+Price[7]+''+Price[8]+''+Price[9];
      console.log(this.data.productprice)
 }
 else if(price.length == 11){ 
     this.data.productprice = Price[0]+''+Price[1]+','+Price[2]+''+Price[3]+''+Price[4]+','+Price[5]+''+Price[6]+''+Price[7]+','+Price[8]+''+Price[9]+''+Price[10];
      console.log(this.data.productprice)
 }
          }else{
       var  Price1 = this.data.productprice.split('.')
          console.log(Price1[0])
            price = Price1[0].split('');
            console.log(price);
            if(price.length == 4){
     this.data.productprice = Price[0]+','+Price[1]+''+Price[2]+''+Price[3];
     console.log(this.data.productprice);  
 } else if(price.length == 5){ 
     this.data.productprice = Price[0]+''+Price[1]+','+Price[2]+''+Price[3]+''+Price[4];
      console.log(this.data.productprice)
} else if(price.length == 6){ 
     this.data.productprice = Price[0]+''+Price[1]+''+Price[2]+','+Price[3]+''+Price[4]+''+Price[5];
      console.log(this.data.productprice)
  }
    else if(price.length == 7) { 
     this.data.productprice = Price[0]+','+Price[1]+''+Price[2]+''+Price[3]+','+Price[4]+''+Price[5]+''+Price[6];
      console.log(this.data.productprice)
}
 else if(price.length == 8){ 
     this.data.productprice = Price[0]+''+Price[1]+','+Price[2]+''+Price[3]+''+Price[4]+','+Price[5]+''+Price[6]+''+Price[7];
      console.log(this.data.productprice)
 } 
                
          }
    
}
onKeydown(event) {
  if (event.key === "a") {
    console.log(event);
  }
}

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
     var pprice:any=0;
     var PPrice:any=[];
     pprice = this.data.productprice.replace(/,/g, "");
  console.log(this.Productofficialtosendprice)
     var x = (this.commision/100)*parseFloat(this.Productofficialtosendprice);
     
     console.log(x);
    x = Number((x).toFixed(2));
   

    this.data.rafahoprice = x.toLocaleString('en')
    console.log(this.data.rafahoprice);
    var z = this.data.rafahoprice.replace(/,/g, "");
   var y = pprice-z;
     this.data.chefrecieved = y.toLocaleString('en')
//
//     var rafhoprice = this.data.rafahoprice;
//     console.log(rafhoprice)
//    rafhoprice = rafhoprice.replace(/,/g, "")
//        this.data.rafahoprice = this.data.rafahoprice.replace(/,/g, "");
//        console.log(this.data.rafahoprice);
//      PPrice = this.data.rafahoprice.split('')
//          console.log(PPrice);
//           var str1 = rafhoprice;
//           console.log(str1);
//    var na = str1.includes(".");
//          if(na == false){
//          if(rafhoprice.length == 4){
//    this.data.rafahoprice = PPrice[0]+','+PPrice[1]+''+PPrice[2]+''+PPrice[3];
//     console.log(  this.data.rafahoprice);  
// } else if(rafhoprice.length == 5){ 
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4];
//      console.log(  this.data.rafahoprice)
//} else if(rafhoprice.length == 6){ 
//    this.data.rafahoprice = PPrice[0]+''+PPrice[1]+''+PPrice[2]+','+PPrice[3]+''+PPrice[4]+''+PPrice[5];
//      console.log(  this.data.rafahoprice)
//  }
//    else if(rafhoprice.length == 7) { 
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+','+PPrice[5]+''+PPrice[6];
//      console.log(  this.data.rafahoprice)
//}
// else if(rafhoprice.length == 8){
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+','+PPrice[5]+''+PPrice[6]+''+PPrice[7];
//      console.log(this.data.rafahoprice)
// }
// else if(rafhoprice.length == 9){
//    this.data.rafahoprice = PPrice[0]+''+PPrice[1]+''+PPrice[2]+','+PPrice[3]+''+PPrice[4]+''+PPrice[5]+','+PPrice[6]+''+PPrice[7]+''+PPrice[8];
//      console.log(this.data.rafahoprice)
// }
// else if(rafhoprice.length == 10){ 
//     this.data.rafahoprice = PPrice[0]+','+PPrice[1]+''+PPrice[2]+''+PPrice[3]+','+PPrice[4]+''+PPrice[5]+''+PPrice[6]+','+PPrice[7]+''+PPrice[8]+''+PPrice[9];
//      console.log(this.data.rafahoprice)
// }
// else if(rafhoprice.length == 11){ 
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+','+PPrice[5]+''+PPrice[6]+''+PPrice[7]+','+PPrice[8]+''+PPrice[9]+''+PPrice[10];
//      console.log(this.data.rafahoprice)
// }
//          }else{
//       var  Price1 = this.data.rafahoprice.split('.')
//          console.log(Price1[0])
//          console.log(Price1[1]);
//            rafhoprice = Price1[0].split('');
//            console.log(rafhoprice);
//              if(rafhoprice.length == 1){
//    this.data.rafahoprice = str1;
//     console.log(  this.data.rafahoprice);  
// }
//   if(rafhoprice.length == 2){
//    this.data.rafahoprice = str1;
//     console.log(  this.data.rafahoprice);  
// }
//   if(rafhoprice.length == 3){
//    this.data.rafahoprice = str1;
//     console.log(  this.data.rafahoprice);  
// }
//        if(rafhoprice.length == 4){
//    this.data.rafahoprice = PPrice[0]+','+PPrice[1]+''+PPrice[2]+''+PPrice[3]+'.'+Price1[1];
//     console.log(  this.data.rafahoprice);  
// } else if(rafhoprice.length == 5){ 
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+'.'+Price1[1];
//      console.log(  this.data.rafahoprice)
//} else if(rafhoprice.length == 6){ 
//    this.data.rafahoprice = PPrice[0]+''+PPrice[1]+''+PPrice[2]+','+PPrice[3]+''+PPrice[4]+''+PPrice[5]+'.'+Price1[1];
//      console.log(  this.data.rafahoprice)
//  }
//    else if(rafhoprice.length == 7) { PPrice = this.data.productprice.split('')
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+','+PPrice[5]+''+PPrice[6]+'.'+Price1[1];
//      console.log(  this.data.rafahoprice)
//}
// else if(rafhoprice.length == 8){ PPrice = this.data.productprice.split('')
//     this.data.rafahoprice = PPrice[0]+''+PPrice[1]+','+PPrice[2]+''+PPrice[3]+''+PPrice[4]+','+PPrice[5]+''+PPrice[6]+''+PPrice[7]+'.'+Price1[1];
//      console.log(this.data.rafahoprice)
// }
////                
//          }

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
      if(product.value.productprice.includes(',')){
         product.value.productprice = product.value.productprice.replace(/,/g,"");
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
    product_image0: 'uihiuiu',
    product_image1:this.srcImage1,
     product_image2:this.srcImage2,
       id: userid,
       cuisine:this.data.cuisine,
       attribute:this.data.attribute,
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
       spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
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
