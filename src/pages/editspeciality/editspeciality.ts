import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, ModalController} from 'ionic-angular';
import {ProcessingformPage} from '../processingform/processingform';
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import {Appsetting} from '../../providers/appsetting';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {IonTagsInputModule} from "ionic-tags-input";
import {RlTagInputModule} from 'angular2-tag-input';
import 'rxjs/add/operator/map';
import {Device} from '@ionic-native/device';
import {ProductlistPage} from '../productlist/productlist';
import {AddproductPage} from '../addproduct/addproduct';
import {ActionSheetController} from 'ionic-angular';
import {SpecialitylistsPage} from '../specialitylists/specialitylists';

/**
 * Generated class for the EditspecialityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-editspeciality',
    templateUrl: 'editspeciality.html',
})
export class EditspecialityPage {
    specialitydetails: any = [];
    public data: any = [];
    srcImage: any;
    srcImage1: any;
    srcImage2: any;
    imgarr: any = [];
    bit: any;
    arr: any = [];
    constructor(public navCtrl: NavController,
        public toastCtrl: ToastController,
        public navParams: NavParams,
        public geolocation: Geolocation,
        public nativeGeocoder: NativeGeocoder,
        public appsetting: Appsetting,
        public http: Http,
        public tagsinput: RlTagInputModule,
        private camera: Camera,
        private device: Device,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public modalCtrl: ModalController) {
        this.getdata();
    }
    backtospec() {
        this.navCtrl.push(SpecialitylistsPage);
    }
    getdata() {
        this.specialitydetails = JSON.parse(localStorage.getItem('Specialitytoedit'));
        console.log(this.specialitydetails);
        //  this.data.specialtiescuisine = this.specialitydetails.cuisine
        this.data.specialtiesproduct = this.specialitydetails.specialties_product
        this.data.addingredients = this.specialitydetails.add_ingredients
         this.imgarr[0]=this.specialitydetails.specialities_product_image1
      this.srcImage = this.specialitydetails.specialities_product_image1;
       if(this.specialitydetails.specialities_product_image2){
  this.srcImage1 = this.specialitydetails.specialities_product_image2;
    this.imgarr[1]=this.specialitydetails.specialities_product_image2
  }else{
       this.srcImage1=''
  }
   if(this.specialitydetails.specialities_product_image3){
  this.srcImage2 = this.specialitydetails.specialities_product_image3;
   this.imgarr[2]=this.specialitydetails.specialities_product_image3
  }else{
      this.srcImage2 =''
  }

    }
    Editspeciality(speciality) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});

        console.log(this.imgarr);
       if ((this.srcImage == undefined)||(this.srcImage == this.imgarr[0])){
        this.srcImage = '';
    }
     if ((this.srcImage1 == undefined)||(this.srcImage1 == this.imgarr[1])){
//         alert('same h 1');
        this.srcImage1 = '';
    }
     if ((this.srcImage2 == undefined)||(this.srcImage2 == this.imgarr[2])){
//           alert('same h 2');
        this.srcImage2= '';
    }
        console.log(this.srcImage, this.srcImage1, this.srcImage2);
        var postdata = {
            specialties_id: this.specialitydetails._id,
            specialties_product: this.data.specialtiesproduct,
            add_ingredients: this.data.addingredients,
            specialities_product_image1: this.srcImage,
            specialities_product_image2: this.srcImage1,
            specialities_product_image3: this.srcImage2
        }
        console.log(postdata);
        var sserialized = this.serializeObj(postdata);
         var Loading = this.loadingCtrl.create({
     spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/image/icons3.gif'>",
    dismissOnPageChange:true
    });
    Loading.present().then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'users/edit_specialties', sserialized, options).map(res => res.json()).subscribe(response1 => {
            console.log(response1);
            Loading.dismiss();
            if (response1.status == true) {
                let toast = this.toastCtrl.create({
                    message: "Speciality is updated",
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                this.navCtrl.push(SpecialitylistsPage);
            }
        }) })
    }
    CameraAction() {
        console.log('opening');
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
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

    }

    public chooseImage(Type) {
        const options: CameraOptions = {


            quality: 10,
            sourceType: Type,
            targetWidth: 767,
            targetHeight: 600,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.arr.push({'image': imageData});
            //                  alert(JSON.stringify(this.arr));
                          if ((this.srcImage1 == "")&&(this.srcImage2 == "")){
                    
                  this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[0].image;
                   
              }else if(this.srcImage2 == ""){
        
                   this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[1].image;
              }else{
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
//                  this.SrcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
    }


            //console.log(this.base64Image);

        }, (err) => {
            // Handle error
            console.log(err);
        });
    }
    AlertMsg1(msg) {
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
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad EditspecialityPage');
    }

}
