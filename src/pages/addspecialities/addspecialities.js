var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ProfilePage } from '../../pages/profile/profile';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the AddspecialitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddspecialitiesPage = /** @class */ (function () {
    function AddspecialitiesPage(navCtrl, navParams, appsetting, http, alertCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.arr = [];
        alert('ioioio');
    }
    AddspecialitiesPage.prototype.Addspeciality = function (speciality) {
        var _this = this;
        console.log(speciality.value);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new RequestOptions({ headers: headers });
        this.srcImage = this.arr[0].image;
        this.srcImage1 = this.arr[1].image;
        this.srcImage2 = this.arr[2].image;
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid,
            specialties_product: speciality.value.specialtiesproduct,
            add_ingredients: speciality.value.addingredients,
            specialities_product_image1: this.srcImage,
            specialities_product_image2: this.srcImage1,
            specialities_product_image3: this.srcImage2
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'add_specialties', serialized, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.presentConfirm('Specialities added successfully.<br>You want to add another?');
                //this.navCtrl.push(TabsPage)
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddspecialitiesPage.prototype.presentConfirm = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(ProfilePage);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        _this.data = {
                            'specialtiesproduct': ' ',
                            'addingredients': ' ',
                        };
                        console.log('Neelanshi');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    AddspecialitiesPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new RequestOptions({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.loading.present();
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.srcImage =imageUri;
                            _this.arr.push({ 'image': imageUri });
                            alert(JSON.stringify(_this.arr));
                            //this.imgTosend = imageUri;
                            // this.loading.dismiss();
                            alert('camera working');
                            //             var postdata = {
                            //              user_id: userid,
                            //              profile_picture: imageUri
                            //            };
                            //            alert(JSON.stringify(postdata));
                            //            console.log(postdata);
                            //            var serialized = this.serializeObj(postdata);
                            //             var Loading = this.loadingCtrl.create({
                            //   spinner: 'bubbles',
                            //   cssClass: 'loader'
                            // });
                            // Loading.present().then(() => {
                            //this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
                            //              // Loading.dismiss();
                            //
                            // alert(JSON.stringify(data));
                            //              console.log(data)
                            //              alert("saving image")
                            //
                            //            },(err)=>{
                            //              alert(JSON.stringify(err))
                            //            })
                        }, function (err) {
                            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            //            this.srcImage=imageData;
                            _this.arr.push({ 'image': imageData });
                            alert(JSON.stringify(_this.arr));
                            // /	this.imgTosend = imageData;
                            // this.loading.dismiss();
                            //             var postdata = {
                            //              user_id: userid,
                            //              profile_picture: imageData
                            //            };
                            //            alert(postdata)
                            //            var serialized = this.serializeObj(postdata);
                            //
                            //            this.http.post(this.appsetting.myGlobalVar +'user_profile_pic', postdata).map(res => res.json()).subscribe(data => {
                            //              //this.Loading.dismiss();
                            //
                            //              console.log(data)
                            //              alert("saving image")
                            //
                            //            },(err)=>{
                            //              alert(' api error');
                            //              console.log(JSON.stringify(err))
                            //              alert(JSON.stringify(err))
                            //            })
                            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
                            //alert('error');
                            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    AddspecialitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddspecialitiesPage');
    };
    AddspecialitiesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddspecialitiesPage.prototype.home = function () {
        this.navCtrl.push(HomePage);
    };
    AddspecialitiesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-addspecialities',
            templateUrl: 'addspecialities.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            Appsetting,
            Http,
            AlertController,
            ActionSheetController,
            Camera,
            LoadingController])
    ], AddspecialitiesPage);
    return AddspecialitiesPage;
}());
export { AddspecialitiesPage };
//# sourceMappingURL=addspecialities.js.map