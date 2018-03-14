
import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,ModalController } from 'ionic-angular';
import { ProcessingformPage } from '../processingform/processingform';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {IonTagsInputModule} from "ionic-tags-input";  
import {RlTagInputModule} from 'angular2-tag-input';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import { ProductlistPage } from '../productlist/productlist';
import { AddproductPage } from '../addproduct/addproduct';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the EditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class EditproductPage {
productdetails:any;
 public data:any = [];
 tag:any=[];
 ttag:any=[];
 tagss:any=[];
 str2:any=[];
arr:any=[];
imgarr:any=[];
 str1:any=[];
 SrcImage:any;
 srcImage:any;
 commision:any=[];
  srcImage1:any;
   suggestions:any=[];
   srcImage2:any;
   
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public appsetting : Appsetting,
    public http: Http,
    public tagsinput: RlTagInputModule,
     private camera: Camera,
    private device: Device,
        public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
   public modalCtrl: ModalController) {
   this.getdata();
   this.getcommision();
    this.gettags();
   alert('new1');
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
  backtopro(){
      this.navCtrl.push(ProductlistPage)
  }
getcommision(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
//    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
     this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(res => res.json()).subscribe(data1 => {
         console.log(data1.data.commision_per_product);
         this.commision= data1.data.commision_per_product;
          this.commisioncal1();
     })
}
 commisioncal(){
     var x = (this.commision/100)*this.data.productprice;
     
     console.log(x);
     this.data.rafahoprice = x;
   
     this.data.chefrecieved = this.data.productprice-this.data.rafahoprice;
     
    
//      console.log( this.data.productprice);
 }
  commisioncal1(){
      console.log(this.commision);
     this.data.productprice = this.productdetails.product_price
     var x1 = (this.commision/100)*this.productdetails.product_price;
     
     console.log(x1);
     this.data.rafahoprice = x1;
   console.log( this.data.rafahoprice);
     this.data.chefrecieved = this.productdetails.product_price-this.data.rafahoprice;
     console.log (this.data.chefrecieved)
     
    
//      console.log( this.data.productprice);
 }
    isReadonly() {
    return this.isReadonly;   //return true/false 
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
getdata(){
  this.productdetails =JSON.parse(localStorage.getItem('Producttoedit'));
  console.log(this.productdetails);
  this.str2 = this.productdetails.tags.split(',',this.productdetails.tags.length)
  console.log(this.str2);
   this.str1 = this.productdetails.tags.split(',',this.productdetails.product_ingredients.length)
  console.log(this.str1);

     console.log(this.tag);
     this.imgarr[0]=this.productdetails.product_image0
      this.SrcImage = this.productdetails.product_image0;
       if(this.productdetails.product_image1){
  this.srcImage1 = this.productdetails.product_image1;
    this.imgarr[1]=this.productdetails.product_image1
  }else{
       this.srcImage1=''
  }
   if(this.productdetails.product_image2){
  this.srcImage2 = this.productdetails.product_image2;
   this.imgarr[2]=this.productdetails.product_image2
  }else{
      this.srcImage2 =''
  }
   

    console.log(this.imgarr);
  if(this.productdetails.diet_restriction){
  if(this.productdetails.diet_restriction.startsWith("<")){
      console.log(this.productdetails.diet_restriction.startsWith("<"))
      this.productdetails.diet_restriction = this.productdetails.diet_restriction.replace(/<\/?[^>]+(>|$)/g, "");
  }}
   if(this.productdetails.product_description.startsWith("<")){
       console.log(this.productdetails.product_description.startsWith("<"));
      this.productdetails.product_description = this.productdetails.product_description.replace(/<\/?[^>]+(>|$)/g, "");
  }
//  if(this.productdetails.cooking_time_at_chef_place){
//      if(this.productdetails.cooking_time_at_chef_place.toString().length < 3){
//          console.log('im')
//          this.productdetails.cooking_time_at_chef_place =this.productdetails.cooking_time_at_chef_place+':00';
//      }
//       if(this.productdetails.cooking_time_at_user_home.toString().length< 3){
//           console.log('here')
//          this.productdetails.cooking_time_at_user_home =this.productdetails.cooking_time_at_user_home+':00';
//      }
//  }else{
//      this.productdetails.cooking_time_at_user_home = this.productdetails.coocking_time_at_user_home;
//      this.productdetails.cooking_time_at_chef_place = this.productdetails.coocking_time_at_chef_place;
//  }
  if(this.productdetails.take_away == 1){
      this.data.chefcook = 1;
  }else{
       this.data.chefcook = 0;
  }
  if(this.productdetails.cook_at_user_place == 1){
      this.data.clientcook = 1;
  }else{
       this.data.clientcook = 0;
  }
    if(this.productdetails.home_delivery == 1){
      this.data.home = 1;
  }else{
       this.data.home = 0;
  }
  
  this.data.productname=this.productdetails.product_name,
  this.data.productprice=this.productdetails.product_price,
  this.data.discount=this.productdetails.discount,
     this.data.cuisine = this.productdetails.cuisine,
  this.tag = this.str2;
   this.tagss = this.str1; 
  this.data.productdesc=this.productdetails.product_description,
  this.data.diet=this.productdetails.diet_restriction,
  this.data.minorder=this.productdetails.minimum_order,
  this.data.cookingatchef=this.productdetails.cooking_time_at_chef_place,
  this.data.cookingatclient=this.productdetails.cooking_time_at_user_home,
//  this.srcImage = this.productdetails.product_image0
  this.data.chefcook = true;
  }

 EditProduct(product){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    console.log(this.data.productprice);
    console.log(this.srcImage);
    console.log(this.SrcImage);
     var postdata1={
          tags:this.tag.toString()
      }
        var sserialized = this.serializeObj(postdata1);
       this.http.post(this.appsetting.myGlobalVar+'tags/addtags',sserialized,options).map(res=>res.json()).subscribe(response1=>{
           console.log(response1);
       })  
       console.log(this.imgarr);
       if ((this.SrcImage == undefined)||(this.SrcImage == this.imgarr[0])){
        this.SrcImage = '';
    }
     if ((this.srcImage1 == undefined)||(this.srcImage1 == this.imgarr[1])){
//           alert('same h 1');
        this.srcImage1 = '';
    }
     if ((this.srcImage2 == undefined)||(this.srcImage2 == this.imgarr[2])){
//           alert('same h 2');
        this.srcImage2= '';
    }
//        if(this.data.productprice.includes('.')){
//          console.log(true);
//      }else{
//          this.data.productprice = this.data.productprice+'.00'
//      }
    if(this.data.chefcook == true){
        this.data.chefcook =1;
    }else{
         this.data.chefcook =0;
    }
    
        if(this.data.clientcook == true){
        this.data.clientcook =1;
    }else{
         this.data.clientcook =0;
    }
    
        if(this.data.home == true){
        this.data.home =1;
    }else{
         this.data.home =0;
    }
    console.log(this.data.cookingatchef);
    console.log(this.data.cookingatclient);
    
      console.log(this.data.chefcook,this.data.clientcook,this.data.home)
        var postdata = {
product_image0:  this.SrcImage,
 product_image2: this.srcImage2,
product_image1: this.srcImage1,
product_id:this.productdetails._id,
product_name: this.data.productname,
discount: this.data.discount,
product_ingredients:this.tagss,
diet_restriction: this.data.diet,
product_description:this.data.productdesc,
cuisine:this.data.cuisine,
minimum_order:this.data.minorder,
cooking_time_at_chef_place:this.data.cookingatchef,
cooking_time_at_user_home:this.data.cookingatclient,
tags: this.tag,
product_price:this.data.productprice,
status:1,
  take_away:parseInt(this.data.chefcook) ,
cook_at_user_place:parseInt(this.data.clientcook),
home_delivery:parseInt(this.data.home)
    }
    console.log(postdata);
    var serialized = this.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
     spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
    Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'users/edit_product_data', serialized, options)
      .map(res => res.json())
      .subscribe(data => {
          Loading.dismiss();
        console.log(data);
        if (data.status == true) {
          // this.loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "Product is updated",
            duration: 3000,
            position: 'middle'
          });
          toast.present();


          this.navCtrl.push(ProductlistPage)
        } else{
             let toast = this.toastCtrl.create({
            message: "Product is updated",
            duration: 3000,
            position: 'middle'
          });
          toast.present();


          this.navCtrl.push(ProductlistPage)
        }
      },(err)=>{
      
      let toast = this.toastCtrl.create({
      message: 'Something went wrong',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
    
    Loading.dismissAll();
      });
      })
 }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
 datetime(pro){
     console.log(pro);
     
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
            targetWidth:767,
            targetHeight:600,
            sourceType: 1,
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
               if ((this.srcImage1 == "")&&(this.srcImage2 == "")){
                    
                  this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[0].image;
                   
              }else if(this.srcImage2 == ""){
        
                   this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[1].image;
              }else{
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
                  this.SrcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
    }
    this.arr='';
    this.arr=[];
//    this.imgarr.push(this.SrcImage);
//     this.imgarr.push(this.srcImage1);
//      this.imgarr.push(this.srcImage2);
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
                   if ((this.srcImage1 == "")&&(this.srcImage2 == "")){
                     
                  this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[0].image;
                   
              }else if(this.srcImage2 == ""){
             
                   this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[1].image;
              }else{
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
                  this.SrcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;}
               this.arr='';
                this.arr=[];
//            this.imgarr.push(this.SrcImage);
//     this.imgarr.push(this.srcImage1);
//      this.imgarr.push(this.srcImage2);
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
  onChange(val){
    console.log(val)
//    console.log(this.tag.toString())
//    this.tag = this.tag.toString();
//    console.log(this.tag);
  }
  onChanges(vali){
     console.log(vali)
//    console.log(this.tagss.toString())
//    this.tagss = this.tagss.toString();
//    console.log(this.tagss);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproductPage');
  }

}
