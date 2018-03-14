webpackJsonp([44],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = (function () {
    function AccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsPage');
    };
    AccountsPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AccountsPage;
}());
AccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-accounts',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\accounts\accounts.html"*/'<!--\n  Generated template for the AccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Accounts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n  <ion-list>\n  <ion-item>\n    <ion-label stacked>TOTAL ACCOUMULATED BILLING </ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>BALANCE FOR SELECTED YEARS</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label stacked>BALANCE PER SELECTED MONTH</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>OUTSTANDING BALANCE</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n</ion-list>\n\n <div  style="text-align: center;">\n   <button ion-button full color="theme-header" style="display: block; margin: 0 auto;"(click)="home()">Continue</button>\n   </div>\n   \n\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\accounts\accounts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], AccountsPage);

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the OrderviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderviewPage = (function () {
    function OrderviewPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    OrderviewPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('Productorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        console.log(this.str3, this.str4);
        this.prodcts.customer_address = this.prodcts.customer_address.replace(/"/gi, '');
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //     this.str3 =  this.prodcts.booking_datetime.split(" ",  this.prodcts.booking_datetime.length);
        //    this.str4=this.str3[1]
        //      this.str5 =  this.str4.split(":00.");
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.prodcts1[0].order_prefrence);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                console.log('1');
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                console.log('2');
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                console.log('3');
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    OrderviewPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 2
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Accepted',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OrderviewPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OrderviewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    OrderviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderviewPage');
    };
    return OrderviewPage;
}());
OrderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderview',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\orderview\orderview.html"*/'<!--\n  Generated template for the OrderviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n       <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<ion-col col-4>\n      <div class="decline">\n       <button ion-button color="secondary" (click)="accept()">Accept</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p end><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\orderview\orderview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], OrderviewPage);

//# sourceMappingURL=orderview.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeworderdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orderviewcalendar_orderviewcalendar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelorderviewcalendar_cancelorderviewcalendar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pendingorderviewcalendar_pendingorderviewcalendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historyorderviewcalendar_historyorderviewcalendar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Component } from '@angular/core';







/**
 * Generated class for the NeworderdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NeworderdatePage = (function () {
    function NeworderdatePage(navCtrl, navParams, platform, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.chef = [];
        this.Orders = [];
        this.earned = 0;
        this.notavail = 0;
        this.notavail1 = 0;
        this.notavail2 = 0;
        this.notavail3 = 0;
        this.activeorders = [];
        this.pendingorders = [];
        this.historyorders = [];
        this.canceledorders = [];
        this.pet = "ACTIVEORDER";
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.getdata();
            setTimeout(function () {
                Loading.dismiss();
            }, 3000);
        });
        //       this.activeorder();?
    }
    //      doRefresh(refresher) {
    //    console.log('Begin async operation', refresher);
    //
    //    setTimeout(() => {
    ////        this.getdata();
    //   
    //      console.log('Async operation has ended');
    //      refresher.complete();
    //    }, 3000);
    //  }
    NeworderdatePage.prototype.getdata = function () {
        this.chef = JSON.parse(localStorage.getItem('UserInfo'));
        this.Orders = JSON.parse(localStorage.getItem('particualrorders'));
        console.log(this.Orders);
        for (var y = 0; y < this.Orders.length; y++) {
            if (this.Orders[y].order_status == 0) {
                this.historyorders.push(this.Orders[y]);
                this.historyorder();
            }
            else if (this.Orders[y].order_status == 5) {
                this.canceledorders.push(this.Orders[y]);
                this.canceledorder();
            }
            else if (this.Orders[y].order_status == 1) {
                this.activeorders.push(this.Orders[y]);
                this.activeorder();
            }
            else if (this.Orders[y].order_status == 2) {
                this.pendingorders.push(this.Orders[y]);
                this.pendingorder();
            }
        }
        console.log(this.activeorders);
        console.log(this.pendingorders);
        console.log(this.historyorders);
        console.log(this.canceledorders);
        if (this.pendingorders == '') {
            this.notavail1 = 1;
        }
        else {
            this.notavail1 = 0;
        }
        if (this.activeorders == '') {
            this.notavail = 1;
        }
        else {
            this.notavail = 0;
        }
        if (this.historyorders == '') {
            this.notavail2 = 1;
        }
        else {
            this.notavail2 = 0;
        }
        if (this.canceledorders == '') {
            this.notavail3 = 1;
        }
        else {
            this.notavail3 = 0;
        }
    };
    NeworderdatePage.prototype.activeorder = function () {
        var j = this;
        this.activeorders.forEach(function (value, key) {
            console.log(value);
            value.products.forEach(function (prodvalue, prodkey) {
                console.log(prodvalue);
                j.chef.products.forEach(function (chefvalue, chefkey) {
                    console.log(chefvalue);
                    if (prodvalue.product_id === chefvalue._id) {
                        console.log('matched');
                        prodvalue.image = chefvalue.product_image0;
                        prodvalue.minorder = chefvalue.minimum_order;
                        prodvalue.prodprice = chefvalue.product_price;
                    }
                    else {
                        console.log('not matched');
                    }
                });
            });
        });
        for (var d = 0; d < this.activeorders.length; d++) {
            this.activeorders[d].booking_datetime = this.activeorders[d].booking_datetime.replace(/T/gi, " ");
            this.activeorders[d].booking_datetime = this.activeorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }
        this.getInfo();
    };
    NeworderdatePage.prototype.getInfo = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.activeorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.activeorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
                //                temp.users1.push(res.data.firstname);
                //                console.log(this.users1);
            });
        });
        console.log(this.activeorders);
    };
    NeworderdatePage.prototype.order = function (products) {
        console.log(products);
        localStorage.setItem('Productorders', JSON.stringify(products));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__orderviewcalendar_orderviewcalendar__["a" /* OrderviewcalendarPage */]);
    };
    /*************************************pending*******************************************************************************************/
    NeworderdatePage.prototype.pendingorder = function () {
        var j = this;
        this.pendingorders.forEach(function (value, key) {
            console.log(value);
            value.products.forEach(function (prodvalue, prodkey) {
                console.log(prodvalue);
                j.chef.products.forEach(function (chefvalue, chefkey) {
                    console.log(chefvalue);
                    if (prodvalue.product_id === chefvalue._id) {
                        console.log('matched');
                        prodvalue.image = chefvalue.product_image0;
                        prodvalue.minorder = chefvalue.minimum_order;
                        prodvalue.prodprice = chefvalue.product_price;
                    }
                    else {
                        console.log('not matched');
                    }
                });
            });
        });
        for (var d = 0; d < this.pendingorders.length; d++) {
            this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/T/gi, " ");
            this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }
        this.getInfo1();
    };
    NeworderdatePage.prototype.getInfo1 = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.pendingorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.pendingorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
            });
        });
        console.log(this.pendingorders);
    };
    NeworderdatePage.prototype.order1 = function (productss) {
        console.log(productss);
        localStorage.setItem('PendingProductorders', JSON.stringify(productss));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pendingorderviewcalendar_pendingorderviewcalendar__["a" /* PendingorderviewcalendarPage */]);
    };
    /*************************************************************************history********************************************************/
    NeworderdatePage.prototype.historyorder = function () {
        var j = this;
        this.historyorders.forEach(function (value, key) {
            console.log(value);
            value.products.forEach(function (prodvalue, prodkey) {
                console.log(prodvalue);
                j.chef.products.forEach(function (chefvalue, chefkey) {
                    console.log(chefvalue);
                    if (prodvalue.product_id === chefvalue._id) {
                        console.log('matched');
                        prodvalue.image = chefvalue.product_image0;
                        prodvalue.minorder = chefvalue.minimum_order;
                        prodvalue.prodprice = chefvalue.product_price;
                    }
                    else {
                        console.log('not matched');
                    }
                });
            });
        });
        for (var d = 0; d < this.historyorders.length; d++) {
            this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/T/gi, " ");
            this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }
        this.getInfo2();
    };
    NeworderdatePage.prototype.getInfo2 = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.historyorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.historyorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
            });
        });
        for (var f = 0; f < this.historyorders.length; f++) {
            for (var g = 0; g < this.historyorders[f].products.length; g++) {
                parseInt(this.historyorders[f].products[g].quantity) * this.historyorders[f].products[g].minorder;
                this.earned = this.earned + (parseInt(this.historyorders[f].products[g].quantity) * this.historyorders[f].products[g].minorder);
            }
        }
        console.log(this.earned);
        console.log(this.historyorders);
    };
    NeworderdatePage.prototype.order2 = function (productS) {
        console.log(productS);
        localStorage.setItem('HistoryProductorders', JSON.stringify(productS));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historyorderviewcalendar_historyorderviewcalendar__["a" /* HistoryorderviewcalendarPage */]);
    };
    /*************************************************************cancelorders********************************************************************/
    NeworderdatePage.prototype.canceledorder = function () {
        var j = this;
        this.canceledorders.forEach(function (value, key) {
            console.log(value);
            value.products.forEach(function (prodvalue, prodkey) {
                console.log(prodvalue);
                j.chef.products.forEach(function (chefvalue, chefkey) {
                    console.log(chefvalue);
                    if (prodvalue.product_id === chefvalue._id) {
                        console.log('matched');
                        prodvalue.image = chefvalue.product_image0;
                        prodvalue.minorder = chefvalue.minimum_order;
                        prodvalue.prodprice = chefvalue.product_price;
                    }
                    else {
                        console.log('not matched');
                    }
                });
            });
        });
        for (var d = 0; d < this.canceledorders.length; d++) {
            this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/T/gi, " ");
            this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }
        this.getInfo3();
    };
    NeworderdatePage.prototype.getInfo3 = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.canceledorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.canceledorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
            });
        });
        console.log(this.canceledorders);
    };
    NeworderdatePage.prototype.order3 = function (producttSS) {
        console.log(producttSS);
        localStorage.setItem('cancelProductorders', JSON.stringify(producttSS));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cancelorderviewcalendar_cancelorderviewcalendar__["a" /* CancelorderviewcalendarPage */]);
    };
    NeworderdatePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    NeworderdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NeworderdatePage');
    };
    return NeworderdatePage;
}());
NeworderdatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-neworderdate',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\neworderdate\neworderdate.html"*/'<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order List\n<!--<p class="aaa">Online chef List</p>-->\n</ion-title>\n  </ion-navbar>\n<div class="segment-sec">\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="pet">\n    <ion-segment-button class="segment-button segment-activated" value="ACTIVEORDER">\n      NEW ORDER\n    </ion-segment-button>\n    <ion-segment-button value="PENDING ORDER">\n      PENDING ORDER\n    </ion-segment-button>\n    <ion-segment-button value="ORDER HISTORY">\n     ORDER HISTORY\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n<!--    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>-->\n<div class="">\n  \n</div>\n\n<div [ngSwitch]="pet" class="box">\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n   <ion-item (click)="order1(dats)" *ngFor="let dats of pendingorders" >\n\n      <ion-thumbnail item-start>\n         <img [src]="dats.products[0]?.image">\n\n      </ion-thumbnail>\n     <h2>{{dats?.name}} <span class="rightp">Home Delivery</span></h2>\n    <p>{{dats.products[0]?.product_name}}</p>\n     <!--<p>{{dats?.booking_datetime}}</p>-->\n     <p>{{ dats?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n \n    </ion-item>\n\n  <p *ngIf="notavail1 == 1">No Pending orders</p>\n  </ion-list>\n\n   \n\n  \n\n    <ion-list *ngSwitchCase="\'ACTIVEORDER\'" >\n\n      <div *ngFor="let dat of activeorders">\n  \n    <ion-item (click)="order(dat)">\n       \n      <ion-thumbnail item-start>\n        <img [src]="dat.products[0]?.image">\n\n      </ion-thumbnail>\n      <h2>{{dat?.name}} <span class="rightp">Cook at Home</span></h2>\n    <p >{{dat.products[0]?.product_name}}</p>\n     <!--<p>{{dat?.booking_datetime}}</p>-->\n     <p>{{ dat?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n   \n    </ion-item>\n              \n  </div>\n      <p *ngIf="notavail == 1">No Active orders</p>\n  </ion-list>\n\n\n  <div *ngSwitchCase="\'ORDER HISTORY\'">\n <ion-list >\n     <!--<h1 class="cancel">TOTAL EARNED <span  style="color:black; font-weight: 700;" class="rightp">${{earned}}</span></h1>-->\n    <ion-item (click)="order2(datts)" *ngFor="let datts of historyorders">\n      <ion-thumbnail item-start>\n        <img [src]="datts.products[0]?.image">\n      </ion-thumbnail>\n      <h2>{{datts?.name}}<span class="rightp">Home Delivery</span></h2>\n       <p>{{datts.products[0]?.product_name}}</p>\n     <!--<p>{{datts?.booking_datetime}}</p>-->\n     <p>{{ datts?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n  \n    </ion-item>\n<p *ngIf="notavail2 == 1">No history</p>\n   </ion-list>\n   <h1 class="cancel">CANCELLED ORDER</h1>\n   <ion-list>\n    <ion-item (click)="order3(dt)" *ngFor="let dt of canceledorders">\n       <ion-thumbnail item-start>\n        <img [src]="dt.products[0]?.image">\n      </ion-thumbnail>\n      <h2>{{dt?.name}} <span style="color:red;" class="rightp">Home Delivery</span></h2>\n    <p>{{dt.products[0]?.product_name}}</p>\n     <!--<p>{{dt?.booking_datetime}}</p>-->\n     <p>{{ dt?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n   \n    </ion-item>\n  <p *ngIf="notavail3 == 1">No Cancelled orders</p>\n  </ion-list>\n  </div>\n\n\n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\neworderdate\neworderdate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]])
], NeworderdatePage);

//# sourceMappingURL=neworderdate.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderviewcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calender_calender__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the OrderviewcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderviewcalendarPage = (function () {
    function OrderviewcalendarPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    OrderviewcalendarPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('Productorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //     this.str3 =  this.prodcts.booking_datetime.split(" ",  this.prodcts.booking_datetime.length);
        //    this.str4=this.str3[1]
        //      this.str5 =  this.str4.split(":00.");
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    OrderviewcalendarPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 2
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Accepted',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OrderviewcalendarPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    OrderviewcalendarPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    OrderviewcalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderviewcalendarPage');
    };
    return OrderviewcalendarPage;
}());
OrderviewcalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderviewcalendar',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\orderviewcalendar\orderviewcalendar.html"*/'<!--\n  Generated template for the OrderviewcalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n       <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<ion-col col-4>\n      <div class="decline">\n       <button ion-button color="secondary" (click)="accept()">Accept</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p end><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\orderviewcalendar\orderviewcalendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], OrderviewcalendarPage);

//# sourceMappingURL=orderviewcalendar.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelorderviewcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calender_calender__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CancelorderviewcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancelorderviewcalendarPage = (function () {
    function CancelorderviewcalendarPage(navCtrl, navParams, alertCtrl, appsetting, toastCtrl, loadCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    CancelorderviewcalendarPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('cancelProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    CancelorderviewcalendarPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    CancelorderviewcalendarPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    CancelorderviewcalendarPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CancelorderviewcalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelorderviewcalendarPage');
    };
    return CancelorderviewcalendarPage;
}());
CancelorderviewcalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cancelorderviewcalendar',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\cancelorderviewcalendar\cancelorderviewcalendar.html"*/'<!--\n  Generated template for the CancelorderviewcalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n        <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<!--<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p end><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\cancelorderviewcalendar\cancelorderviewcalendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], CancelorderviewcalendarPage);

//# sourceMappingURL=cancelorderviewcalendar.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingorderviewcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calender_calender__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the PendingorderviewcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingorderviewcalendarPage = (function () {
    function PendingorderviewcalendarPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    PendingorderviewcalendarPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('PendingProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //     this.str3 =  this.prodcts.booking_datetime.split(" ",  this.prodcts.booking_datetime.length);
        //    this.str4=this.str3[1]
        //    
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    PendingorderviewcalendarPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    PendingorderviewcalendarPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    PendingorderviewcalendarPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PendingorderviewcalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingorderviewcalendarPage');
    };
    return PendingorderviewcalendarPage;
}());
PendingorderviewcalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pendingorderviewcalendar',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\pendingorderviewcalendar\pendingorderviewcalendar.html"*/'<!--\n  Generated template for the PendingorderviewcalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n<!--        <h2>{{str3[0]}}</h2>\n         <p>{{str5[0]}}</p>-->\n<h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col><!--\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p end><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\pendingorderviewcalendar\pendingorderviewcalendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], PendingorderviewcalendarPage);

//# sourceMappingURL=pendingorderviewcalendar.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryorderviewcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calender_calender__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the HistoryorderviewcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryorderviewcalendarPage = (function () {
    function HistoryorderviewcalendarPage(navCtrl, navParams, alertCtrl, appsetting, toastCtrl, loadCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    HistoryorderviewcalendarPage.prototype.userdetail = function () {
        var _this = this;
        this.prodcts = JSON.parse(localStorage.getItem('HistoryProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    HistoryorderviewcalendarPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    HistoryorderviewcalendarPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calender_calender__["a" /* CalenderPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    HistoryorderviewcalendarPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HistoryorderviewcalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryorderviewcalendarPage');
    };
    return HistoryorderviewcalendarPage;
}());
HistoryorderviewcalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-historyorderviewcalendar',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\historyorderviewcalendar\historyorderviewcalendar.html"*/'<!--\n  Generated template for the HistoryorderviewcalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n        <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<!--<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\historyorderviewcalendar\historyorderviewcalendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], HistoryorderviewcalendarPage);

//# sourceMappingURL=historyorderviewcalendar.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, platform, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        //      this.addmessage();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.chef = [];
        this.data = {};
        this.bit = 0;
    }
    ChatPage.prototype.ionViewWillEnter = function () {
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        });
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        this.content.scrollToBottom(0);
        console.log('ionViewDidLoad ChatPage');
        this.chef = JSON.parse(localStorage.getItem('UserInfo'));
        console.log(this.chef);
        this.getchat();
    };
    ChatPage.prototype.addmessage = function (msg) {
        var _this = this;
        console.log(msg);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            chef_id: this.chef._id,
            user_id: '5a675f513c053e2484a4cb76',
            message: msg,
            sender_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        //           var Loading = this.loadCtrl.create({
        //            spinner: 'hide',
        //            cssClass: 'loader',
        //            content: "<img src='assets/image/icons3.gif'>",
        //            dismissOnPageChange:true
        //     });
        //     Loading.present().then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'chats/addmessage', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log('get msg');
            console.log(data1);
            //        Loading.dismiss();
            if (data1.status == true) {
                //              this.chat = data1.data[0].chat_messages;
                //               for(var i =0; i<this.chat.length;i++){
                //                   this.chat[i].created_at = moment(this.chat[i].created_at).format('llll').substring(18,26);
                //              console.log(this.chat[i].created_at);
                //          }
                _this.getchat();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data1.message,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Something went wrong',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            //            Loading.dismissAll();
        });
        //        })
    };
    ChatPage.prototype.getchat = function () {
        var _this = this;
        console.log(this.bit);
        console.log('getchat');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            chef_id: this.chef._id,
            user_id: '5a675f513c053e2484a4cb76',
            page: this.bit
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'chats/getchat', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log('get chat');
            console.log(res);
            if (res.data[0].length > 7) {
                _this.bit++;
            }
            _this.content.scrollToBottom(300);
            _this.date = new Date().toLocaleTimeString();
            console.log(_this.date);
            _this.chat = res.data[0].chat_messages;
            for (var i = 0; i < _this.chat.length; i++) {
                _this.chat[i].created_at = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.chat[i].created_at).format('llll').substring(18, 26);
                console.log(_this.chat[i].created_at);
            }
        });
    };
    //  doInfinite(infiniteScroll) {
    //    console.log('Begin async operation');
    //
    //    setTimeout(() => {
    //      for (let i = 0; i < 30; i++) {
    //        this.items.push( this.items.length );
    //      }
    //
    //      console.log('Async operation has ended');
    //      infiniteScroll.complete();
    //    }, 500);
    //  }
    ChatPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Content"])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="staff">\n     STAFF\n    </ion-segment-button>\n    <ion-segment-button value="USERS">\n      USERS\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n\n<div class="chatsec">\n <ul *ngFor="let msg of chat">\n  <li *ngIf="msg.sender_id == msg.user_id">\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>{{msg.message}}</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n\n  <li class="rightchat" *ngIf="msg.sender_id == chef._id">\n   <div class="chattxt">\n    <p>{{msg.message}}</p>\n    <span class="timedate">{{msg.created_at}}</span>\n   </div>\n  </li>\n\n<!--  <li>\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n  <li>\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the printing and.</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>-->\n<!--  <li class="rightchat">\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the ...</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>-->\n </ul>\n</div>\n\n<!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>-->\n \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  <div class="text">\n    <ion-textarea class="enter" placeholder="Enter your text" [(ngModel)]="data.message" name="message" ></ion-textarea>\n  </div>\n  <ion-buttons end>\n      <button ion-button icon-only class="btnprofile" (click)="addmessage(data.message)"><ion-icon name="paper-plane"></ion-icon></button>     \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RafahofeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RafahofeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RafahofeedbackPage = (function () {
    function RafahofeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RafahofeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RafahofeedbackPage');
    };
    return RafahofeedbackPage;
}());
RafahofeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rafahofeedback',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\rafahofeedback\rafahofeedback.html"*/'<!--\n  Generated template for the RafahofeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Rafaho Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <div class="top-sec">\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h6>\n    </ion-item>\n     <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n     <ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n<ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n  </ion-list>\n </div>\n \n \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n   <div class="bottom-sec">\n  <div class="text">\n    <ion-textarea class="enter" placeholder="Enter your feedback...."></ion-textarea>\n  </div>\n  <div class="send">\n   <button ion-button>Send</button>\n  </div>\n </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n<!--<ion-content padding>\n\n</ion-content>-->\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\rafahofeedback\rafahofeedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], RafahofeedbackPage);

//# sourceMappingURL=rafahofeedback.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcriptionbillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SubcriptionbillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubcriptionbillPage = (function () {
    function SubcriptionbillPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SubcriptionbillPage');
    // }
    // dismiss() {
    //   this.viewCtrl.dismiss();
    // }
    SubcriptionbillPage.prototype.Payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    return SubcriptionbillPage;
}());
SubcriptionbillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-subcriptionbill',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\subcriptionbill\subcriptionbill.html"*/'<!--\n  Generated template for the SubcriptionbillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    \n    <ion-title>Subcription Bill</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div class="container">\n  <h2>CHEF SUBCRIPTION AMOUNT<span> $10.00</span></h2>\n  </div>\n  \n  <div class="content-sec">\n  <ul>\n    <li >product 1 <span>$5.00</span></li>\n     <li >product 1 <span>$5.00</span></li>\n      <li >product 1 <span>$5.00</span></li>\n       <li >product 1 <span>$5.00</span></li>\n   </ul>\n  </div>\n\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">$30.00</h2>\n</div>\n  \n  \n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar >\n      <button ion-button full (click)="Payment()" color="theme-header">Payment</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\subcriptionbill\subcriptionbill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
], SubcriptionbillPage);

//# sourceMappingURL=subcriptionbill.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapmodal_mapmodal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, http, appsetting, camera, actionSheetCtrl, loadingCtrl, toastCtrl, nativeGeocoder, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.data = '';
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.getdata();
            Loading.dismiss();
        });
        this.date = new Date();
    }
    EditprofilePage.prototype.getdata = function () {
        var _this = this;
        //    var th=this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            console.log(data1.data.latitude);
            console.log(data1.data.longitude);
            _this.lat = data1.data.latitude;
            _this.long = data1.data.longitude;
            //      this.geolo(data1.data.latitude,data1.data.longitude);
            _this.nativeGeocoder.reverseGeocode(parseFloat(data1.data.latitude), parseFloat(data1.data.longitude))
                .then(function (result) {
                console.log(JSON.stringify(result));
                if (result.subThoroughfare) {
                    _this.data.geolocation = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else if (result.thoroughfare) {
                    _this.data.geolocation = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else {
                    _this.data.geolocation = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
            })
                .catch(function (error) { return console.log(error); });
            if (data1.data.phone) {
                console.log(data1.data.phone.length);
                //  var i;
                //  for(i=0;i<data1.data.phone.length;i++){
                //   if(i==2 && i==6 && i==11 ){
                //     data1.data.phone=data1.data.phone+'-';}
                //   }
                var str = data1.data.phone;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res2 = str.substring(12,9);
                data1.data.phone = res + '-' + res1 + '-' + res2;
                if (data1.data) {
                    _this.proffile = data1.data;
                    _this.srcImage = _this.proffile.user_image;
                    _this.data = _this.proffile;
                }
            }
        });
    };
    EditprofilePage.prototype.edituserprofile = function (edit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
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
        if (edit.value.phone) {
            edit.value.phone = edit.value.phone.replace(/-/g, "");
            this.data = {
                first_name: edit.value.firstname,
                last_name: edit.value.lastname,
                phone: edit.value.phone,
                address: edit.value.geolocation,
                dob: edit.value.dob,
                gender: edit.value.gender,
                lat: this.lat,
                long: this.long,
                id: userid
            };
            console.log(this.data);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    Loading.dismiss();
                    if (data.status == true) {
                        // this.loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Profile is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
                    }
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: "Something went wrong",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    Loading.dismissAll();
                });
            });
        }
    };
    EditprofilePage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
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
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.imgTosend = imageUri;
                            // this.loading.dismiss();
                            //            alert('camera working');
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageUri
                            };
                            //            alert(JSON.stringify(postdata));
                            console.log(postdata);
                            var serialized = _this.serializeObj(postdata);
                            //             var Loading = this.loadingCtrl.create({
                            //   spinner: 'bubbles',
                            //   cssClass: 'loader'
                            // });
                            // Loading.present().then(() => {
                            _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                // Loading.dismiss();
                                // alert(JSON.stringify(data));
                                console.log(data);
                                //              alert("saving image")
                            }, function (err) {
                                //              alert(JSON.stringify(err))
                            });
                        }, function (err) {
                            //            alert(JSON.stringify(err));
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
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            // /	this.imgTosend = imageData;
                            // this.loading.dismiss();
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageData
                            };
                            //            alert(postdata)
                            var serialized = _this.serializeObj(postdata);
                            _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                //this.Loading.dismiss();
                                console.log(data);
                                //              alert("saving image")
                            }, function (err) {
                                //              alert(' api error');
                                console.log(JSON.stringify(err));
                                //              alert(JSON.stringify(err))
                            });
                            //            alert('gallery working');
                        }, function (err) {
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
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
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
    EditprofilePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            //      alert(data.address);
            _this.data.geolocation = data.address;
            console.log(_this.data.geolocation);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofilePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    EditprofilePage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    EditprofilePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprofilePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_9_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\editprofile\editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <div class="main_box">\n <div class="left_box">\n <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n      <div class="input-sec"  (click)="CameraAction()">\n      <div class="upld">\n      <ion-icon name="ios-camera-outline"></ion-icon>\n      <button class="camera camerabg" ion-button icon-only>\n			\n		</button>\n      </div>\n      </div>\n <div class="content01">\n<h5>{{proffile?.firstname}}</h5>\n<p>{{proffile?.email}}</p>\n </div>\n   </div>\n</div>\n\n\n<form class="form-sec" #editInfo="ngForm" novalidate (submit)="edituserprofile(editInfo)">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>FIRST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label stacked>LAST NAME</ion-label>\n        <ion-input type="text"  [(ngModel)]="data.lastname" name=\'lastname\' #lastname="ngModel" required></ion-input>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     \n      <ion-item>\n        <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n        <ion-input type="tel"  [(ngModel)]="data.phone" name=\'phone\' #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required  (input)="phonevalidation(data.phone)"></ion-input>\n      <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n        <ion-col col-12>\n            \n         <ion-item>\n              <ion-label stacked>BIRTHDAY</ion-label>\n	   <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n	  </ion-item>\n	</ion-col>\n	<ion-col col-12>\n	<ion-item>\n               <ion-label stacked>GENDER</ion-label>\n	<ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n		   <ion-option value="female">Female</ion-option>\n	 <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n	</ion-col>\n\n\n      <!--<ion-item>\n        <ion-label stacked>ALTERNATIVE PHONE NUMBER</ion-label>\n        <ion-input type="text"  maxlength="15"></ion-input>\n      </ion-item>-->\n<div class="content-lable">\n    <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-locate-outline" md="md-locate" (click)="openmapmodal()" style="position: absolute;\n    top: 4px;\n    right: -24px;\n    width: 50px;\n    height: 50px;\n    /* display: block; */\n    color: #000;\n    z-index: 999; \n    font-size:26px;\n    "></ion-icon>\n\n\n        <ion-label stacked>EDIT GEOLOCATION </ion-label>\n        <ion-input  type="text" class="maptext" [(ngModel)]="data.geolocation" [readonly]="isReadonly()"  name=\'geolocation\' #geolocation="ngModel" style="margin:0;" ></ion-input>\n \n</div>\n\n</div>\n\n    </ion-list>\n <div class="frgtpwd">\n   <button ion-button type="submit" [disabled]="!editInfo.valid">Save</button>\n  </div>\n   </form>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermPage = (function () {
    function TermPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    TermPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'Terms and Conditions (Chef)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    TermPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermPage');
    };
    return TermPage;
}());
TermPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-term',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\term\term.html"*/'<!--\n  Generated template for the TermPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Terms and Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Terms and Conditions</h2>\n  <p [innerHTML]="pagedata"></p>\n     \n </div>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\term\term.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], TermPage);

//# sourceMappingURL=term.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentquestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FrequentquestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrequentquestionsPage = (function () {
    function FrequentquestionsPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    FrequentquestionsPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'FaQ (Chef)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    FrequentquestionsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FrequentquestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrequentquestionsPage');
    };
    return FrequentquestionsPage;
}());
FrequentquestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-frequentquestions',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\frequentquestions\frequentquestions.html"*/'<!--\n  Generated template for the FrequentquestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Frequent Questions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>What is Lorem Ipsum?</h2>\n  <p [innerHtml]=\'pagedata\'></p>\n </div>\n<!--  <div class="top">\n  <h2>Where does it come from?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old.</p>\n\n\n    <ol>\n    <li >Contray to popular belief</li>\n    <li >Lorem Ipsum is not</li>\n    <li >Simply random text</li>\n    <li >It has roots in a priece </li>\n    </ol>\n </div>-->\n\n<!-- <div class="top">\n  <h2>What is Lorem Ipsum?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old.</p>\n </div>-->\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\frequentquestions\frequentquestions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], FrequentquestionsPage);

//# sourceMappingURL=frequentquestions.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    HelpPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'Help (Chef)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    HelpPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Where can I get some?</h2>\n	<p [innerHTML] = "pagedata"></p>\n     \n </div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeolocationPage = (function () {
    function GeolocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeolocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeolocationPage');
    };
    return GeolocationPage;
}());
GeolocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-geolocation',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\geolocation\geolocation.html"*/'<!--\n  Generated template for the GeolocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="theme-header">\n    <ion-title>Geo Location </ion-title>\n     <ion-buttons end icononly>\n   <button ion-button >\n  Cancel \n </button>\n </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258308.700625544!2d82.75252935!3d20.98570035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1509949263950" width="325" height="514" allowfullscreen></iframe>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  <div class="text">\n    <div class=textsss>\n    <ion-input class="enter entrssss" placeholder="Enter your text"  > \n      </ion-input>\n      <div class="locationicon">\n           <ion-icon name="ios-pin-outline"></ion-icon>\n      </div>\n    </div>\n <button ion-button color="btncolor">Done</button>\n  </div>\n  \n \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\geolocation\geolocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], GeolocationPage);

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.ptype = 'password';
        this.iconname = 'eye';
        this.showpass = false;
        this.ptype1 = 'password';
        this.iconname1 = 'eye';
        this.showpass1 = false;
        this.ptype2 = 'password';
        this.iconname2 = 'eye';
        this.showpass2 = false;
    }
    ChangepasswordPage.prototype.changepassword = function (changepass) {
        var _this = this;
        console.log('forgot');
        console.log(changepass.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (changepass.value.newpassword == changepass.value.cnewpassword) {
            var email = JSON.parse(localStorage.getItem('UserInfo')).email;
            if (changepass.value.oldpassword.indexOf(' ') >= 0 || changepass.value.newpassword.indexOf(' ') >= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Space not allowed in password',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var postdata = {
                    email: email,
                    password: changepass.value.oldpassword,
                    newpassword: changepass.value.newpassword
                };
                console.log(postdata);
                //alert(JSON.stringify(postdata));
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'hide',
                    cssClass: 'loader',
                    content: "<img src='assets/image/icons3.gif'>",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'changepwd', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            // var clear =localStorage.getItem('UserInfo');
                            localStorage.removeItem('UserInfo');
                            _this.ToastMsg('Password updated successfully');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
                        }
                        else {
                            _this.ToastMsg(response.message);
                        }
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Change Password',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepasswordPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    ChangepasswordPage.prototype.showPassword1 = function () {
        console.log('showpassword');
        this.showpass1 = !this.showpass1;
        if (this.showpass1) {
            this.ptype1 = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.ptype1 = 'password';
            this.iconname1 = 'eye';
        }
    };
    ChangepasswordPage.prototype.showPassword2 = function () {
        console.log('showpassword');
        this.showpass2 = !this.showpass2;
        if (this.showpass2) {
            this.ptype2 = 'text';
            this.iconname2 = 'eye-off';
        }
        else {
            this.ptype2 = 'password';
            this.iconname2 = 'eye';
        }
    };
    ChangepasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepasswordPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-changepassword',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\changepassword\changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="theme-header">\n        <ion-title>Change Password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content>\n    <div class="main">\n        <div class="image">\n            <img src="assets/image/logo.png">\n        </div>\n    </div>\n    <div class="content-sec">\n        <div class="sign">\n            <form class="form-sec" #changepasswordForm="ngForm" (submit)="changepassword(changepasswordForm)">\n                <ion-list>\n\n                    <ion-item >\n                        <ion-label stacked>Enter your old password</ion-label>\n                        <ion-input type="{{ptype}}" [(ngModel)]="data.oldpassword" name="oldpassword" #oldpassword="ngModel"  pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"   required></ion-input>\n                     \n                        <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                  </button>\n                    </ion-item>\n                    <!--<ion-icon name="password" (click)="showPassword()" ></ion-icon>--> \n                    <div class="red" *ngIf="oldpassword.errors && (oldpassword.dirty || oldpassword.touched)">\n                        <div [hidden]="!oldpassword.errors.required">\n                            Password is required\n                        </div>\n                        <div [hidden]="!oldpassword.errors.minlength">\n                            Password must be at least 6 digits\n                        </div>\n                        <div [hidden]="!oldpassword.errors.pattern">\n                            Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                        </div>\n\n                    </div>\n\n                    \n                    <ion-item >\n                        <ion-label stacked>Enter your new password</ion-label>\n                       \n                        <ion-input type="{{ptype1}}" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel"    pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"   required></ion-input>\n                    <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname1}}" (click)="showPassword1()" ></ion-icon>\n                  </button>\n                        \n                    </ion-item>\n                    <!--<ion-icon name="{{iconname1}}" (click)="showPassword1()" ></ion-icon>--> \n                    <div class="red" *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n                        <div [hidden]="!newpassword.errors.required">\n                            Password is required\n                        </div>\n                        <div [hidden]="!newpassword.errors.minlength">\n                            Password must be at least 6 digits\n                        </div>\n                        <div [hidden]="!newpassword.errors.pattern">\n                            Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                        </div>\n\n                    </div>\n\n                    \n                    <ion-item >\n                        <ion-label stacked>Confirm your new password</ion-label>\n                        <ion-input type="{{ptype2}}" [(ngModel)]="data.cnewpassword" name="cnewpassword" #cnewpassword="ngModel"  validateEqual="changepasswordForm.value.newpassword"   pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"   required></ion-input>\n                    <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname2}}" (click)="showPassword2()" ></ion-icon>\n                  </button>\n                    </ion-item>\n                    <!--<ion-icon name="{{iconname2}}" (click)="showPassword2()" ></ion-icon>--> \n                   \n                        <div class="red" *ngIf="cnewpassword.errors && (cnewpassword.dirty || cnewpassword.touched)">\n                            <div [hidden]="!cnewpassword.errors.required">\n                                Password is required\n                            </div>\n                            <div [hidden]="!cnewpassword.errors.minlength">\n                                Password must be at least 6 digits\n                            </div>\n                            <div [hidden]="!cnewpassword.errors.pattern">\n                                Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                            </div>\n\n                        </div>\n\n                        <!--<div *ngIf="registrationForm.value.password != registrationForm.value.cpassword">\n                   Password mismatch\n                 </div>-->\n\n\n                        <!--<span class="spn" ng-show="data.password != data.cpassword">Your passwords must match.</span>-->\n\n                </ion-list>\n                <div class="frgtpwd">\n                    <button ion-button type="submit" [disabled]="!changepasswordForm.valid">Save</button>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\changepassword\changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__processingform_processingform__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mapmodal_mapmodal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_countrypicker__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_countrypicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_countrypicker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
// import { DatePipe } from "@angular/common/src/pipes";


// import { ModalController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//  declare var google;
var RegisterPage = (function () {
    // user: FormGroup;
    function RegisterPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, fcm, http, device, alertCtrl, loadingCtrl, modalCtrl, countryPickerService
        // private datePipe: DatePipe
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.fcm = fcm;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.countryPickerService = countryPickerService;
        this.Ctype = 'password';
        this.iconname1 = 'eye';
        this.ptype = 'password';
        this.iconname = 'eye';
        this.showCpass = false;
        this.showpass = false;
        this.data = [];
        this.phone_number = 32;
        this.countryPickerService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            console.log(countries);
        });
        console.log('Device UUID is: updated' + this.device.uuid);
        // this.data.result='hggjgj';
        this.date = new Date();
        console.log(this.date);
        //alert('update hogai');
        fcm.getToken().then(function (token) {
            //          alert(token);
            _this.devicetoken = token;
        });
        fcm.onTokenRefresh().subscribe(function (newtoken) {
            //         alert("new");
            //         alert(newtoken)
            console.log(newtoken);
        });
        fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        console.log(this.devicetoken);
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_12_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        this.GetLocation();
    };
    RegisterPage.prototype.Registration = function (register) {
        var _this = this;
        console.log('registration');
        console.log(register.value);
        //     alert(JSON.stringify(register.value));
        console.log(this.lat, this.long);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        if (register.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (register.value.password == register.value.cpassword) {
            if (register.value.phone) {
                register.value.phone = register.value.phone.replace(/-/g, "");
                var postdata = {
                    first_name: register.value.firstname,
                    last_name: register.value.lastname,
                    birth_day: register.value.dob,
                    gender: register.value.gender,
                    phone: register.value.phone,
                    emailid: register.value.email,
                    password: register.value.password,
                    lat: this.lat,
                    long: this.long,
                    address: register.value.result,
                    role: 'chef',
                    device_token: this.devicetoken
                };
                console.log(postdata);
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'hide',
                    cssClass: 'loader',
                    content: "<img src='assets/image/icons3.gif'>",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'chefregistration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            _this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
                            if (localStorage.getItem('UserInfo')) {
                                localStorage.removeItem('UserInfo');
                            }
                            //   geolocation:null
                            // };
                            console.log(response.data._id);
                            localStorage.setItem('UserInfo', JSON.stringify(response.data));
                            //        this.navCtrl.push(SigninPage);
                        }
                        else {
                            _this.AlertMsg1(response.message);
                        }
                    }, function (err) {
                        _this.AlertMsg1('Something went wrong');
                        Loading.dismissAll();
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Registration',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
    RegisterPage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                setTimeout(function () {
                    Loading.dismiss();
                }, 4000);
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.data.result = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.data.result = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.data.result = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    //  alert(this.data.result +'Neelanshi');
                    Loading.dismiss();
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg('Please enable your location');
                Loading.dismissAll();
            });
        });
    };
    RegisterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    RegisterPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    RegisterPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    RegisterPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    RegisterPage.prototype.backtosignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
    };
    RegisterPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            _this.data.result = data.address;
            console.log(_this.data.result);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
    };
    RegisterPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    RegisterPage.prototype.AlertMsg = function (msg) {
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
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Continue',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signin_signin__["a" /* SigninPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.AlertMsg1 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        _this.openmapmodal();
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.process = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__processingform_processingform__["a" /* ProcessingformPage */]);
    };
    RegisterPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n        <button style="height:28px;" start ion-button clear (click)="backtosignin()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="background banner">\n    <img src="assets/image/background banner.png">\n  </div>\n\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #registrationForm="ngForm" novalidate (submit)="Registration(registrationForm)">\n        <ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 class="left" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>FIRST NAME</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.firstname" required name=\'firstname\' #firstname="ngModel"></ion-input>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>LAST NAME</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="left" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>BIRTHDAY</ion-label>\n                  <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}"  required></ion-datetime>\n                  <!-- <ion-input type="date" [(ngModel)]="data.dob" name="dob" #dob="ngModel" required></ion-input> -->\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="dob.errors && (dob.dirty || dob.touched)">\n                    <div [hidden]="!dob.errors.required">\n                      What\'s your date of birth?\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="right gender" style="position:initial;">\n                <ion-label>GENDER</ion-label>\n                <ion-item>\n                  <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n                    <ion-option value="female">Female</ion-option>\n                    <ion-option value="male">Male</ion-option>\n                  </ion-select>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n                    <div [hidden]="!gender.errors.required">\n                      You are?\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>ADDRESS</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="address.errors && (address.dirty || address.touched)">\n                    <div [hidden]="!address.errors.required">\n                      Address is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n               \n                  <ion-input (input)="phonevalidation(data.phone)" type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched) && data.phone">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>EMAIL</ion-label>\n                  <!--"^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9.]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"-->\n                      <ion-input type="text" autocapitalize="none" [(ngModel)]="data.email" name="email" #email=\'ngModel\' pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="email.errors && (email.dirty || email.touched)">\n                    <div [hidden]="!email.errors.required">\n                      Email is required\n                    </div>\n                    <div [hidden]="!email.errors.pattern">\n                      Invalid email\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <!--<ion-col col-12 class="left right" style="position:initial;">-->\n                  <div class="itemouter" style="position: initial !important;">\n                <ion-item >\n                  <ion-label stacked>PASSWORD</ion-label>\n                  <ion-input type="{{ptype}}" [(ngModel)]="data.password" name="password" #password="ngModel"     pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"   required></ion-input>\n                 <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                   <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                  </button>\n                </ion-item>\n                   <!--<ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>-->  \n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="password.errors && (password.dirty || password.touched)">\n                    <div [hidden]="!password.errors.required">\n                      Password is required\n                    </div>\n                    <div [hidden]="!password.errors.minlength">\n                      Password must be at least 6 digits\n                    </div>\n                      <div [hidden]="!password.errors.pattern">\n                      Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                    </div>\n                  </div>\n                </div>\n                  </div>\n              <!--</ion-col>-->\n              <!--<ion-col col-12 class="left right">-->\n                  <div class="itemouter"  style="position: initial !important;">\n                <ion-item item-right>\n                  <ion-label stacked>CONFIRM PASSWORD</ion-label>\n                  <ion-input type="{{Ctype}}" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel" validateEqual="registrationForm.value.password" required></ion-input>\n               \n                  \n                  <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname1}}" (click)="showCPassword()" ></ion-icon>\n                  </button>\n                </ion-item>\n                 \n                <ion-label class="alert alert-danger red" color="danger">\n                    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n                        <div [hidden]="!cpassword.errors.required">\n                          Confirm password is required\n                        </div></div>\n                        \n                         <!--<div *ngIf="registrationForm.value.password != registrationForm.value.cpassword">\n                    Password mismatch\n                  </div>-->\n                      \n                 \n                   <!--<span class="spn" ng-show="data.password != data.cpassword">Your passwords must match.</span>-->\n                </ion-label>\n                <!-- <small [hidden]="cpassword.valid || (cpassword.pristine && !f.submitted)">\n                  Password mismatch\n              </small> -->\n                  </div>\n              <!--</ion-col>-->\n              <ion-col col-12 class="left right" style="position:initial;">\n                  <div style="position: relative; overflow: hidden;">\n\n                    <div style="\n    width: 50px;\n    height: 35px;\n    float: right;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    display:block;\n    cursor:pointer;\n" (click)="openmapmodal()">    \n                  <ion-icon ios="ios-locate-outline" md="md-locate"  style="position: absolute;\n    top: 0;\n    right: 0;\n    width: 50px;\n    height: 28px;\n    display: block;\n    color: #000;\n    z-index: 999;\n    bottom: 0;\n    font-size: 26px;\n    margin: auto;\n                  "></ion-icon>\n                    </div>\n                <ion-item>\n                  <ion-label stacked>GEOLOCATION </ion-label>\n                  \n                  <ion-input   type="text" [(ngModel)]= "data.result" [readonly]="isReadonly()" name="result" #result="ngModel" required></ion-input>\n                  \n                </ion-item>\n              </div>\n              </ion-col>\n            </ion-row> \n          </ion-grid>\n        </ion-list>\n            \n<!--           <countryPicker [setValue]="ccn3" [flag]="true"></countryPicker>-->\n        <div class="frgtpwd">\n          <button ion-button type="submit" [disabled]="!registrationForm.valid">Register</button>\n        </div>\n      </form>\n    </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13_angular2_countrypicker__["CountryPickerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_angular2_countrypicker__["CountryPickerService"]) === "function" && _o || Object])
], RegisterPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddreferencePage = (function () {
    function AddreferencePage(navCtrl, toastCtrl, navParams, appsetting, http, 
        // private device: Device,
        alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.data.why = 'select';
    }
    AddreferencePage.prototype.extrastaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
    };
    AddreferencePage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            if (data1.data.reference_phone_number) {
                console.log(data1.data.reference_phone_number.length);
                var str = data1.data.reference_phone_number;
                //  var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res3 = str.substring(9,12);
                data1.data.reference_phone_number = res + '-' + res1 + '-' + res2;
                //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
            }
            if (data1.data.reference_phone_number1) {
                console.log(data1.data.reference_phone_number1.length);
                var str = data1.data.reference_phone_number1;
                //  var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 9);
                //  var res3 = str.substring(9,12);
                data1.data.reference_phone_number1 = res + '-' + res1 + '-' + res2;
                //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
            }
            if (data1.data.reference_name1 == 'undefined' && data1.data.reference_phone_number1 == 'undefined' && data1.data.relationship_with_reference1 == 'undefined') {
                data1.data.refrenshename1 = '';
                data1.data.refrenshenumber1 = '';
                data1.data.refrensherelation1 = '';
            }
            if (data1.data) {
                _this.data.refrenshenumber = data1.data.reference_phone_number;
                _this.data.refrenshename = data1.data.reference_name;
                _this.data.refrensherelation = data1.data.relationship_with_reference;
                _this.data.refrenshename1 = data1.data.reference_name1;
                _this.data.refrenshenumber1 = data1.data.reference_phone_number1;
                _this.data.refrensherelation1 = data1.data.relationship_with_reference1;
                _this.data.about = data1.data.where_do_you_here_about;
                _this.data.why = data1.data.whay_to_want_use_rafaho;
            }
        });
    };
    AddreferencePage.prototype.Processing = function (processing) {
        var _this = this;
        console.log(processing.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        console.log(processing.value);
        if (processing.value.refrenshenumber || processing.value.refrenshenumber1) {
            if (processing.value.refrenshenumber1 != null) {
                processing.value.refrenshenumber1 = processing.value.refrenshenumber1.replace(/-/g, "");
            }
            processing.value.refrenshenumber = processing.value.refrenshenumber.replace(/-/g, "");
            console.log('working');
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var refrenshe = {
                id: userid,
                reference_name: processing.value.refrenshename,
                reference_phone_number: processing.value.refrenshenumber,
                relationship_with_reference: processing.value.refrensherelation,
                reference_name1: processing.value.refrenshename1,
                reference_phone_number1: processing.value.refrenshenumber1,
                relationship_with_reference1: processing.value.refrensherelation1,
                where_from_here: processing.value.about,
                why: processing.value.why
            };
            console.log(refrenshe);
            var Serialized = this.serializeObj(refrenshe);
            var Loading = this.loadingCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'refrence_info_update', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    //  console.log(response);
                    Loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: 'Something went wrong',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    Loading.dismissAll();
                });
            });
        }
    };
    AddreferencePage.prototype.phonevalidation = function (phone) {
        console.log(phone);
        if (phone.length == 3) {
            this.data.refrenshenumber = this.data.refrenshenumber + '-';
        }
        else if (phone.length == 7) {
            this.data.refrenshenumber = this.data.refrenshenumber + '-';
        }
    };
    AddreferencePage.prototype.referencevalidation = function (refphone) {
        console.log(refphone);
        if (refphone.length == 3) {
            this.data.refrenshenumber1 = this.data.refrenshenumber1 + '-';
        }
        else if (refphone.length == 7) {
            this.data.refrenshenumber1 = this.data.refrenshenumber1 + '-';
        }
    };
    AddreferencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddreferencePage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.getdata();
    };
    AddreferencePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return AddreferencePage;
}());
AddreferencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addreference',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\addreference\addreference.html"*/'<!--\n  Generated template for the AddreferencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Processing Form</ion-title>\n  </ion-navbar>\n\n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li class="two-circle"></li>\n    <li  class="three-circle"></li>\n    \n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n    <div class="content-sec">\n   <div class="text-sec">\n  <h2>Add Reference </h2>\n  </div>\n\n<div class="sign">\n   <form class="form-sec" #processform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE NAME </ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrenshename" name="refrenshename" #refrenshename="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="refrenshename.errors && (refrenshename.dirty || refrenshename.touched)">\n                    <div [hidden]="!refrenshename.errors.required">\n                      Reference name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.refrenshenumber" name="refrenshenumber" #refrenshenumber="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="phonevalidation(data.refrenshenumber)"></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="refrenshenumber.errors && (refrenshenumber.dirty || refrenshenumber.touched)">\n                    <div [hidden]="!refrenshenumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!refrenshenumber.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RELATIONSHIP WITH REFERENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrensherelation" name="refrensherelation" #refrensherelation="ngModel" required></ion-input>\n        </ion-item>\n             <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="refrensherelation.errors && (refrensherelation.dirty || refrensherelation.touched)">\n                    <div [hidden]="!refrensherelation.errors.required">\n                    Relationship with reference  is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <h1 style="font-size: 14px; font-weight: 700;">Any Other Reference</h1>\n        <ion-item>\n          <ion-label stacked>REFERENCE NAME</ion-label>\n          <ion-input type="tel" [(ngModel)]="data.refrenshename1" name="refrenshename1" #refrenshename1="ngModel"></ion-input>\n        </ion-item>\n       \n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.refrenshenumber1" name="refrenshenumber1" #refrenshenumber1="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12"  (input)="referencevalidation(data.refrenshenumber1)"></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="refrenshenumber1.errors && (refrenshenumber1.dirty || refrenshenumber1.touched)">\n                    <div [hidden]="!refrenshenumber1.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!refrenshenumber1.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RELATIONSHIP WITH REFERENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrensherelation1" name="refrensherelation1" #refrensherelation1="ngModel"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>HOW DID YOU HEAR ABOUT RAF</ion-label>\n          <ion-input type="text" [(ngModel)]="data.about" name="about" #about="ngModel"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 class="select">\n         <ion-label stacked class="why">WHY YOU WANT TO USE RAFAHO</ion-label>\n        <ion-item>\n         \n          <!-- <ion-label class="select">Select</ion-label> -->\n          <!--<div class="selectuser">-->\n     <ion-select [(ngModel)]="data.why" name="why" #why="ngModel" >\n        <ion-option value="select"> Select</ion-option>\n    <ion-option value="1"> User Friendly</ion-option>\n    <ion-option value="2">Excellent Part Time Opportunity for affined chefs</ion-option>\n   \n    <ion-option value="3">Give wings to your  new cookery innovations</ion-option>\n    <ion-option value="4">Opportunity to earn more while you work</ion-option>\n  </ion-select>\n  <!--</div>-->\n        </ion-item>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n       <div class="bottombutton">\n        <button ion-button full (click)="Processing(processform)"  color="theme-header" [disabled]="!processform.valid">Next</button>\n    </div>\n   </form>\n  </div>\n  \n </div>\n \n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\addreference\addreference.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], AddreferencePage);

//# sourceMappingURL=addreference.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderlistPage = (function () {
    function OrderlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderlistPage');
    };
    return OrderlistPage;
}());
OrderlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderlist',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\orderlist\orderlist.html"*/'<!--\n  Generated template for the OrderlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\orderlist\orderlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], OrderlistPage);

//# sourceMappingURL=orderlist.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = '';
    }
    ForgotPage.prototype.Forgot = function (forgotdata) {
        var _this = this;
        console.log('forgot');
        console.log(forgotdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            email: forgotdata.value.email
        };
        console.log(postdata);
        //alert(JSON.stringify(postdata));
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'forgetpassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.ToastMsg('Check you email to reset password');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.ToastMsg(response.message);
                }
            });
        });
    };
    ForgotPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 4000,
                position: 'top'
            });
            toast.present();
        }
    };
    ForgotPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ForgotPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ForgotPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\forgot\forgot.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="main">\n    <div class="top-img">\n      <img src="assets/image/ionic2-split-pane-banner.png">\n    </div>\n    <div class="text">\n      <h2>WELCOME TO</h2>\n      <h6>RAFAHO SERVICES</h6>\n    </div>\n  </div>\n\n\n\n  <div class="text-sec">\n    <h2>Forgot Password</h2>\n    <h3>WELCOME TO RAFAHO SERVICES</h3>\n  </div>\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #ForgotForm="ngForm" (submit)="Forgot(ForgotForm)">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>EMAIL</ion-label>\n            <ion-input type="email" [(ngModel)]="data.email" name=\'email\' #email="ngModel"  pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"  required></ion-input>\n          </ion-item>\n          <div class="alert alert-danger red" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n        </ion-list>\n        <div class="btn-sec">\n          <button ion-button type="submit" [disabled]="!ForgotForm.valid">Submit</button>\n        </div>\n      </form>\n    </div>\n    <div class="registerlast">\n      <h3 class="register">Already have an account?\n        <span (click)="signin()">Sign in</span>\n      </h3>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditspecialityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__specialitylists_specialitylists__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the EditspecialityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditspecialityPage = (function () {
    function EditspecialityPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, http, tagsinput, camera, device, actionSheetCtrl, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.http = http;
        this.tagsinput = tagsinput;
        this.camera = camera;
        this.device = device;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.specialitydetails = [];
        this.data = [];
        this.imgarr = [];
        this.arr = [];
        this.getdata();
    }
    EditspecialityPage.prototype.backtospec = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__specialitylists_specialitylists__["a" /* SpecialitylistsPage */]);
    };
    EditspecialityPage.prototype.getdata = function () {
        this.specialitydetails = JSON.parse(localStorage.getItem('Specialitytoedit'));
        console.log(this.specialitydetails);
        //  this.data.specialtiescuisine = this.specialitydetails.cuisine
        this.data.specialtiesproduct = this.specialitydetails.specialties_product;
        this.data.addingredients = this.specialitydetails.add_ingredients;
        this.imgarr[0] = this.specialitydetails.specialities_product_image1;
        this.srcImage = this.specialitydetails.specialities_product_image1;
        if (this.specialitydetails.specialities_product_image2) {
            this.srcImage1 = this.specialitydetails.specialities_product_image2;
            this.imgarr[1] = this.specialitydetails.specialities_product_image2;
        }
        else {
            this.srcImage1 = '';
        }
        if (this.specialitydetails.specialities_product_image3) {
            this.srcImage2 = this.specialitydetails.specialities_product_image3;
            this.imgarr[2] = this.specialitydetails.specialities_product_image3;
        }
        else {
            this.srcImage2 = '';
        }
    };
    EditspecialityPage.prototype.Editspeciality = function (speciality) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this.imgarr);
        if ((this.srcImage == undefined) || (this.srcImage == this.imgarr[0])) {
            this.srcImage = '';
        }
        if ((this.srcImage1 == undefined) || (this.srcImage1 == this.imgarr[1])) {
            //         alert('same h 1');
            this.srcImage1 = '';
        }
        if ((this.srcImage2 == undefined) || (this.srcImage2 == this.imgarr[2])) {
            //           alert('same h 2');
            this.srcImage2 = '';
        }
        console.log(this.srcImage, this.srcImage1, this.srcImage2);
        var postdata = {
            specialties_id: this.specialitydetails._id,
            specialties_product: this.data.specialtiesproduct,
            add_ingredients: this.data.addingredients,
            specialities_product_image1: this.srcImage,
            specialities_product_image2: this.srcImage1,
            specialities_product_image3: this.srcImage2
        };
        console.log(postdata);
        var sserialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/edit_specialties', sserialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
                console.log(response1);
                Loading.dismiss();
                if (response1.status == true) {
                    var toast = _this.toastCtrl.create({
                        message: "Speciality is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__specialitylists_specialitylists__["a" /* SpecialitylistsPage */]);
                }
            });
        });
    };
    EditspecialityPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('camera clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditspecialityPage.prototype.chooseImage = function (Type) {
        var _this = this;
        var options = {
            quality: 10,
            sourceType: Type,
            targetWidth: 767,
            targetHeight: 600,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.arr.push({ 'image': imageData });
            //                  alert(JSON.stringify(this.arr));
            if ((_this.srcImage1 == "") && (_this.srcImage2 == "")) {
                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[0].image;
            }
            else if (_this.srcImage2 == "") {
                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[1].image;
            }
            else {
                _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                //                  this.SrcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
            }
            //console.log(this.base64Image);
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    EditspecialityPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditspecialityPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditspecialityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditspecialityPage');
    };
    return EditspecialityPage;
}());
EditspecialityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editspeciality',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\editspeciality\editspeciality.html"*/'<!--\n  Generated template for the EditspecialityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="theme-header">\n     \n      <button ion-button start style="height: 28px;    color: #fff;    padding: 0 0 0 3px;    font-size: 12px;\n    float: left;    width: 7%; margin: 0;" start ion-button clear (click)="backtospec()"><ion-icon ios="ios-arrow-back" md="md-arrow-back" style="font-size: 2.2em;"></ion-icon></button>\n     \n    <ion-title>Edit Speciality</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="content-text">\n  <h1 style="font-size:14px">Add Specialities</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #specialityform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n<!--               <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>ADD SPECIALITY CUISINE </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiescuisine" name=\'specialtiescuisine\' #specialtiescuisine="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger red" color="danger">\n            <div *ngIf="specialtiescuisine.errors && (specialtiescuisine.dirty || specialtiescuisine.touched)">\n              <div [hidden]="!specialtiescuisine.errors.required">\n                Speciality Cuisine is required\n              </div>\n            </div>\n          </div>\n      </ion-col>-->\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>SPECIALITIES PRODUCT </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiesproduct" name=\'specialtiesproduct\' #specialtiesproduct="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger red" color="danger">\n            <div *ngIf="specialtiesproduct.errors && (specialtiesproduct.dirty || specialtiesproduct.touched)">\n              <div [hidden]="!specialtiesproduct.errors.required">\n                Speciality Product is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n          <ion-input type="text"  [(ngModel)]="data.addingredients" name="addingredients" #addingredients="ngModel" required></ion-input>\n        </ion-item>\n             <div class="alert alert-danger red" color="danger">\n            <div *ngIf="addingredients.errors && (addingredients.dirty || addingredients.touched)">\n              <div [hidden]="!addingredients.errors.required">\n                Product Ingridients are required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n  \n\n<br>\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE</h2>\n<ion-grid style="padding:0;">\n  <ion-row>\n    <ion-col col-3 style="padding-left:0px;">\n      <div class="image" >\n  <img *ngIf="srcImage" class="pick0" [src]="srcImage" >\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n   </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage1" class="pick0" [src]="srcImage1">\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n   <img *ngIf="srcImage2" class="pick0" [src]="srcImage2">\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n<ion-col col-3 style="padding-left:0px;"  >\n  <div class="input-sec"  (click)="CameraAction()" >\n      <div class="upld">\n       \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>\n\n   \n  </ion-row>\n</ion-grid>\n</div>\n  \n </form>\n  </div>\n\n \n <div class="plusbtn">\n<button ion-fab mini (click)="Editspeciality(specialityform)" [disabled]="!specialityform.valid" ><ion-icon name="add"></ion-icon></button>\n\n</div>\n  \n\n\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\editspeciality\editspeciality.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__["RlTagInputModule"],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], EditspecialityPage);

//# sourceMappingURL=editspeciality.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditstaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditstaffPage = (function () {
    function EditstaffPage(navCtrl, appsetting, http, loadCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadCtrl = loadCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.data = '';
        this.editstaf();
    }
    EditstaffPage.prototype.editstaf = function () {
        if (localStorage.getItem('Extrastaff')) {
            this.array = JSON.parse(localStorage.getItem('Extrastaff'));
            console.log(this.array.phonenumber);
            //            console.log(Extrastaff1);
            if (this.array.phonenumber) {
                console.log(this.array.phonenumber.length);
                //  var i;
                //  for(i=0;i<data1.data.phone.length;i++){
                //   if(i==2 && i==6 && i==11 ){
                //     data1.data.phone=data1.data.phone+'-';}
                //   }
                var str = this.array.phonenumber;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res2 = str.substring(12,9);
                this.array.phonenumber = res + '-' + res1 + '-' + res2;
                this.data = this.array;
                console.log(this.data);
                this.staffid = this.data._id;
                console.log(this.staffid);
                //        this.proffile =this;
                //        this.srcImage = this.proffile.user_image
            }
        }
    };
    EditstaffPage.prototype.editstaffprofile = function (edit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        console.log(this.staffid);
        if (edit.value.phonenumber) {
            edit.value.phonenumber = edit.value.phonenumber.replace(/-/g, "");
            var postdata = {
                firstname: edit.value.firstname,
                lastname: edit.value.lastname,
                phonenumber: edit.value.phonenumber,
                profession: edit.value.profession,
                status: edit.value.status,
                //  alternatephone:edit.value.alternatephone,
                staff_id: this.staffid,
                id: userid
            };
            console.log(postdata);
            var serialized = this.serializeObj(postdata);
            var Loading = this.loadCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'edit_staff_info', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    Loading.dismiss();
                    if (data.status == true) {
                        // this.loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Staff is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: "Staff is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
                    }
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: 'Something went wrong',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    Loading.dismissAll();
                });
            });
        }
    };
    EditstaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditstaffPage');
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditstaffPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditstaffPage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phonenumber = this.data.phonenumber + '-';
        }
        else if (phn.length == 7) {
            this.data.phonenumber = this.data.phonenumber + '-';
        }
    };
    EditstaffPage.prototype.backtostafflist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
    };
    return EditstaffPage;
}());
EditstaffPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editstaff',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\editstaff\editstaff.html"*/'<!--\n  Generated template for the EditstaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>EDIT STAFF</ion-title>\n     <!--<button style="height:28px;" start ion-button clear (click)="backtostafflist()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form class="form-sec" #editInfo="ngForm" novalidate (submit)="editstaffprofile(editInfo)">\n          <ion-list>\n <ion-item>\n        <ion-label stacked>FIRST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     <ion-item>\n        <ion-label stacked>LAST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.lastname" name=\'lastname\' #lastname="ngModel" required></ion-input>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                       Last name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     <ion-item>\n        <ion-label stacked>PROFESSION</ion-label>\n        <ion-input type="text" [(ngModel)]="data.profession" name=\'profession\' #profession="ngModel" required></ion-input>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="profession.errors && (profession.dirty || profession.touched)">\n                    <div [hidden]="!profession.errors.required">\n                      Profedssion is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n    <ion-item>\n        <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n        <ion-input type="tel"  [(ngModel)]="data.phonenumber" name=\'phonenumber\' #phonenumber="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required  (input)="phonevalidation(data.phonenumber)"></ion-input>\n      <div class="alert alert-danger red" color="danger">\n          <div *ngIf="phonenumber.errors && (phonenumber.dirty || phonenumber.touched)">\n                    <div [hidden]="!phonenumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phonenumber.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n        \n          </ion-item>\n         <ion-item>\n                <ion-label stacked>STATUS</ion-label>\n               \n                  <ion-select [(ngModel)]="data.status" name="status" #status="ngModel" >\n                    <ion-option value="1">Active</ion-option>\n                    <ion-option value="0">Inactive</ion-option>\n                  </ion-select>\n                </ion-item>\n    \n        </ion-list>\n         <div class="frgtpwd">\n   <button ion-button type="submit" [disabled]="!editInfo.valid">Save</button>\n  </div>\n           \n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\editstaff\editstaff.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
], EditstaffPage);

//# sourceMappingURL=editstaff.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__productlist_productlist__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the EditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditproductPage = (function () {
    function EditproductPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, http, tagsinput, camera, device, actionSheetCtrl, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.http = http;
        this.tagsinput = tagsinput;
        this.camera = camera;
        this.device = device;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.tag = [];
        this.ttag = [];
        this.tagss = [];
        this.str2 = [];
        this.arr = [];
        this.imgarr = [];
        this.str1 = [];
        this.commision = [];
        this.suggestions = [];
        this.getdata();
        this.getcommision();
        this.gettags();
        alert('new1');
    }
    EditproductPage.prototype.gettags = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        //    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
        this.http.get(this.appsetting.myGlobalVar + 'tags/gettags').map(function (res) { return res.json(); }).subscribe(function (dataa1) {
            console.log(dataa1.data);
            for (var t = 0; t < dataa1.data.length; t++) {
                _this.suggestions.push(dataa1.data[t].tagname);
            }
            console.log(_this.suggestions);
        });
    };
    EditproductPage.prototype.backtopro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__productlist_productlist__["a" /* ProductlistPage */]);
    };
    EditproductPage.prototype.getcommision = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        //    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
        this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1.data.commision_per_product);
            _this.commision = data1.data.commision_per_product;
            _this.commisioncal1();
        });
    };
    EditproductPage.prototype.commisioncal = function () {
        var x = (this.commision / 100) * this.data.productprice;
        console.log(x);
        this.data.rafahoprice = x;
        this.data.chefrecieved = this.data.productprice - this.data.rafahoprice;
        //      console.log( this.data.productprice);
    };
    EditproductPage.prototype.commisioncal1 = function () {
        console.log(this.commision);
        this.data.productprice = this.productdetails.product_price;
        var x1 = (this.commision / 100) * this.productdetails.product_price;
        console.log(x1);
        this.data.rafahoprice = x1;
        console.log(this.data.rafahoprice);
        this.data.chefrecieved = this.productdetails.product_price - this.data.rafahoprice;
        console.log(this.data.chefrecieved);
        //      console.log( this.data.productprice);
    };
    EditproductPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditproductPage.prototype.tagslength = function (tagg) {
        console.log(tagg);
        console.log(this.tag);
        if (tagg.length > 8) {
            var toast = this.toastCtrl.create({
                message: 'Only 8 tags can be added',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
            tagg.pop();
            this.tag = tagg;
            this.tag = tagg;
        }
        //       this.tag = tagg.toString();
    };
    EditproductPage.prototype.getdata = function () {
        this.productdetails = JSON.parse(localStorage.getItem('Producttoedit'));
        console.log(this.productdetails);
        this.str2 = this.productdetails.tags.split(',', this.productdetails.tags.length);
        console.log(this.str2);
        this.str1 = this.productdetails.tags.split(',', this.productdetails.product_ingredients.length);
        console.log(this.str1);
        console.log(this.tag);
        this.imgarr[0] = this.productdetails.product_image0;
        this.SrcImage = this.productdetails.product_image0;
        if (this.productdetails.product_image1) {
            this.srcImage1 = this.productdetails.product_image1;
            this.imgarr[1] = this.productdetails.product_image1;
        }
        else {
            this.srcImage1 = '';
        }
        if (this.productdetails.product_image2) {
            this.srcImage2 = this.productdetails.product_image2;
            this.imgarr[2] = this.productdetails.product_image2;
        }
        else {
            this.srcImage2 = '';
        }
        console.log(this.imgarr);
        if (this.productdetails.diet_restriction) {
            if (this.productdetails.diet_restriction.startsWith("<")) {
                console.log(this.productdetails.diet_restriction.startsWith("<"));
                this.productdetails.diet_restriction = this.productdetails.diet_restriction.replace(/<\/?[^>]+(>|$)/g, "");
            }
        }
        if (this.productdetails.product_description.startsWith("<")) {
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
        if (this.productdetails.take_away == 1) {
            this.data.chefcook = 1;
        }
        else {
            this.data.chefcook = 0;
        }
        if (this.productdetails.cook_at_user_place == 1) {
            this.data.clientcook = 1;
        }
        else {
            this.data.clientcook = 0;
        }
        if (this.productdetails.home_delivery == 1) {
            this.data.home = 1;
        }
        else {
            this.data.home = 0;
        }
        this.data.productname = this.productdetails.product_name,
            this.data.productprice = this.productdetails.product_price,
            this.data.discount = this.productdetails.discount,
            this.data.cuisine = this.productdetails.cuisine,
            this.tag = this.str2;
        this.tagss = this.str1;
        this.data.productdesc = this.productdetails.product_description,
            this.data.diet = this.productdetails.diet_restriction,
            this.data.minorder = this.productdetails.minimum_order,
            this.data.cookingatchef = this.productdetails.cooking_time_at_chef_place,
            this.data.cookingatclient = this.productdetails.cooking_time_at_user_home,
            //  this.srcImage = this.productdetails.product_image0
            this.data.chefcook = true;
    };
    EditproductPage.prototype.EditProduct = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this.data.productprice);
        console.log(this.srcImage);
        console.log(this.SrcImage);
        var postdata1 = {
            tags: this.tag.toString()
        };
        var sserialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'tags/addtags', sserialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
            console.log(response1);
        });
        console.log(this.imgarr);
        if ((this.SrcImage == undefined) || (this.SrcImage == this.imgarr[0])) {
            this.SrcImage = '';
        }
        if ((this.srcImage1 == undefined) || (this.srcImage1 == this.imgarr[1])) {
            //           alert('same h 1');
            this.srcImage1 = '';
        }
        if ((this.srcImage2 == undefined) || (this.srcImage2 == this.imgarr[2])) {
            //           alert('same h 2');
            this.srcImage2 = '';
        }
        //        if(this.data.productprice.includes('.')){
        //          console.log(true);
        //      }else{
        //          this.data.productprice = this.data.productprice+'.00'
        //      }
        if (this.data.chefcook == true) {
            this.data.chefcook = 1;
        }
        else {
            this.data.chefcook = 0;
        }
        if (this.data.clientcook == true) {
            this.data.clientcook = 1;
        }
        else {
            this.data.clientcook = 0;
        }
        if (this.data.home == true) {
            this.data.home = 1;
        }
        else {
            this.data.home = 0;
        }
        console.log(this.data.cookingatchef);
        console.log(this.data.cookingatclient);
        console.log(this.data.chefcook, this.data.clientcook, this.data.home);
        var postdata = {
            product_image0: this.SrcImage,
            product_image2: this.srcImage2,
            product_image1: this.srcImage1,
            product_id: this.productdetails._id,
            product_name: this.data.productname,
            discount: this.data.discount,
            product_ingredients: this.tagss,
            diet_restriction: this.data.diet,
            product_description: this.data.productdesc,
            cuisine: this.data.cuisine,
            minimum_order: this.data.minorder,
            cooking_time_at_chef_place: this.data.cookingatchef,
            cooking_time_at_user_home: this.data.cookingatclient,
            tags: this.tag,
            product_price: this.data.productprice,
            status: 1,
            take_away: parseInt(this.data.chefcook),
            cook_at_user_place: parseInt(this.data.clientcook),
            home_delivery: parseInt(this.data.home)
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/edit_product_data', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                if (data.status == true) {
                    // this.loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Product is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__productlist_productlist__["a" /* ProductlistPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Product is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__productlist_productlist__["a" /* ProductlistPage */]);
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    EditproductPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditproductPage.prototype.datetime = function (pro) {
        console.log(pro);
    };
    EditproductPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.loading.present();
                        var options = {
                            quality: 8,
                            targetWidth: 767,
                            targetHeight: 600,
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
                            //                  alert(JSON.stringify(this.arr));
                            if ((_this.srcImage1 == "") && (_this.srcImage2 == "")) {
                                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            }
                            else if (_this.srcImage2 == "") {
                                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            }
                            else {
                                _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                                _this.SrcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            }
                            _this.arr = '';
                            _this.arr = [];
                            //    this.imgarr.push(this.SrcImage);
                            //     this.imgarr.push(this.srcImage1);
                            //      this.imgarr.push(this.srcImage2);
                            //            alert('camera working');
                            //            
                        }, function (err) {
                            //            alert(JSON.stringify(err));
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
                            targetWidth: 767,
                            targetHeight: 600,
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
                            //                  alert(JSON.stringify(this.arr));
                            if ((_this.srcImage1 == "") && (_this.srcImage2 == "")) {
                                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            }
                            else if (_this.srcImage2 == "") {
                                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            }
                            else {
                                _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                                _this.SrcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                                _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                                _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            }
                            _this.arr = '';
                            _this.arr = [];
                            //            this.imgarr.push(this.SrcImage);
                            //     this.imgarr.push(this.srcImage1);
                            //      this.imgarr.push(this.srcImage2);
                            //            alert('gallery working');
                        }, function (err) {
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
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    EditproductPage.prototype.onChange = function (val) {
        console.log(val);
        //    console.log(this.tag.toString())
        //    this.tag = this.tag.toString();
        //    console.log(this.tag);
    };
    EditproductPage.prototype.onChanges = function (vali) {
        console.log(vali);
        //    console.log(this.tagss.toString())
        //    this.tagss = this.tagss.toString();
        //    console.log(this.tagss);
    };
    EditproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditproductPage');
    };
    return EditproductPage;
}());
EditproductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editproduct',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\editproduct\editproduct.html"*/'<!--\n  Generated template for the EditproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="theme-header">\n     \n      <button ion-button start style="height: 28px;    color: #fff;    padding: 0 0 0 3px;    font-size: 12px;\n    float: left;    width: 7%; margin: 0;" start ion-button clear (click)="backtopro()"><ion-icon ios="ios-arrow-back" md="md-arrow-back" style="font-size: 2.2em;"></ion-icon></button>\n     \n    <ion-title>Edit Product</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="content-text">\n  <h1>Edit Product</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #productForm="ngForm" novalidate >\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT NAME 1 </ion-label>\n          <ion-input type="text" [(ngModel)]="data.productname" required name=\'productname\' #productname="ngModel" required></ion-input>\n        </ion-item>\n<!--                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productname.errors && (productname.dirty || productname.touched)&& data.productname !=\'\'">\n                    <div [hidden]="!productname.errors.required">\n                      Product name is required\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n\n           <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>PRODUCT PRICE </ion-label>\n          <ion-input type="tel" [(ngModel)]="data.productprice" required name=\'productprice\' #productprice="ngModel"  pattern="[0-9]+(\.[0-9][0-9]?)?"  required (input)="commisioncal()"></ion-input>\n        </ion-item>\n<!--                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productprice.errors && (productprice.dirty || productprice.touched) && data.productprice !=\'\'">\n                    <div [hidden]="!productprice.errors.required">\n                      Product price required\n                    </div>\n                    <div [hidden]="!productprice.errors.pattern">\n                      Only Number allowed with 2 decimal digits maximum\n                    </div>\n                        \n                  </div>\n                </div>-->\n      </ion-col>\n\n <ion-col col-6 class="right">\n        <ion-item>\n          <ion-label stacked>RAFAHO PRICE</ion-label>\n             <ion-input type="text" [(ngModel)]="data.rafahoprice" required name=\'rafahoprice\' #rafahoprice="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n      \n\n<ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>CHEF RECEIVED</ion-label>\n             <ion-input type="text" [(ngModel)]="data.chefrecieved" required name=\'chefrecieved\' #chefrecieved="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n\n\n\n\n\n\n  <ion-col col-12 class="select left" >\n        \n        <ion-item>\n <ion-label stacked class="why">DISCOUNT PRECENTAGE</ion-label>\n     <ion-select class="active"  [(ngModel)]="data.discount" name=\'discount\' #discount="ngModel" required>\n            <ion-option value="0">0%</ion-option>\n    <ion-option value="10">10%</ion-option>\n    <ion-option value="20">20%</ion-option>\n      <ion-option value="30">30%</ion-option>\n        <ion-option value="40">40%</ion-option>\n          <ion-option value="50">50%</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n<div>\n  <h1 class="main">Main Dish and Accompainment</h1>\n</div>\n\n\n      <ion-col col-12 class="left right">\n<div style="position:initial !important">\n          <ion-label stacked style="margin-top: 17px;" >PRODUCT INGREDIENTS</ion-label>\n<div>\n    <rl-tag-input placeholder="+Ingredients" [addOnBlur]=\'true\' [addOnComma]=\'true\' [addOnEnter]=\'true\' [addOnPaste]=\'true\' [(ngModel)]="tagss" [ngModelOptions]="{standalone: true}" (focusout)="onChanges(tagss)" required></rl-tag-input>\n      <!--<ion-tags-input data-tap-disabled="true" style="position:initial;" placeholder="+Ingredients" [once]="\'true\'" [(ngModel)]="tagss" [ngModelOptions]="{standalone: true}" (onChange)="onChanges($event)" (focusout)="focus($event)" required></ion-tags-input>-->\n<!--<div class="alert alert-danger" color="danger">\n                  <div *ngIf="tagss.errors && (tagss.dirty || tagss.touched)">\n                    <div [hidden]="!tagss.errors.required">\n                      Product Ingredients are required\n                    </div>\n                  </div>\n                </div>-->\n</div></div>\n      </ion-col>\n\n\n       <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT DESCRIPTION</ion-label>\n          <ion-textarea type="text" [(ngModel)]="data.productdesc"  name=\'productdesc\' #productdesc="ngModel" maxlength="3000"  required></ion-textarea>\n        </ion-item>\n<!--           <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productdesc.errors && (productdesc.dirty || productdesc.touched)&& data.productdesc !=\'\'" >\n                    <div [hidden]="!productdesc.errors.required">\n                      Product description is required\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n   <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>DIET RESTRICTION</ion-label>\n          <ion-textarea type="text" [(ngModel)]="data.diet" required name=\'diet\' #diet="ngModel" maxlength="3000"  required></ion-textarea>\n        </ion-item>\n<!--           <div class="alert alert-danger" color="danger">\n                  <div *ngIf="diet.errors && (diet.dirty || diet.touched)&& data.diet !=\'\'" >\n                    <div [hidden]="!diet.errors.required">\n                    Diet Restriction is required\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n\n\n  <div class="maxium">\n<p style="text-align:right">Maximum 3000 letter.</p>\n  </div>\n               <ion-col col-12 class="left right">\n         \n        \n        <ion-label stacked style="margin-top: 17px;" >TAGS</ion-label>\n<div>\n      <rl-tag-input style="position:initial !important;" placeholder="+tags" [addOnBlur]=\'true\' [addOnComma]=\'true\' (onChange)="onChange(tag)"  (input)="tagslength(tag)" (focusout)="tagslength(tag)" [addOnEnter]=\'true\'\n                    [addOnPaste]=\'true\'  [(ngModel)]="tag" [ngModelOptions]="{standalone: true}" (onChange)="onChange(tag)"  (input)="tagslength(tag)" (focusout)="tagslength(tag)" [autocomplete]=\'true\' [autocompleteSelectFirstItem]=\'true\' [autocompleteMustMatch]=\'false\' [autocompleteItems]="suggestions" required></rl-tag-input>\n</div>\n\n\n          \n          \n      </ion-col>\n\n<ion-grid>\n  <ion-row>\n\n\n      <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>MINIMUM ORDER</ion-label>\n             <ion-input type="tel" [(ngModel)]="data.minorder" required name=\'minorder\' #minorder="ngModel" pattern="^(0|[1-9][0-9]*)$" maxlength="4" required></ion-input>\n        </ion-item>\n<!--     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="minorder.errors && (minorder.dirty || minorder.touched) && data.minorder !=\'\'">\n                    <div [hidden]="!minorder.errors.required">\n                      Minimum order required\n                    </div>\n                    <div [hidden]="!minorder.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n      \n      <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>PRODUCT CUISINE</ion-label>\n             <ion-input type="text" [(ngModel)]="data.cuisine" required name=\'cuisine\' #cuisine="ngModel" maxlength="3000"required></ion-input>\n        </ion-item>\n<!--     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="minorder.errors && (minorder.dirty || minorder.touched) && data.minorder !=\'\'">\n                    <div [hidden]="!minorder.errors.required">\n                      Minimum order required\n                    </div>\n                    <div [hidden]="!minorder.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n     \n      <ion-col col-12 class="left">\n     <ion-label stacked>SERVICES YOU CAN PROVIDE:</ion-label>\n \n  <ion-item>\n    <ion-label>Home Delivery</ion-label>\n    <ion-checkbox  checked=data.home [(ngModel)]="data.home" [ngModelOptions]="{standalone: true}"  ></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cook at client place</ion-label>\n    <ion-checkbox checked=data.clientcook [(ngModel)]="data.clientcook"  [ngModelOptions]="{standalone: true}" ></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cook at chef place</ion-label>\n    <ion-checkbox checked=data.chefcook [(ngModel)]="data.chefcook" [ngModelOptions]="{standalone: true}"  ></ion-checkbox>\n  </ion-item>\n <!--[(ngModel)]="data.chefcook" [ngModelOptions]="{standalone: true}" (click)="service2(data.chefcook)"-->\n\n </ion-col>\n      \n      \n      \n      \n   <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CHEF PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm"  [(ngModel)]="data.cookingatchef" name="cookingatchef" #cookingatchef="ngModel" (click)="datetime(data.cookingatchef)" required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n<!--     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="cookingatchef.errors && (cookingatchef.dirty || cookingatchef.touched)">\n                    <div [hidden]="!cookingatchef.errors.required">\n                      Cooking time at chef place required\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n\n\n\n\n\n          </ion-row>\n    </ion-grid>\n    </ion-list>\n \n\n<!--   <div class="latter">\n<p>AFTER SELECT PREPARATION</p>\n  </div>-->\n\n    \n<ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CLIENT PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm"  [(ngModel)]="data.cookingatclient" name="cookingatclient" #cookingatclient="ngModel"  required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n<!--     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="cookingatclient.errors && (cookingatclient.dirty || cookingatclient.touched)">\n                    <div [hidden]="!cookingatclient.errors.required">\n                      Cooking time at client place required\n                    </div>\n                  </div>\n                </div>-->\n      </ion-col>\n\n<!--      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked style="margin-top: 17px;">TAGS</ion-label>\n          <ion-textarea placeholder="e.g Paneer" [(ngModel)]="data.tags" required name=\'tags\' #tags="ngModel">Paneer</ion-textarea>\n          <span><ion-icon name="close">Paneer</ion-icon></span>\n\n          \n          \n        </ion-item>\n      </ion-col>-->\n\n\n<!--       <ion-col col-12 class="select">\n         <ion-label stacked class="why">STATUS</ion-label>\n        <ion-item>\n\n     <ion-select class="active" >\n    <ion-option value="Active">Active</ion-option>\n    <ion-option value="Deactive">Deactive</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>-->\n\n\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE <span style="font-size: 9px;">Maximum 3 Photos</span></h2>\n<ion-grid style="padding:0;">\n  <ion-row>\n    <ion-col col-3 style="padding-left:0px;">\n      <div class="image" >\n          \n    <img *ngIf="SrcImage" class="pick0" [src]="SrcImage" >\n <img *ngIf="!SrcImage" class="pick0" src="assets/image/profile_img.png">\n  <!--<ion-icon name="create" (click)="CameraAction(0)"></ion-icon>-->\n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n<!--          <ion-icon name="close" (click)=delimage(1)></ion-icon>-->\n   <img *ngIf="srcImage1" class="pick0" [src]="srcImage1" >\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n   <!--<ion-icon name="create" (click)="CameraAction(1)"></ion-icon>-->\n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n          <!--<ion-icon name="close" (click)=delimage(2)></ion-icon>-->\n      <img *ngIf="srcImage2" class="pick0" [src]="srcImage2" >\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n    <!--<ion-icon name="create" (click)="CameraAction(2)"></ion-icon>-->\n      </div>\n      </ion-col>\n\n\n<ion-col col-3 style="padding-left:0px;" >\n  <div class="input-sec" (click)="CameraAction()">\n      <div class="upld">\n      \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>\n\n   \n  </ion-row>\n    \n</ion-grid>\n</div>\n  \n\n\n \n <div class="plusbtn">\n <button ion-fab mini   (click)="EditProduct(productForm)" [disabled]="!productForm.valid"><ion-icon name="add"></ion-icon></button>\n\n</div>\n  </form>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\editproduct\editproduct.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_7_angular2_tag_input__["RlTagInputModule"],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], EditproductPage);

//# sourceMappingURL=editproduct.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelorderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the CancelorderviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancelorderviewPage = (function () {
    function CancelorderviewPage(navCtrl, navParams, alertCtrl, appsetting, toastCtrl, loadCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    CancelorderviewPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('cancelProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    CancelorderviewPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    CancelorderviewPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    CancelorderviewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CancelorderviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelorderviewPage');
    };
    return CancelorderviewPage;
}());
CancelorderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cancelorderview',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\cancelorderview\cancelorderview.html"*/'<!--\n  Generated template for the CancelorderviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n        <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<!--<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n         <h2>{{dat?.product_name}}</h2><p><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\cancelorderview\cancelorderview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], CancelorderviewPage);

//# sourceMappingURL=cancelorderview.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingorderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the PendingorderviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingorderviewPage = (function () {
    function PendingorderviewPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    PendingorderviewPage.prototype.userdetail = function () {
        var _this = this;
        //   alert('gjhgj');
        this.prodcts = JSON.parse(localStorage.getItem('PendingProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //     this.str3 =  this.prodcts.booking_datetime.split(" ",  this.prodcts.booking_datetime.length);
        //    this.str4=this.str3[1]
        //    
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    PendingorderviewPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    PendingorderviewPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    PendingorderviewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PendingorderviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingorderviewPage');
    };
    return PendingorderviewPage;
}());
PendingorderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pendingorderview',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\pendingorderview\pendingorderview.html"*/'<!--\n  Generated template for the PendingorderviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n<!--        <h2>{{str3[0]}}</h2>\n         <p>{{str5[0]}}</p>-->\n<h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col><!--\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\pendingorderview\pendingorderview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], PendingorderviewPage);

//# sourceMappingURL=pendingorderview.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryorderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the HistoryorderviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryorderviewPage = (function () {
    function HistoryorderviewPage(navCtrl, navParams, alertCtrl, appsetting, toastCtrl, loadCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.http = http;
        this.prodcts = [];
        this.prodcts1 = [];
        this.userdata = [];
        this.total = 0;
        this.userdetail();
    }
    HistoryorderviewPage.prototype.userdetail = function () {
        var _this = this;
        this.prodcts = JSON.parse(localStorage.getItem('HistoryProductorders'));
        this.prodcts1 = this.prodcts.products;
        this.str3 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str4 = new Date(this.prodcts.booking_datetime).toISOString();
        this.str = this.prodcts.customer_address.split(",", this.prodcts.customer_address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.prodcts.customer_address.slice(len, this.prodcts.customer_address.length);
        //   this.str5 =  this.str4.split(":00.");
        //   
        //     console.log(this.str3[0]);
        //     console.log(this.str5[0]);
        for (var k = 0; k < this.prodcts1.length; k++) {
            if (this.prodcts1[k].order_prefrence == 1) {
                this.prodcts1[k].order_prefrence = 'Cook at Chef place';
            }
            else if (this.prodcts1[k].order_prefrence == 2) {
                this.prodcts1[k].order_prefrence = 'Cook at Client Place';
            }
            else {
                this.prodcts1[k].order_prefrence = 'Home Delivery';
            }
        }
        for (var i = 0; i < this.prodcts1.length; i++) {
            if (this.prodcts1[i].quantity == undefined) {
                this.prodcts1[i].quantity = 0;
            }
            this.total = this.total + (this.prodcts1[i].quantity * this.prodcts1[i].prodprice);
        }
        console.log(this.total);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            id: this.prodcts.user_id
        };
        var serialized = this.serializeObj(postdata1);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                _this.userdata = response.data;
                //           this.str = this.userdata.address.split(",", this.userdata.address.length);
                //    this.str1=this.str[0]+','+this.str[1]
                //    var len = this.str1.length+1;
                //this.str2 = this.userdata.address.slice(len, this.userdata.address.length);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    HistoryorderviewPage.prototype.accept = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 0
        };
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Order Finished',
            buttons: [
                {
                    text: 'Ok',
                    role: 'save',
                    handler: function () {
                        var serialized = _this.serializeObj(postdata1);
                        _this.http.post(_this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //            this.navCtrl.push(TabsPage)
                    }
                }
            ]
        });
        alert.present();
    };
    HistoryorderviewPage.prototype.decline = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            order_id: this.prodcts._id,
            new_status: 5
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'order/changeOrderstatus', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Order Declined',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'save',
                        handler: function () {
                            console.log('Submit clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    HistoryorderviewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HistoryorderviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryorderviewPage');
    };
    return HistoryorderviewPage;
}());
HistoryorderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-historyorderview',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\historyorderview\historyorderview.html"*/'<!--\n  Generated template for the HistoryorderviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <!--<p class="aaa">Online chef list</p>-->\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/user1.png">\n    </ion-avatar>\n    <h2 class="user">{{userdata.firstname}}</h2>\n    <p class="paragraph">{{userdata.email}}</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">{{str1}} </p>\n      <p class="paragraph">{{str2}}</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n        <h2>{{ str3 | date : "MMM d, y" }}</h2>\n<p> {{ str4 | date : "h:mm a" }}</p>\n          </div>\n     \n    </ion-col>\n\n<!--<ion-col col-6 >\n      <div class="decline" >\n       <button ion-button color="secondary" (click)="accept()">Finished?</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor" (click)="decline()">Decline</button>\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item *ngFor ="let dat of prodcts1">\n       <ion-thumbnail item-start>\n         <img src="{{dat?.image}}">\n       </ion-thumbnail>\n         \n         \n       <h2>{{dat?.product_name}}</h2><p end><span class="rightp">{{dat?.order_prefrence}}</span></p>\n       <p>Qty: {{dat?.quantity}} x ${{dat?.prodprice}}</p>\n\n       <ion-note item-end="" class="note note-ios">${{dat?.quantity*dat?.prodprice}}</ion-note>\n        \n     </ion-item>\n    \n<!--      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n    \n<!--\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>-->\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">${{total}}</h2>\n</div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\historyorderview\historyorderview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], HistoryorderviewPage);

//# sourceMappingURL=historyorderview.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		495,
		43
	],
	"../pages/accountnumber/accountnumber.module": [
		497,
		42
	],
	"../pages/accounts/accounts.module": [
		496,
		41
	],
	"../pages/addproduct/addproduct.module": [
		499,
		40
	],
	"../pages/addreference/addreference.module": [
		507,
		39
	],
	"../pages/addspecialities/addspecialities.module": [
		498,
		38
	],
	"../pages/calender/calender.module": [
		538,
		37
	],
	"../pages/cancelorderview/cancelorderview.module": [
		503,
		36
	],
	"../pages/cancelorderviewcalendar/cancelorderviewcalendar.module": [
		500,
		35
	],
	"../pages/changepassword/changepassword.module": [
		501,
		34
	],
	"../pages/chat/chat.module": [
		504,
		33
	],
	"../pages/edit/edit.module": [
		502,
		3
	],
	"../pages/editproduct/editproduct.module": [
		505,
		32
	],
	"../pages/editprofile/editprofile.module": [
		506,
		31
	],
	"../pages/editspeciality/editspeciality.module": [
		511,
		30
	],
	"../pages/editstaff/editstaff.module": [
		509,
		29
	],
	"../pages/extrastaff/extrastaff.module": [
		508,
		28
	],
	"../pages/forgot/forgot.module": [
		513,
		27
	],
	"../pages/frequentquestions/frequentquestions.module": [
		512,
		26
	],
	"../pages/geolocation/geolocation.module": [
		510,
		25
	],
	"../pages/help/help.module": [
		517,
		24
	],
	"../pages/historyorderview/historyorderview.module": [
		515,
		23
	],
	"../pages/historyorderviewcalendar/historyorderviewcalendar.module": [
		514,
		22
	],
	"../pages/mapmodal/mapmodal.module": [
		519,
		21
	],
	"../pages/mapmodell/mapmodell.module": [
		516,
		2
	],
	"../pages/neworderdate/neworderdate.module": [
		522,
		20
	],
	"../pages/orderlist/orderlist.module": [
		518,
		19
	],
	"../pages/orderview/orderview.module": [
		521,
		18
	],
	"../pages/orderviewcalendar/orderviewcalendar.module": [
		523,
		17
	],
	"../pages/payment/payment.module": [
		520,
		16
	],
	"../pages/pendingorderdate/pendingorderdate.module": [
		524,
		1
	],
	"../pages/pendingorderview/pendingorderview.module": [
		526,
		15
	],
	"../pages/pendingorderviewcalendar/pendingorderviewcalendar.module": [
		525,
		14
	],
	"../pages/processingform/processingform.module": [
		529,
		13
	],
	"../pages/productlist/productlist.module": [
		530,
		12
	],
	"../pages/profile/profile.module": [
		534,
		11
	],
	"../pages/rafaho/rafaho.module": [
		527,
		0
	],
	"../pages/rafahofeedback/rafahofeedback.module": [
		528,
		10
	],
	"../pages/register/register.module": [
		531,
		9
	],
	"../pages/signin/signin.module": [
		533,
		8
	],
	"../pages/specialitylists/specialitylists.module": [
		532,
		7
	],
	"../pages/stafflist/stafflist.module": [
		536,
		6
	],
	"../pages/subcriptionbill/subcriptionbill.module": [
		537,
		5
	],
	"../pages/term/term.module": [
		535,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calender_calender__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { OrderViewPage } from '../orderview/orderview';



var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, events) {
        // this.navCtrl.push(OrderViewPage);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__calender_calender__["a" /* CalenderPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__["a" /* AccountsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\tabs\tabs.html"*/'<ion-tabs color="navyb" >\n  <ion-tab [root]="tab1Root" tabTitle="RAFAHO"  tabIcon="cls2"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="CALENDAR" tabIcon="cls3"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="CHAT" tabIcon="cls4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="ACCOUNTS" tabIcon="cls5"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="PROFILE" tabIcon="cls6"></ion-tab>\n</ion-tabs>\n\n\n\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Events"]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rafahofeedback_rafahofeedback__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accountnumber_accountnumber__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addspecialities_addspecialities__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__term_term__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__frequentquestions_frequentquestions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__help_help__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geolocation_geolocation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__payment_payment__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__specialitylists_specialitylists__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stafflist_stafflist__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__productlist_productlist__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.Userprofile();
    }
    ProfilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        console.log(postdata);
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                _this.profile = data.data;
                _this.srcImage = _this.profile.user_image;
                console.log(_this.profile);
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProfilePage.prototype.editproduc = function () {
        console.log('productlist');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__productlist_productlist__["a" /* ProductlistPage */]);
    };
    ProfilePage.prototype.product = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__["a" /* AddproductPage */]);
    };
    ProfilePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */]);
    };
    ProfilePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.editstaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__stafflist_stafflist__["a" /* StafflistPage */]);
    };
    ProfilePage.prototype.accountnumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__accountnumber_accountnumber__["a" /* AccountnumberPage */]);
    };
    ProfilePage.prototype.addspecialities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addspecialities_addspecialities__["a" /* AddspecialitiesPage */]);
    };
    ProfilePage.prototype.termcondition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__term_term__["a" /* TermPage */]);
    };
    ProfilePage.prototype.frequentquestions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */]);
    };
    ProfilePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.geolocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__geolocation_geolocation__["a" /* GeolocationPage */]);
    };
    ProfilePage.prototype.Payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__payment_payment__["a" /* PaymentPage */]);
    };
    ProfilePage.prototype.changepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    ProfilePage.prototype.editspeciality = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__specialitylists_specialitylists__["a" /* SpecialitylistsPage */]);
    };
    ProfilePage.prototype.logout = function () {
        if (localStorage.getItem('UserInfo')) {
            // console.log(localStorage.getItem('UserInfo'));
            localStorage.removeItem('UserInfo');
            // alert("local storage cleared");
            //  this.navCtrl.push(SigninPage);
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_16__signin_signin__["a" /* SigninPage */]);
            // this.rootPage = TabsPage;
        }
        // this.navCtrl.push(RegisterPage);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n <div class="main_box">\n <div class="left_box">\n \n <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n <div class="content01">\n<h5>{{profile?.firstname}}</h5>\n<p>{{profile?.email}}</p>\n\n<ul>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="darkgry"></ion-icon></li>\n  <li>  <ion-icon name="star" color="darkgry"></ion-icon></li>\n  <span class="reviews">20 Reviews</span>\n</ul>\n\n\n </div>\n   </div>\n</div>\n\n  <div class="content-sec">\n       <ion-list>\n       \n        <ion-item (click)="editprofile()">\n            Edit profile\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n           <ion-item (click)="product()">\n           Add Products\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n           <ion-item (click)="editproduc()">\n           View Products\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n             <ion-item (click)="editstaff()">\n            Edit Extra Staff\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="changepassword()">\n          Change password\n        <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n      </ion-item>\n         <ion-item (click)="accountnumber()">\n            Account number\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="addspecialities()">\n           Add specialities\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n             <ion-item (click)="editspeciality()">\n           Edit specialities\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="termcondition()">\n           Terms & conditions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="frequentquestions()">\n            Frequent questions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="help()">\n            Help\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n          <!--<ion-item (click)="feedback()">\n            Feedback RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>-->\n\n<!--        <ion-item (click)="geolocation()">\n            Geolocation\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>-->\n       <ion-item (click)="logout()">\n            Logout\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n       </ion-list>\n        \n  </div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__processingform_processingform__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, appsetting, http, fcm, alertCtrl, toastCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.iconname = 'eye';
        this.showpass = false;
        this.ptype = 'password';
        this.data = '';
        fcm.getToken().then(function (token) {
            _this.devicetokenn = token;
        });
        fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        //    alert('updated yayyiiii');
    }
    SigninPage.prototype.Signin = function (logindata) {
        var _this = this;
        console.log('login');
        console.log(logindata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (logindata.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            console.log(this.devicetokenn);
            var postdata = {
                email: logindata.value.email,
                password: logindata.value.password,
                role: 'chef',
                divice_token: this.devicetokenn
            };
            console.log(postdata);
            //alert(JSON.stringify(postdata));
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'loginuser', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    //    if(response.status == true && response.userinfo.role== 'chef'){
                    //    console.log('chef');
                    //    }else{
                    //       console.log('pta ni'); 
                    //    }
                    Loading.dismiss();
                    if (response.status == true) {
                        console.log(response.userinfo._id);
                        localStorage.setItem('UserInfo', JSON.stringify(response.userinfo));
                        _this.ToastMsg('Login successfully');
                        //     if((localStorage.getItem('UserInfo'))&& !(localStorage.getItem('Completed')) ){
                        //              this.navCtrl.push(ProcessingformPage);
                        //     }
                        //     else
                        //     {this.navCtrl.push(TabsPage);}
                        if (response.userinfo.prossing_form == 1) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__processingform_processingform__["a" /* ProcessingformPage */]);
                        }
                    }
                    else {
                        var alert = _this.alertCtrl.create({
                            title: 'RAFAHO',
                            message: response.message,
                            buttons: [
                                {
                                    text: 'ok',
                                    role: 'ok',
                                    handler: function () {
                                        console.log('ok clicked');
                                    }
                                }
                            ]
                        });
                        alert.present();
                        //      this.ToastMsg(response.message);
                        Loading.dismissAll();
                    }
                }, function (err) {
                    Loading.dismissAll();
                });
            });
        }
    };
    SigninPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    SigninPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SigninPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SigninPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Invalid chef',
            buttons: [
                {
                    text: 'ok',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\signin\signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="main">\n    <div class="top-img">\n      <img src="assets/image/ionic2-split-pane-banner.png" style="width: 100%;">\n    </div>\n    <div class="text">\n      <h2>WELCOME TO</h2>\n      <h6>RAFAHO SERVICES</h6>\n    </div>\n   \n  </div>\n\n\n\n  <div class="text-sec">\n    <h2>Sign In</h2>\n    <h3>WELCOME TO RAFAHO SERVICES</h3>\n  </div>\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #SigninForm="ngForm" (submit)="Signin(SigninForm)">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>EMAIL</ion-label>\n            <ion-input type="email" autocapitalize="none" [(ngModel)]="data.email" name=\'email\' #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"  required></ion-input>\n          </ion-item>\n           <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="email.errors && (email.dirty || email.touched)">\n                    <div [hidden]="!email.errors.required">\n                      Email is required\n                    </div>\n                    <div [hidden]="!email.errors.pattern">\n                      Invalid email\n                    </div>\n                  </div>\n                </div>\n            <!--<div style="position:initial !important">-->\n            <div class="itemouter" style="position: initial !important;">\n          <ion-item  >\n            <ion-label stacked>PASSWORD</ion-label>\n            <ion-input  type="{{ptype}}" [(ngModel)]="data.password" #password="ngModel" name="password"  minlength="6" required></ion-input>\n            <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                  </button>\n          </ion-item>\n               <!--<ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>--> \n         			 <div class=\'red\' *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!password.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                         \n            </div>\n            </div>\n                \n            <!--</div>-->\n        </ion-list>\n        <div class="btn-sec">\n          <button color="danger" ion-button full type="submit" [disabled]="!SigninForm.valid">Sign In</button>\n        </div>\n      </form>\n    </div>\n    <div class="forgtpwd" (click)="forgot()">\n      <h1>Forgot password?</h1>\n    </div>\n\n\n    <div class="registerlast">\n      <h3 class="register">Don’t have an account?\n        <span (click)="register()">Register</span>\n      </h3>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _h || Object])
], SigninPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(415);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__neworderdate_neworderdate__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
//import { CalendarComponentOptions } from 'ion2-calendar'
/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalenderPage = (function () {
    function CalenderPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.chef = [];
        this.status = Boolean;
        this.bookingdate = [];
        this.bookingdate1 = [];
        this.particulardata = [];
        this.particulardata1 = [];
        this.previousdateMulti = [];
        this.currentdateMulti = [];
        this.upcomingdateMulti = [];
        this.dates = [];
        this.move = 0;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.getdata();
        //        this.loadEvents();
    }
    CalenderPage.prototype.loadEvents = function () {
        console.log(this.previousdateMulti);
        this.eventSource = this.orderEvents(); //this.previousdateMulti;/
    };
    CalenderPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalenderPage.prototype.onEventSelected = function (event) {
        //        this.navCtrl.push(NeworderdatePage);
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    CalenderPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalenderPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalenderPage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    CalenderPage.prototype.onCurrentDateChanged = function (event) {
        console.log(event);
        this.particulardata1 = [];
        this.move = 0;
        var today = new Date();
        if (__WEBPACK_IMPORTED_MODULE_4_moment__(event).isSame(this.calendar.currentDate)) {
            console.log('baby');
        }
        else {
            for (var x = 0; x < this.particulardata.length; x++) {
                this.particulardata[x].booking_datetime = this.particulardata[x].booking_datetime.replace(/T/gi, " ");
                this.particulardata[x].booking_datetime = this.particulardata[x].booking_datetime.replace(/:00.000Z/gi, " ");
                console.log(event.toDateString(), new Date(this.particulardata[x].booking_datetime).toDateString());
                console.log(__WEBPACK_IMPORTED_MODULE_4_moment__(event.toDateString()).isSame(new Date(this.particulardata[x].booking_datetime).toDateString()));
                if (__WEBPACK_IMPORTED_MODULE_4_moment__(event.toDateString()).isSame(new Date(this.particulardata[x].booking_datetime).toDateString()) == true) {
                    console.log(this.particulardata[x]);
                    this.particulardata1.push(this.particulardata[x]);
                    console.log(this.particulardata1);
                    this.move = 1;
                    localStorage.setItem('particualrorders', JSON.stringify(this.particulardata1));
                    console.log(this.move);
                }
            }
            if (this.move == 1) {
                //              alert('call hua');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__neworderdate_neworderdate__["a" /* NeworderdatePage */]);
            }
            else {
            }
        }
    };
    CalenderPage.prototype.orderEvents = function () {
        if (this.previousdateMulti != '') {
            var events = [];
            for (var i = 0; i < this.previousdateMulti.length; i += 1) {
                var date = this.previousdateMulti[i];
                console.log(date);
                //            console.log(date.getUTCFullYear());
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                console.log(eventType);
                //if (eventType === 0) {
                startTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                events.push({
                    // title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                });
            }
        }
        if (this.upcomingdateMulti != '') {
            var events1 = [];
            for (var i = 0; i < this.upcomingdateMulti.length; i += 1) {
                var date = this.upcomingdateMulti[i]; //new Date();
                console.log(date);
                //            console.log(date.getUTCFullYear());
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                console.log(eventType);
                //if (eventType === 0) {
                startTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                events1.push({
                    // title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                });
            }
        }
        if (this.currentdateMulti != '') {
            var events2 = [];
            for (var i = 0; i < this.currentdateMulti.length; i += 1) {
                var date = this.currentdateMulti[i]; //new Date();
                console.log(date);
                console.log(date.getUTCFullYear());
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                console.log(eventType);
                //if (eventType === 0) {
                startTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date; // new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                events1.push({
                    // title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                });
                this.setClasses();
            }
        }
        console.log(events);
        console.log(events1);
        console.log(events.concat(events1, events2));
        if (events == undefined) {
            if (events1 == undefined) {
                if (events2 == undefined) {
                    return null;
                }
                else {
                    return events2;
                }
            }
            else {
                if (events2 == undefined) {
                    return events1;
                }
                else {
                    return events1.concat(events2);
                }
            }
        }
        else {
            if (events1 == undefined) {
                if (events2 == undefined) {
                    return events;
                }
                else {
                    return events.concat(events2);
                }
            }
            else {
                if (events2 == undefined) {
                    return events.concat(events1);
                }
                else {
                    return events.concat(events1, events2);
                }
            }
        }
    };
    //    orders(){
    //        console.log('orders');
    //        return new Date(this.previousdateMulti);
    //    }
    CalenderPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    //  ***********************************************************************************************************************************************/
    CalenderPage.prototype.setClasses = function () {
        console.log(this.isSame, this.isAfter, this.isBefore);
        var classes = {
            cal_yellow: this.isAfter1,
        };
        return classes;
    };
    CalenderPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        this.chef = JSON.parse(localStorage.getItem('UserInfo'));
        console.log(this.chef);
        var postdata = {
            chef_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorderdataforcalendar', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                console.log(data1.data);
                _this.particulardata = data1.data;
                Loading.dismiss();
                for (var i = 0; i < data1.data.length; i++) {
                    _this.bookingdate.push(data1.data[i].booking_datetime.substr(0, 10));
                    _this.bookingdate1.push(data1.data[i].booking_datetime);
                }
                _this.calenderview();
                console.log(_this.bookingdate);
            });
        });
    };
    CalenderPage.prototype.calenderview = function () {
        var dat = new Date().toDateString();
        //    var datt = new Date(this.bookingdate[0])
        console.log(dat);
        //    console.log(datt);
        for (var i = 0; i < this.bookingdate.length; i++) {
            console.log(this.bookingdate[i]);
            this.isSame = __WEBPACK_IMPORTED_MODULE_4_moment__(dat).isSame(this.bookingdate[i]);
            this.isAfter = __WEBPACK_IMPORTED_MODULE_4_moment__(dat).isAfter(this.bookingdate[i]);
            this.isBefore = __WEBPACK_IMPORTED_MODULE_4_moment__(dat).isBefore(this.bookingdate[i]);
            if (this.isAfter == true) {
                this.isAfter1 = true;
                this.bookingdate1[i] = this.bookingdate1[i].replace(/T/gi, " ");
                this.bookingdate1[i] = this.bookingdate1[i].replace(/:00.000Z/gi, " ");
                this.previousdateMulti.push(new Date(this.bookingdate1[i]));
            }
            if (this.isSame == true) {
                this.isSame1 = true;
                this.bookingdate1[i] = this.bookingdate1[i].replace(/T/gi, " ");
                this.bookingdate1[i] = this.bookingdate1[i].replace(/:00.000Z/gi, " ");
                this.currentdateMulti.push(new Date(this.bookingdate1[i]));
            }
            if (this.isBefore == true) {
                this.isBefore1 = true;
                this.bookingdate1[i] = this.bookingdate1[i].replace(/T/gi, " ");
                this.bookingdate1[i] = this.bookingdate1[i].replace(/:00.000Z/gi, " ");
                this.upcomingdateMulti.push(new Date(this.bookingdate1[i]));
            }
            console.log(this.isAfter);
            console.log(this.isSame);
            console.log(this.isBefore);
            if (this.isAfter == true) {
                //      this.currentdate(true);
            }
        }
        console.log(this.previousdateMulti);
        console.log(this.currentdateMulti);
        console.log(this.upcomingdateMulti);
    };
    //  currentdate(data){
    //      
    //      if (data == 'true'){
    //      const optionsMulti: CalendarModalOptions  = {
    //       daysConfig: [{date: this.previousdateMulti}],
    //       cssClass: 'cal_green'
    //        }
    //          return true;
    //      }else{
    //          return false;
    //      }
    //  }
    CalenderPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CalenderPage.prototype.onChange = function ($event) {
        console.log($event);
        console.log($event._d.toISOString());
        //    var dat = $event._d.toISOString        ();
        //   
    };
    CalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalenderPage');
    };
    return CalenderPage;
}());
CalenderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calender',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\calender\calender.html"*/'<!--\n  Generated template for the CalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons end>\n<!--            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n            <button ion-button (click)="changeMode(\'month\')">M</button>\n            <button ion-button (click)="changeMode(\'week\')">W</button>\n            <button ion-button (click)="changeMode(\'day\')">D</button>-->\n            <button ion-button (click)="loadEvents()" end>Load Events</button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <calendar [eventSource]="eventSource"\n              [calendarMode]="calendar.mode"\n              [currentDate]="calendar.currentDate"\n              (onCurrentDateChanged)="onCurrentDateChanged($event)"\n              (onEventSelected)="onEventSelected($event)"\n              (onTitleChanged)="onViewTitleChanged($event)"\n              (onTimeSelected)="onTimeSelected($event)"\n              step="30">\n    </calendar>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\calender\calender.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], CalenderPage);

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_editstaff_editstaff__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapmodal_mapmodal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_processingform_processingform__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addreference_addreference__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_extrastaff_extrastaff__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_orderlist_orderlist__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_accounts_accounts__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calender_calender__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_orderview_orderview__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_neworderdate_neworderdate__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cancelorderview_cancelorderview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cancelorderviewcalendar_cancelorderviewcalendar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pendingorderview_pendingorderview__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_historyorderview_historyorderview__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_orderviewcalendar_orderviewcalendar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_pendingorderviewcalendar_pendingorderviewcalendar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_historyorderviewcalendar_historyorderviewcalendar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_rafahofeedback_rafahofeedback__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_addproduct_addproduct__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_subcriptionbill_subcriptionbill__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_payment_payment__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_accountnumber_accountnumber__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_editprofile_editprofile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_addspecialities_addspecialities__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_term_term__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_frequentquestions_frequentquestions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_help_help__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_geolocation_geolocation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_forgot_forgot__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic_tags_input__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_device__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_stafflist_stafflist__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_productlist_productlist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_editspeciality_editspeciality__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_specialitylists_specialitylists__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_changepassword_changepassword__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_angular2_moment__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_57_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_editproduct_editproduct__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_ionic2_calendar__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angular2_tag_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_angular2_countrypicker__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_angular2_countrypicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62_angular2_countrypicker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































//import { NgCalendarModule  } from 'ionic2-calendar';


//import { CountryPickerModule } from 'angular2-countrypicker';
//import { NgCalendarModule  } from 'ionic2-calendar';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_editproduct_editproduct__["a" /* EditproductPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cancelorderviewcalendar_cancelorderviewcalendar__["a" /* CancelorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_historyorderviewcalendar_historyorderviewcalendar__["a" /* HistoryorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_pendingorderviewcalendar_pendingorderviewcalendar__["a" /* PendingorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_orderviewcalendar_orderviewcalendar__["a" /* OrderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cancelorderview_cancelorderview__["a" /* CancelorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_neworderdate_neworderdate__["a" /* NeworderdatePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_processingform_processingform__["a" /* ProcessingformPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pendingorderview_pendingorderview__["a" /* PendingorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_addreference_addreference__["a" /* AddreferencePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_extrastaff_extrastaff__["a" /* ExtrastaffPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_historyorderview_historyorderview__["a" /* HistoryorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orderlist_orderlist__["a" /* OrderlistPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_editspeciality_editspeciality__["a" /* EditspecialityPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_calender_calender__["a" /* CalenderPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_orderview_orderview__["a" /* OrderviewPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_addproduct_addproduct__["a" /* AddproductPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_specialitylists_specialitylists__["a" /* SpecialitylistsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_accountnumber_accountnumber__["a" /* AccountnumberPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_editstaff_editstaff__["a" /* EditstaffPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_addspecialities_addspecialities__["a" /* AddspecialitiesPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_term_term__["a" /* TermPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_stafflist_stafflist__["a" /* StafflistPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_geolocation_geolocation__["a" /* GeolocationPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_50__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_60_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_57_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_62_angular2_countrypicker__["CountryPickerModule"].forRoot({
                baseUrl: 'assets/'
            }),
            __WEBPACK_IMPORTED_MODULE_45_ionic_tags_input__["a" /* IonTagsInputModule */],
            __WEBPACK_IMPORTED_MODULE_61_angular2_tag_input__["RlTagInputModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accountnumber/accountnumber.module#AccountnumberPageModule', name: 'AccountnumberPage', segment: 'accountnumber', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addspecialities/addspecialities.module#AddspecialitiesPageModule', name: 'AddspecialitiesPage', segment: 'addspecialities', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addproduct/addproduct.module#AddproductPageModule', name: 'AddproductPage', segment: 'addproduct', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cancelorderviewcalendar/cancelorderviewcalendar.module#CancelorderviewcalendarPageModule', name: 'CancelorderviewcalendarPage', segment: 'cancelorderviewcalendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cancelorderview/cancelorderview.module#CancelorderviewPageModule', name: 'CancelorderviewPage', segment: 'cancelorderview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editproduct/editproduct.module#EditproductPageModule', name: 'EditproductPage', segment: 'editproduct', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addreference/addreference.module#AddreferencePageModule', name: 'AddreferencePage', segment: 'addreference', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/extrastaff/extrastaff.module#ExtrastaffPageModule', name: 'ExtrastaffPage', segment: 'extrastaff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editstaff/editstaff.module#EditstaffPageModule', name: 'EditstaffPage', segment: 'editstaff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/geolocation/geolocation.module#GeolocationPageModule', name: 'GeolocationPage', segment: 'geolocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editspeciality/editspeciality.module#EditspecialityPageModule', name: 'EditspecialityPage', segment: 'editspeciality', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequentquestions/frequentquestions.module#FrequentquestionsPageModule', name: 'FrequentquestionsPage', segment: 'frequentquestions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#SigninPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historyorderviewcalendar/historyorderviewcalendar.module#HistoryorderviewcalendarPageModule', name: 'HistoryorderviewcalendarPage', segment: 'historyorderviewcalendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/historyorderview/historyorderview.module#HistoryorderviewPageModule', name: 'HistoryorderviewPage', segment: 'historyorderview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodell/mapmodell.module#MapmodellPageModule', name: 'MapmodellPage', segment: 'mapmodell', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderlist/orderlist.module#OrderlistPageModule', name: 'OrderlistPage', segment: 'orderlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodal/mapmodal.module#MapmodalPageModule', name: 'MapmodalPage', segment: 'mapmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderview/orderview.module#OrderviewPageModule', name: 'OrderviewPage', segment: 'orderview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/neworderdate/neworderdate.module#NeworderdatePageModule', name: 'NeworderdatePage', segment: 'neworderdate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderviewcalendar/orderviewcalendar.module#OrderviewcalendarPageModule', name: 'OrderviewcalendarPage', segment: 'orderviewcalendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pendingorderdate/pendingorderdate.module#PendingorderdatePageModule', name: 'PendingorderdatePage', segment: 'pendingorderdate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pendingorderviewcalendar/pendingorderviewcalendar.module#PendingorderviewcalendarPageModule', name: 'PendingorderviewcalendarPage', segment: 'pendingorderviewcalendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pendingorderview/pendingorderview.module#PendingorderviewPageModule', name: 'PendingorderviewPage', segment: 'pendingorderview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafaho/rafaho.module#RafahoPageModule', name: 'RafahoPage', segment: 'rafaho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafahofeedback/rafahofeedback.module#RafahofeedbackPageModule', name: 'RafahofeedbackPage', segment: 'rafahofeedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/processingform/processingform.module#ProcessingformPageModule', name: 'ProcessingformPage', segment: 'processingform', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/specialitylists/specialitylists.module#SpecialitylistsPageModule', name: 'SpecialitylistsPage', segment: 'specialitylists', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/term/term.module#TermPageModule', name: 'TermPage', segment: 'term', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stafflist/stafflist.module#StafflistPageModule', name: 'StafflistPage', segment: 'stafflist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subcriptionbill/subcriptionbill.module#SubcriptionbillPageModule', name: 'SubcriptionbillPage', segment: 'subcriptionbill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_58__pages_editproduct_editproduct__["a" /* EditproductPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_specialitylists_specialitylists__["a" /* SpecialitylistsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_cancelorderviewcalendar_cancelorderviewcalendar__["a" /* CancelorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_neworderdate_neworderdate__["a" /* NeworderdatePage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_editspeciality_editspeciality__["a" /* EditspecialityPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_processingform_processingform__["a" /* ProcessingformPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_addreference_addreference__["a" /* AddreferencePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_historyorderview_historyorderview__["a" /* HistoryorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_extrastaff_extrastaff__["a" /* ExtrastaffPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_cancelorderview_cancelorderview__["a" /* CancelorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_editstaff_editstaff__["a" /* EditstaffPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_orderlist_orderlist__["a" /* OrderlistPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_historyorderviewcalendar_historyorderviewcalendar__["a" /* HistoryorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_pendingorderviewcalendar_pendingorderviewcalendar__["a" /* PendingorderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_orderviewcalendar_orderviewcalendar__["a" /* OrderviewcalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_stafflist_stafflist__["a" /* StafflistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pendingorderview_pendingorderview__["a" /* PendingorderviewPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_calender_calender__["a" /* CalenderPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_orderview_orderview__["a" /* OrderviewPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_addproduct_addproduct__["a" /* AddproductPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_accountnumber_accountnumber__["a" /* AccountnumberPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_addspecialities_addspecialities__["a" /* AddspecialitiesPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_term_term__["a" /* TermPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_geolocation_geolocation__["a" /* GeolocationPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_47__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_49__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_59__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 209,
	"./ar-dz": 210,
	"./ar-dz.js": 210,
	"./ar-kw": 211,
	"./ar-kw.js": 211,
	"./ar-ly": 212,
	"./ar-ly.js": 212,
	"./ar-ma": 213,
	"./ar-ma.js": 213,
	"./ar-sa": 214,
	"./ar-sa.js": 214,
	"./ar-tn": 215,
	"./ar-tn.js": 215,
	"./ar.js": 209,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bm": 219,
	"./bm.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es-us": 242,
	"./es-us.js": 242,
	"./es.js": 240,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./mt": 283,
	"./mt.js": 283,
	"./my": 284,
	"./my.js": 284,
	"./nb": 285,
	"./nb.js": 285,
	"./ne": 286,
	"./ne.js": 286,
	"./nl": 287,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 287,
	"./nn": 289,
	"./nn.js": 289,
	"./pa-in": 290,
	"./pa-in.js": 290,
	"./pl": 291,
	"./pl.js": 291,
	"./pt": 292,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 292,
	"./ro": 294,
	"./ro.js": 294,
	"./ru": 295,
	"./ru.js": 295,
	"./sd": 296,
	"./sd.js": 296,
	"./se": 297,
	"./se.js": 297,
	"./si": 298,
	"./si.js": 298,
	"./sk": 299,
	"./sk.js": 299,
	"./sl": 300,
	"./sl.js": 300,
	"./sq": 301,
	"./sq.js": 301,
	"./sr": 302,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 302,
	"./ss": 304,
	"./ss.js": 304,
	"./sv": 305,
	"./sv.js": 305,
	"./sw": 306,
	"./sw.js": 306,
	"./ta": 307,
	"./ta.js": 307,
	"./te": 308,
	"./te.js": 308,
	"./tet": 309,
	"./tet.js": 309,
	"./th": 310,
	"./th.js": 310,
	"./tl-ph": 311,
	"./tl-ph.js": 311,
	"./tlh": 312,
	"./tlh.js": 312,
	"./tr": 313,
	"./tr.js": 313,
	"./tzl": 314,
	"./tzl.js": 314,
	"./tzm": 315,
	"./tzm-latn": 316,
	"./tzm-latn.js": 316,
	"./tzm.js": 315,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 438;

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';






var MyApp = (function () {
    function MyApp(platform, splashScreen, statusBar, http, appsetting) {
        var _this = this;
        this.statusBar = statusBar;
        this.http = http;
        this.appsetting = appsetting;
        this.rootPage = '';
        alert('Welcome to Rafaho.');
        //    console.log(localStorage.getItem('Completed'));
        if (localStorage.getItem('UserInfo')) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            console.log(userid);
            var postdata = {
                id: userid
            };
            var serialized = this.serializeObj(postdata);
            console.log(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                // this.Loading.dismiss();
                console.log(response);
                //			
                if (response.data.prossing_form == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                }
            });
        }
        if (localStorage.getItem('UserInfo') && localStorage.getItem('Completed')) {
            // if(localStorage.getItem('UserInfo')){
            console.log(localStorage.getItem('Completed'));
            console.log(localStorage.getItem('UserInfo'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else if (localStorage.getItem('Completed')) {
            console.log(localStorage.getItem('Completed'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        }
        else {
            console.log(localStorage.getItem('Completed'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        }
        //  }
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.hide();
            splashScreen.hide();
        });
    }
    MyApp.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\bawarchibhojnalya\src\app\app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountnumber_accountnumber__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.accountnumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accountnumber_accountnumber__["a" /* AccountnumberPage */]);
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n <div class="top">\n  <h2>Select Payment Method</h2>\n </div>\n  <ion-list>\n        <ion-item (click)="accountnumber()">\n         <ion-thumbnail item-start>\n         <img src="assets/image/paypal.png">\n       </ion-thumbnail>\n            <h3>Paypal</h3>\n            <p>username@gmail.com</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orderview_orderview__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelorderview_cancelorderview__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pendingorderview_pendingorderview__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historyorderview_historyorderview__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, navParams, platform, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.notavail = 0;
        this.notavail1 = 0;
        this.notavail2 = 0;
        this.notavail3 = 0;
        this.earned = 0;
        this.users3 = [];
        this.bookdt = [];
        this.orders = [];
        this.service = [];
        this.pendingorders = [];
        this.historyorders = [];
        this.canceledorders = [];
        this.users1 = [];
        this.users2 = [];
        this.platform.ready().then(function () {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;
            _this.platform.registerBackButtonAction(function () {
                // get current active page
                var view = _this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    // alert('Press back again to exit App?');
                    var toast = _this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
        this.pet = "ACTIVEORDER";
        this.activeorder();
        this.pendingorder();
        this.historyorder();
        this.canceledorder();
        //    alert('ajksdfh');
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.activeorder();
            _this.canceledorder();
            _this.pendingorder();
            _this.historyorder();
            console.log('Async operation has ended');
            refresher.complete();
        }, 4000);
    };
    HomePage.prototype.order = function (products) {
        console.log(products);
        localStorage.setItem('Productorders', JSON.stringify(products));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__orderview_orderview__["a" /* OrderviewPage */]);
    };
    HomePage.prototype.activeorder = function () {
        var _this = this;
        var j = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.chef = JSON.parse(localStorage.getItem('UserInfo'));
        console.log(this.chef);
        var postdata = {
            order_status: 1,
            chef_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                console.log(data1);
                Loading.dismiss();
                if (data1.status == true) {
                    _this.notavail = 0;
                    console.log(_this.chef.products);
                    data1.data.forEach(function (value, key) {
                        console.log(value);
                        value.products.forEach(function (prodvalue, prodkey) {
                            console.log(prodvalue);
                            j.chef.products.forEach(function (chefvalue, chefkey) {
                                console.log(chefvalue);
                                if (prodvalue.product_id === chefvalue._id) {
                                    console.log('matched');
                                    prodvalue.image = chefvalue.product_image0;
                                    prodvalue.minorder = chefvalue.minimum_order;
                                    prodvalue.prodprice = chefvalue.product_price;
                                    j.imgg = 1;
                                }
                                else {
                                    j.imgg = 0;
                                    console.log('not matched');
                                }
                            });
                        });
                    });
                    _this.orders = data1.data;
                    for (var k = 0; k < _this.orders.length; k++) {
                        if (_this.orders[k].order_prefrence == 1) {
                            _this.orders[k].order_prefrence = 'Cook at Chef place';
                        }
                        else if (_this.orders.order_prefrence == 2) {
                            _this.orders[k].order_prefrence = 'Cook at Client Place';
                        }
                        else {
                            _this.orders[k].order_prefrence = 'Home Delivery';
                        }
                    }
                    //          var neel = moment(this.orders[1].booking_datetime).format('LLLL')
                    //                console.log(neel);
                    for (var d = 0; d < _this.orders.length; d++) {
                        //                    this.orders[d].booking_datetime = moment(this.orders[d].booking_datetime).format('LLLL')
                        //                    console.log(this.orders[d].booking_datetime);
                        //                    var str2 = new Date(this.orders[d].booking_datetime).toLocaleTimeString();
                        //                this.orders[d].booking_datetime = str1+' '+str2;
                        _this.orders[d].booking_datetime = _this.orders[d].booking_datetime.replace(/T/gi, " ");
                        _this.orders[d].booking_datetime = _this.orders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                        _this.getInfo();
                    }
                }
                else {
                    _this.notavail = 1;
                }
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    HomePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HomePage.prototype.getInfo = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.orders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.orders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
                //                temp.users1.push(res.data.firstname);
                //                console.log(this.users1);
            });
        });
        console.log(this.orders);
    };
    //*****-----------------------------------pending orders--------------------------------------------*****//
    HomePage.prototype.pendingorder = function () {
        var _this = this;
        var j = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            order_status: 2,
            chef_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.notavail1 = 0;
                console.log(_this.chef.products);
                response.data.forEach(function (value, key) {
                    console.log(value);
                    value.products.forEach(function (prodvalue, prodkey) {
                        console.log(prodvalue);
                        j.chef.products.forEach(function (chefvalue, chefkey) {
                            console.log(chefvalue);
                            if (prodvalue.product_id === chefvalue._id) {
                                console.log('matched');
                                prodvalue.image = chefvalue.product_image0;
                                prodvalue.minorder = chefvalue.minimum_order;
                                prodvalue.prodprice = chefvalue.product_price;
                                j.imgg = 1;
                            }
                            else {
                                j.imgg = 0;
                                console.log('not matched');
                            }
                        });
                    });
                });
                _this.pendingorders = response.data;
                for (var k = 0; k < _this.pendingorders.length; k++) {
                    if (_this.pendingorders[k].order_prefrence == 1) {
                        _this.pendingorders[k].order_prefrence = 'Cook at Chef place';
                    }
                    else if (_this.pendingorders.order_prefrence == 2) {
                        _this.pendingorders[k].order_prefrence = 'Cook at Client Place';
                    }
                    else {
                        _this.pendingorders[k].order_prefrence = 'Home Delivery';
                    }
                }
                for (var d = 0; d < _this.pendingorders.length; d++) {
                    //                this.pendingorders[d].booking_datetime= new Date(this.pendingorders[d].booking_datetime).toISOString();
                    _this.pendingorders[d].booking_datetime = _this.pendingorders[d].booking_datetime.replace(/T/gi, " ");
                    _this.pendingorders[d].booking_datetime = _this.pendingorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                }
                _this.getInfo1();
            }
            else {
                _this.notavail1 = 1;
            }
        });
    };
    HomePage.prototype.getInfo1 = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.pendingorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.pendingorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
                //                temp.users1.push(res.data.firstname);
                //                console.log(this.users1);
            });
        });
        console.log(this.pendingorders);
    };
    HomePage.prototype.order1 = function (productss) {
        console.log(productss);
        localStorage.setItem('PendingProductorders', JSON.stringify(productss));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pendingorderview_pendingorderview__["a" /* PendingorderviewPage */]);
    };
    //*****-----------------------------------Order history--------------------------------------------*****//
    HomePage.prototype.historyorder = function () {
        var _this = this;
        var j = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            order_status: 0,
            chef_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
            console.log(response1);
            if (response1.status == true) {
                _this.notavail2 = 0;
                console.log(_this.chef.products);
                response1.data.forEach(function (value, key) {
                    console.log(value);
                    value.products.forEach(function (prodvalue, prodkey) {
                        console.log(prodvalue);
                        j.chef.products.forEach(function (chefvalue, chefkey) {
                            console.log(chefvalue);
                            if (prodvalue.product_id === chefvalue._id) {
                                console.log('matched');
                                prodvalue.image = chefvalue.product_image0;
                                prodvalue.minorder = chefvalue.minimum_order;
                                prodvalue.prodprice = chefvalue.product_price;
                                j.imgg = 1;
                            }
                            else {
                                j.imgg = 0;
                                console.log('not matched');
                            }
                        });
                    });
                });
                _this.historyorders = response1.data;
                for (var k = 0; k < _this.historyorders.length; k++) {
                    if (_this.historyorders[k].order_prefrence == 1) {
                        _this.historyorders[k].order_prefrence = 'Cook at Chef place';
                    }
                    else if (_this.historyorders.order_prefrence == 2) {
                        _this.historyorders[k].order_prefrence = 'Cook at Client Place';
                    }
                    else {
                        _this.historyorders[k].order_prefrence = 'Home Delivery';
                    }
                }
                for (var d = 0; d < _this.historyorders.length; d++) {
                    //        this.historyorders[d].booking_datetime = new Date(this.historyorders[d].booking_datetime).toISOString();
                    _this.historyorders[d].booking_datetime = _this.historyorders[d].booking_datetime.replace(/T/gi, " ");
                    _this.historyorders[d].booking_datetime = _this.historyorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                }
                _this.getInfo2();
            }
            else {
                _this.notavail2 = 1;
            }
        });
    };
    HomePage.prototype.getInfo2 = function () {
        this.earned = 0;
        var temp = this;
        console.log('getinfo');
        console.log(this.historyorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.historyorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
                //                temp.users1.push(res.data.firstname);
                //                console.log(this.users1);
            });
        });
        console.log(this.historyorders);
        for (var f = 0; f < this.historyorders.length; f++) {
            for (var g = 0; g < this.historyorders[f].products.length; g++) {
                this.earned = this.earned + (this.historyorders[f].products[g].quantity * this.historyorders[f].products[g].prodprice);
            }
        }
        console.log(this.earned);
    };
    HomePage.prototype.order2 = function (productS) {
        console.log(productS);
        localStorage.setItem('HistoryProductorders', JSON.stringify(productS));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historyorderview_historyorderview__["a" /* HistoryorderviewPage */]);
    };
    //*****-----------------------------------Cancelled orders--------------------------------------------*****//
    HomePage.prototype.canceledorder = function () {
        var _this = this;
        var j = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            order_status: 5,
            chef_id: this.chef._id
        };
        var serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response2) {
            console.log(response2);
            if (response2.status == true) {
                _this.notavail3 = 0;
                console.log(_this.chef.products);
                response2.data.forEach(function (value, key) {
                    console.log(value);
                    value.products.forEach(function (prodvalue, prodkey) {
                        console.log(prodvalue);
                        j.chef.products.forEach(function (chefvalue, chefkey) {
                            console.log(chefvalue);
                            if (prodvalue.product_id === chefvalue._id) {
                                console.log('matched');
                                prodvalue.image = chefvalue.product_image0;
                                prodvalue.minorder = chefvalue.minimum_order;
                                prodvalue.prodprice = chefvalue.product_price;
                                j.imgg = 1;
                            }
                            else {
                                j.imgg = 0;
                                console.log('not matched');
                            }
                        });
                    });
                });
                _this.canceledorders = response2.data;
                for (var k = 0; k < _this.canceledorders.length; k++) {
                    if (_this.canceledorders[k].order_prefrence == 1) {
                        _this.canceledorders[k].order_prefrence = 'Cook at Chef place';
                    }
                    else if (_this.canceledorders.order_prefrence == 2) {
                        _this.canceledorders[k].order_prefrence = 'Cook at Client Place';
                    }
                    else {
                        _this.canceledorders[k].order_prefrence = 'Home Delivery';
                    }
                }
                for (var d = 0; d < _this.canceledorders.length; d++) {
                    //        this.canceledorders[d].booking_datetime =  new Date(this.canceledorders[d].booking_datetime).toISOString()
                    _this.canceledorders[d].booking_datetime = _this.canceledorders[d].booking_datetime.replace(/T/gi, " ");
                    _this.canceledorders[d].booking_datetime = _this.canceledorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                }
                _this.getInfo3();
            }
            else {
                _this.notavail3 = 1;
            }
        });
    };
    HomePage.prototype.getInfo3 = function () {
        var temp = this;
        console.log('getinfo');
        console.log(this.historyorders);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        this.canceledorders.forEach(function (value, key) {
            var user = value.user_id;
            console.log(user);
            var postdata1 = {
                id: user
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res1) {
                console.log(res1);
                console.log(value);
                value.name = res1.data.firstname;
                //                temp.users1.push(res.data.firstname);
                //                console.log(this.users1);
            });
        });
        console.log(this.canceledorders);
    };
    HomePage.prototype.order3 = function (producttSS) {
        console.log(producttSS);
        localStorage.setItem('cancelProductorders', JSON.stringify(producttSS));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cancelorderview_cancelorderview__["a" /* CancelorderviewPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order List\n<!--<p class="aaa">Online chef List</p>-->\n</ion-title>\n  </ion-navbar>\n<div class="segment-sec">\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="pet">\n    <ion-segment-button class="segment-button segment-activated" value="ACTIVEORDER">\n      NEW ORDER\n    </ion-segment-button>\n    <ion-segment-button value="PENDING ORDER">\n      PENDING ORDER\n    </ion-segment-button>\n    <ion-segment-button value="ORDER HISTORY">\n     ORDER HISTORY\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n<div class="">\n  \n</div>\n\n<div [ngSwitch]="pet" class="box">\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <div *ngIf="notavail1 != 1">\n    <ion-item (click)="order1(dats)" *ngFor="let dats of pendingorders" >\n\n      <ion-thumbnail item-start>\n         <img [src]="dats.products[0]?.image">\n\n      </ion-thumbnail>\n     <h2>{{dats?.name}} <span class="rightp"></span></h2>\n    <p>{{dats.products[0]?.product_name}}</p>\n     <!--<p>{{dats?.booking_datetime}}</p>-->\n     <p>{{ dats?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n \n    </ion-item>\n      </div>\n   <p *ngIf="notavail1 == 1">No pending orders yet</p>\n  </ion-list>\n\n   \n\n  \n\n  <ion-list *ngSwitchCase="\'ACTIVEORDER\'" >\n<div *ngIf="notavail != 1">\n      <div *ngFor="let dat of orders">\n  \n    <ion-item (click)="order(dat)">\n       \n      <ion-thumbnail item-start>\n        <img [src]="dat.products[0]?.image">\n\n      </ion-thumbnail>\n      <h2>{{dat?.name}} <span class="rightp"></span></h2>\n    <p >{{dat.products[0]?.product_name}}</p>\n     <!--<p>{{dat?.booking_datetime}}</p>-->\n     <p>{{ dat?.booking_datetime | date:"MMM d, y h:mm a"}}  </p>\n   \n    </ion-item>\n              \n  </div></div>\n      <p *ngIf="notavail == 1">No active orders yet</p>\n  </ion-list>\n\n\n  <div *ngSwitchCase="\'ORDER HISTORY\'">\n   <ion-list >\n     <h1 class="cancel">TOTAL EARNED <span  style="color:black; font-weight: 700;" class="rightp">${{earned}}</span></h1>\n      <div *ngIf="notavail2 != 1">\n    <ion-item (click)="order2(datts)" *ngFor="let datts of historyorders">\n      <ion-thumbnail item-start>\n        <img [src]="datts.products[0]?.image">\n      </ion-thumbnail>\n      <h2>{{datts?.name}}<span class="rightp"></span></h2>\n       <p>{{datts.products[0]?.product_name}}</p>\n     <!--<p>{{datts?.booking_datetime}}</p>-->\n     <p>{{ datts?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n  \n    </ion-item></div>\n<p *ngIf="notavail2 == 1">No orders yet</p>\n   </ion-list>\n   <h1 class="cancel">CANCELLED ORDER</h1>\n   <ion-list>\n        <div *ngIf="notavail3 != 1">\n    <ion-item (click)="order3(dt)" *ngFor="let dt of canceledorders">\n       <ion-thumbnail item-start>\n        <img [src]="dt.products[0]?.image">\n      </ion-thumbnail>\n      <h2>{{dt?.name}} <span style="color:red;" class="rightp"></span></h2>\n    <p>{{dt.products[0]?.product_name}}</p>\n     <!--<p>{{dt?.booking_datetime}}</p>-->\n     <p>{{ dt?.booking_datetime | date : "MMM d, y  h:mm a" }} </p>\n   \n    </ion-item>\n        </div>\n  <p *ngIf="notavail3 == 1">No orders yet</p>\n  </ion-list>\n  </div>\n\n\n\n\n</div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.myGlobalVar = 'http://rafao.us-west-2.elasticbeanstalk.com/api/'; //'http://ec2-13-59-151-198.us-east-2.compute.amazonaws.com/api/';//'http://fashapp.io/api/';
        console.log('Hello Appsetting Provider');
        // if(localStorage.getItem('UserInfo')){
        //   console.log(localStorage.getItem('UserInfo'));
        //   this.navCtrl.push(TabsPage);
        // }else{
        //   this.navCtrl.push(SigninPage);
        // }
    }
    Appsetting.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return Appsetting;
}());
Appsetting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subcriptionbill_subcriptionbill__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_tags_input__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_tag_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { ModalController } from 'ionic-angular';









//import {KeyboardEvent} from '@angular/core';


//import { ng-tags-input } from '../build/ng-tags-input';



/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddproductPage = AddproductPage_1 = (function () {
    function AddproductPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, http, formBuilder, taginput, tagsinput, actionSheetCtrl, camera, device, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.taginput = taginput;
        this.tagsinput = tagsinput;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.arr = [];
        this.tag = [];
        this.tagss = [];
        this.bit = 0;
        this.imgarr = [];
        this.suggestions = [];
        this.getcommision();
        this.gettags();
    }
    AddproductPage.prototype.gettags = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        //    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
        this.http.get(this.appsetting.myGlobalVar + 'tags/gettags').map(function (res) { return res.json(); }).subscribe(function (dataa1) {
            console.log(dataa1.data);
            for (var t = 0; t < dataa1.data.length; t++) {
                _this.suggestions.push(dataa1.data[t].tagname);
            }
            console.log(_this.suggestions);
        });
    };
    AddproductPage.prototype.getcommision = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        //    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
        this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1.data.commision_per_product);
            _this.commision = data1.data.commision_per_product;
        });
    };
    //focus(hel,){
    //    console.log(hel);
    //}
    AddproductPage.prototype.focus = function (element) {
        console.log(element);
        //    console.log(element.srcElement.onkeypress);s
    };
    ;
    AddproductPage.prototype.commisioncal = function () {
        var x = (this.commision / 100) * this.data.productprice;
        console.log(x);
        this.data.rafahoprice = x;
        this.data.chefrecieved = this.data.productprice - this.data.rafahoprice;
        //      console.log( this.data.productprice);
    };
    AddproductPage.prototype.onChange = function (val) {
        console.log(val);
        console.log(this.tag.toString());
        //    this.tags = this.tag.toString();
        //    if(this.tags.length > 8){
        //        
        //    }
        //    console.log(this.tags);
    };
    AddproductPage.prototype.tagslength = function (tagg) {
        console.log(tagg);
        console.log(this.tag);
        if (tagg.length > 8) {
            var toast = this.toastCtrl.create({
                message: 'Only 8 tags can be added',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
            tagg.pop();
            this.tag = tagg;
            this.tag = tagg;
        }
        //       this.tag = tagg.toString();
    };
    AddproductPage.prototype.onChanges = function (vali) {
        console.log(vali);
        console.log(this.tagss.toString());
        this.taggs = this.tagss.toString();
        console.log(this.taggs);
    };
    AddproductPage.prototype.AddProduct = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(this.commision);
        var postdata1 = {
            tags: this.tag.toString()
        };
        var sserialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'tags/addtags', sserialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
            console.log(response1);
        });
        if (this.srcImage1 == undefined) {
            this.srcImage1 = '';
        }
        if (this.srcImage2 == undefined) {
            this.srcImage2 = '';
        }
        if (product.value.productprice.includes('.')) {
            console.log(true);
        }
        else {
            product.value.productprice = product.value.productprice + '.00';
        }
        if (this.servicehomedelivery == undefined) {
            this.servicehomedelivery = 0;
        }
        if (this.servicecookatchef == undefined) {
            this.servicecookatchef = 0;
        }
        if (this.servicecookathome == undefined) {
            this.servicecookathome = 0;
        }
        console.log(this.servicecookathome, this.servicecookatchef, this.servicehomedelivery);
        var postdata = {
            product_name: product.value.productname,
            product_price: product.value.productprice,
            discount: product.value.discount,
            product_ingredients: this.tagss.toString(),
            product_description: product.value.productdesc,
            diet_restriction: product.value.diet,
            minimum_order: product.value.minorder,
            cooking_time_at_chef_place: product.value.cookingatchef,
            cooking_time_at_user_home: product.value.cookingatclient,
            tags: this.tag.toString(),
            status: 0,
            product_image0: this.srcImage,
            product_image1: this.srcImage1,
            product_image2: this.srcImage2,
            id: userid,
            cuisine: product.value.cuisine,
            device_token: this.device.uuid,
            take_away: this.servicecookatchef,
            cook_at_user_place: this.servicecookathome,
            home_delivery: this.servicehomedelivery
        };
        console.log(postdata);
        if (postdata.product_ingredients) {
            if (postdata.tags) {
                if ((postdata.take_away) || (postdata.cook_at_user_place) || (postdata.home_delivery)) {
                    if (postdata.product_image0) {
                        var Serialized = this.serializeObj(postdata);
                        var Loading = this.loadingCtrl.create({
                            spinner: 'hide',
                            cssClass: 'loader',
                            content: "<img src='assets/image/icons3.gif'>",
                            dismissOnPageChange: true
                        });
                        Loading.present().then(function () {
                            _this.http.post(_this.appsetting.myGlobalVar + 'add_products', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                Loading.dismiss();
                                if (response.status == true) {
                                    console.log(response);
                                    console.log(response.data._id);
                                    localStorage.setItem('UserInfo', JSON.stringify(response.data));
                                    _this.presentConfirm('Products added successfully.<br>You want to add another?');
                                }
                                else {
                                    _this.AlertMsg1(response.message);
                                }
                            }, function (err) {
                                console.log(err);
                                var toast = _this.toastCtrl.create({
                                    message: 'Something went wrong',
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                                Loading.dismissAll();
                            });
                        });
                    }
                    else {
                        var toast = this.toastCtrl.create({
                            message: 'Atleast one image have to be selected',
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'Atleast one Service needs to be selected',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Tags need to be filled',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Product Ingredients need to be filled',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
    };
    AddproductPage.prototype.backtopro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
    };
    AddproductPage.prototype.service = function (get) {
        console.log(get);
        if (get == true) {
            this.servicehomedelivery = 1;
        }
        else if (get == undefined) {
            this.servicehomedelivery = 0;
        }
    };
    AddproductPage.prototype.service1 = function (get1) {
        console.log(get1);
        if (get1 == true) {
            this.servicecookathome = 1;
        }
        else if (get1 == undefined) {
            this.servicecookathome = 0;
        }
    };
    AddproductPage.prototype.service2 = function (get2) {
        console.log(get2);
        if (get2 == true) {
            this.servicecookatchef = 1;
        }
        else if (get2 == undefined) {
            this.servicecookatchef = 0;
        }
    };
    AddproductPage.prototype.backtolist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
    };
    AddproductPage.prototype.presentConfirm = function (msg) {
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        _this.navCtrl.push(AddproductPage_1);
                        //            this.data={
                        //                       'productname':' ',
                        //                      'addingredients':' ',
                        //                     
                        //                    };
                        //         this.srcImage=''
                        //             this.srcImage1=''
                        //             this.srcImage2=''
                        console.log('Neelanshi');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    AddproductPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose image',
            buttons: [
                {
                    text: 'Camera',
                    role: 'submit',
                    handler: function () {
                        console.log('camera clicked');
                        _this.chooseImage(1);
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        _this.chooseImage(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
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
    };
    AddproductPage.prototype.chooseImage = function (Type) {
        var _this = this;
        console.log(Type);
        var options = {
            quality: 10,
            sourceType: Type,
            targetWidth: 767,
            targetHeight: 600,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.bit = _this.bit + 1;
            //alert(this.bit);
            if (_this.bit > 3) {
                _this.AlertMsg1('You cannot upload more than 3 images');
            }
            else {
                _this.arr.push('data:image/jpeg;base64,' + imageData);
                _this.imgarr.push(imageData);
                if (_this.imgarr.length == 1) {
                    _this.srcImage = _this.imgarr[0];
                }
                else {
                    _this.srcImage1 = "";
                    _this.srcImage2 = "";
                }
                if (_this.imgarr.length == 2) {
                    _this.srcImage = _this.imgarr[0];
                    _this.srcImage1 = _this.imgarr[1];
                }
                else {
                    _this.srcImage2 = "";
                }
                if (_this.imgarr.length == 3) {
                    _this.srcImage = _this.imgarr[0];
                    _this.srcImage1 = _this.imgarr[1];
                    _this.srcImage2 = _this.imgarr[2];
                }
                console.log(_this.arr.length);
            }
            //console.log(this.base64Image);
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    AddproductPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddproductPage');
    };
    AddproductPage.prototype.delimage = function (index) {
        console.log(index);
        if (index == 0) {
            this.srcImage = '';
        }
        else if (index == 1) {
            this.srcImage1 = '';
        }
        else {
            this.srcImage2 = '';
        }
        this.arr.splice(index);
        this.imgarr.splice(index);
        console.log('here' + this.arr);
    };
    AddproductPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    AddproductPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    AddproductPage.prototype.subcriptionbill = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */]);
    };
    return AddproductPage;
}());
AddproductPage = AddproductPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-addproduct',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\addproduct\addproduct.html"*/'<!--\n  Generated template for the AddproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n     \n      <button ion-button start style="height: 20px;    color: #fff;    padding: 0 0 0 3px;    font-size: 12px;\n    float: left;    width: 7%; margin: 0;" start ion-button clear (click)="backtopro()"><ion-icon ios="ios-arrow-back" md="md-arrow-back" style="font-size: 2.2em;"></ion-icon></button>\n     \n    <ion-title>Add Product</ion-title>\n\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1>Add Product</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #productForm="ngForm" novalidate >\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT NAME 1 </ion-label>\n          <ion-input type="text" [(ngModel)]="data.productname" required name=\'productname\' #productname="ngModel" required></ion-input>\n        </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="productname.errors && (productname.dirty || productname.touched)&& data.productname !=\'\'">\n                    <div [hidden]="!productname.errors.required">\n                      Product name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n           <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>PRODUCT PRICE </ion-label>\n          <ion-input type="tel" [(ngModel)]="data.productprice" required name=\'productprice\' #productprice="ngModel"  pattern="[0-9]+(\.[0-9][0-9]?)?"  required (input)="commisioncal()"></ion-input>\n        </ion-item>\n                <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="productprice.errors && (productprice.dirty || productprice.touched) && data.productprice !=\'\'">\n                    <div [hidden]="!productprice.errors.required">\n                      Product price required\n                    </div>\n                    <div [hidden]="!productprice.errors.pattern">\n                      Only Number allowed with 2 decimal digits maximum\n                    </div>\n                        \n                  </div>\n                </div>\n      </ion-col>\n\n      <ion-col col-6 class="right">\n        <ion-item>\n          <ion-label stacked>RAFAHO PRICE</ion-label>\n             <ion-input type="text" [(ngModel)]="data.rafahoprice" required name=\'rafahoprice\' #rafahoprice="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n      \n\n<ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>CHEF RECEIVED</ion-label>\n             <ion-input type="text" [(ngModel)]="data.chefrecieved" required name=\'chefrecieved\' #chefrecieved="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n\n\n\n\n\n\n  <ion-col col-12 class="select left" >\n        \n        <ion-item>\n <ion-label stacked class="why">DISCOUNT PRECENTAGE</ion-label>\n     <ion-select class="active"  [(ngModel)]="data.discount" name=\'discount\' #discount="ngModel" required>\n          <ion-option value="0">0%</ion-option>\n    <ion-option value="10">10%</ion-option>\n    <ion-option value="20">20%</ion-option>\n      <ion-option value="30">30%</ion-option>\n        <ion-option value="40">40%</ion-option>\n          <ion-option value="50">50%</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n<div>\n  <h1 class="main">Main Dish and Accompainment</h1>\n</div>\n\n\n      <ion-col col-12 class="left right">\n<!--        <ion-item>\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n          <ion-input type="text" [(ngModel)]="data.productingredients" required name=\'productingredients\' #productingredients="ngModel" required></ion-input>\n        </ion-item>\n          <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productingredients.errors && (productingredients.dirty || productingredients.touched) && data.productingredients !=\'\'">\n                    <div [hidden]="!productingredients.errors.required">\n                      Product ingredients are required\n                    </div>\n                  </div>\n                </div>-->\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n<div>\n    <rl-tag-input placeholder="+Ingredients" [addOnBlur]=\'true\' [addOnComma]=\'true\' [addOnEnter]=\'true\' [addOnPaste]=\'true\' [(ngModel)]="tagss" [ngModelOptions]="{standalone: true}" (focusout)="onChanges(tagss)" required></rl-tag-input>\n<div class="alert alert-danger red" color="danger">\n                  <div *ngIf="tagss.errors && (tagss.dirty || tagss.touched)">\n                    <div [hidden]="!tagss.errors.required">\n                      Product Ingredients are required\n                    </div>\n                  </div>\n                </div>\n</div>\n      </ion-col>\n\n     <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>MINIMUM ORDER</ion-label>\n             <ion-input type="tel" [(ngModel)]="data.minorder" required name=\'minorder\' #minorder="ngModel" pattern="^(0|[1-9][0-9]*)$" maxlength="4" required></ion-input>\n        </ion-item>\n     <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="minorder.errors && (minorder.dirty || minorder.touched) && data.minorder !=\'\'">\n                    <div [hidden]="!minorder.errors.required">\n                      Minimum order required\n                    </div>\n                    <div [hidden]="!minorder.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n       <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT CUISINE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.cuisine" required name=\'cuisine\' #cuisine="ngModel" maxlength="3000"  required></ion-input>\n        </ion-item>\n           <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="cuisine.errors && (cuisine.dirty || cuisine.touched)&& data.cuisine !=\'\'" >\n                    <div [hidden]="!cuisine.errors.required">\n                      Cuisine is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n              <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT DESCRIPTION</ion-label>\n          <ion-textarea  [(ngModel)]="data.productdesc" required name=\'productdesc\' #productdesc="ngModel" maxlength="3000"  required></ion-textarea>\n        </ion-item>\n           <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="productdesc.errors && (productdesc.dirty || productdesc.touched)&& data.productdesc !=\'\'" >\n                    <div [hidden]="!productdesc.errors.required">\n                      Product description is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n   <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>DIET RESTRICTION</ion-label>\n          <ion-textarea type="text" [(ngModel)]="data.diet" required name=\'diet\' #diet="ngModel" maxlength="3000"  required></ion-textarea>\n        </ion-item>\n           <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="diet.errors && (diet.dirty || diet.touched)&& data.diet !=\'\'" >\n                    <div [hidden]="!diet.errors.required">\n                    Diet Restriction is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n\n  <div class="maxium">\n<p style="text-align:right">Maximum 3000 letter.</p>\n  </div>\n               <ion-col col-12 class="left right" style="position: initial !important;">\n\n         \n            \n        <ion-label stacked>TAGS</ion-label>\n        <rl-tag-input  [addOnBlur]=\'true\' [addOnComma]=\'true\' [addOnEnter]=\'true\' [addOnPaste]=\'true\' [(ngModel)]="tag" [ngModelOptions]="{standalone: true}" (onChange)="onChange(tag)"  (input)="tagslength(tag)" (focusout)="tagslength(tag)" [autocomplete]=\'true\' [autocompleteSelectFirstItem]=\'true\' [autocompleteMustMatch]=\'false\' [autocompleteItems]="suggestions" required></rl-tag-input>\n\n      \n<!--            <div class="tag-container">\n    <span class="tag" *ngFor="let tag of tags">\n      {{ tag }}\n      <ion-icon name="close" (click)="deleteTag(tag)"></ion-icon>\n    </span>\n  </div>-->\n\n  \n          \n          <!--<tags-input formControlName="animals"></tags-input>-->\n          <!--<input name="hashtags" type="tags" pattern="^#" placeholder="#hashtags">-->\n          <!--<ion-textarea  type="text" name="tags-input" placeholder="e.g Paneer"> <span><ion-icon name="close">Paneer</ion-icon></span></ion-textarea>-->\n<!--          <ion-textarea placeholder="e.g Paneer" [(ngModel)]="data.tags | TagModel" required name=\'tags\' #tags="ngModel">Paneer</ion-textarea>-->\n         \n\n          \n          \n      </ion-col>\n\n\n<ion-grid>\n  <ion-row>\n\n<ion-col col-12 class="left">\n     <ion-label stacked>SERVICES YOU CAN PROVIDE:</ion-label>\n \n  <ion-item>\n    <ion-label>Home Delivery</ion-label>\n    <ion-checkbox [(ngModel)]="data.home" [ngModelOptions]="{standalone: true}" (click)="service(data.home)" ></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cook at client place</ion-label>\n    <ion-checkbox [(ngModel)]="data.clientcook"  [ngModelOptions]="{standalone: true}" (click)="service1(data.clientcook)"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cook at chef place</ion-label>\n    <ion-checkbox [(ngModel)]="data.chefcook" [ngModelOptions]="{standalone: true}" (click)="service2(data.chefcook)"></ion-checkbox>\n  </ion-item>\n\n\n </ion-col>\n\n\n     \n\n   <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CHEF PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm"  [(ngModel)]="data.cookingatchef" name="cookingatchef" #cookingatchef="ngModel"  required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n     <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="cookingatchef.errors && (cookingatchef.dirty || cookingatchef.touched)">\n                    <div [hidden]="!cookingatchef.errors.required">\n                      Cooking time at chef place required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n\n\n\n\n\n          </ion-row>\n    </ion-grid>\n    </ion-list>\n \n\n<!--   <div class="latter">\n<p>AFTER SELECT PREPARATION</p>\n  </div>-->\n\n    \n<ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CLIENT PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm"  [(ngModel)]="data.cookingatclient" name="cookingatclient" #cookingatclient="ngModel"  required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n     <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="cookingatclient.errors && (cookingatclient.dirty || cookingatclient.touched)">\n                    <div [hidden]="!cookingatclient.errors.required">\n                      Cooking time at client place required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n<!--      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked style="margin-top: 17px;">TAGS</ion-label>\n          <ion-textarea placeholder="e.g Paneer" [(ngModel)]="data.tags" required name=\'tags\' #tags="ngModel">Paneer</ion-textarea>\n          <span><ion-icon name="close">Paneer</ion-icon></span>\n\n          \n          \n        </ion-item>\n      </ion-col>-->\n\n\n<!--       <ion-col col-12 class="select">\n         <ion-label stacked class="why">STATUS</ion-label>\n        <ion-item>\n\n     <ion-select class="active" >\n    <ion-option value="Active">Active</ion-option>\n    <ion-option value="Deactive">Deactive</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>-->\n\n\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE <span style="font-size: 11px;">Maximum 3 Photos</span></h2>\n   <button *ngIf="bit<=2" type="button" (click)="CameraAction()" style="margin-top:5px;"><ion-icon name="add" style="font-size: 2.2em;"></ion-icon></button>\n<ion-grid style="padding:0;" *ngIf="arr.length>0">\n  <ion-row>\n      <ion-col col-3 style="padding-left:0px;"  *ngFor = "let ar of arr;let i = index">\n      <div class="image"  >\n      <img class="pick0" src="{{ar}}">\n      <!--<ion-icon name="close" (click)="delimage(i)"></ion-icon>-->\n <!--<img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">-->\n      </div>\n      </ion-col>\n\n\n<!--      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n   <img *ngIf="srcImage1" class="pick0" [src]="srcImage1" >\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>-->\n\n\n<!--      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage2" class="pick0" [src]="srcImage2" >\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>-->\n\n\n\n   \n  </ion-row>\n    \n</ion-grid>\n  \n<!--<ion-col col-3 style="padding-left:0px;"  *ngIf="bit<=2">\n  <div class="input-sec" (click)="CameraAction()">\n      <div class="upld">\n      \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>-->\n</div>\n  \n\n\n \n <div class="plusbtn">\n <button ion-fab mini   (click)="AddProduct(productForm)" [disabled]="!productForm.valid"><ion-icon name="add"></ion-icon></button>\n\n</div>\n  </form>\n  </div>\n  </div>\n</ion-content>\n\n\n\n<!--<ion-footer>\n  <ion-toolbar >\n      <button ion-button full (click)="subcriptionbill()" color="theme-header">Done</button>\n  </ion-toolbar>\n</ion-footer>-->\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\addproduct\addproduct.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_13__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_tags_input__["a" /* IonTagsInputModule */],
        __WEBPACK_IMPORTED_MODULE_9_angular2_tag_input__["RlTagInputModule"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"]])
], AddproductPage);

var AddproductPage_1;
//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountnumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountnumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountnumberPage = (function () {
    function AccountnumberPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AccountnumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountnumberPage');
    };
    AccountnumberPage.prototype.showAlert = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
        var alert = this.alertCtrl.create({
            title: 'Payment',
            subTitle: 'Your payment has been successfully processed.',
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    return AccountnumberPage;
}());
AccountnumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-accountnumber',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\accountnumber\accountnumber.html"*/'<!--\n  Generated template for the AccountnumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Account Number</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Account Details</h2>\n </div>\n \n \n  <ion-list>\n   <ion-item>\n\n          <ion-label stacked>ACCOUNT NUMBER</ion-label>\n             <ion-input type="text"></ion-input>\n             <div class="image" item-end>\n              <img src="assets/image/visa.png">\n             </div>\n        </ion-item>\n\n  <ion-item>\n    <ion-label stacked>CARDHOLDER</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label stacked>IFSC CODE</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n</ion-list>\n\n <div  style="text-align: center;">\n   <button ion-button full  color="theme-header" style="display: block; margin: 0 auto;" (click)="showAlert()">Done</button>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\accountnumber\accountnumber.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], AccountnumberPage);

//# sourceMappingURL=accountnumber.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  import {googlemaps} from 'googlemaps';

/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapmodalPage = (function () {
    function MapmodalPage(navCtrl, navParams, viewCtrl, toastCtrl, loadCtrl, platform, geolocation, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        /**map initialization */
        this.initMap = function () {
            var nill = _this;
            var newShape;
            var map;
            _this.platform.ready().then(function () {
                // alert("working");
                // alert(lat+','+long);
                var Loading = _this.loadCtrl.create({
                    spinner: 'hide',
                    cssClass: 'loader',
                    content: "<img src='assets/image/icons3.gif'>",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.long = resp.coords.longitude;
                        setTimeout(function () {
                            Loading.dismiss();
                        }, 5000);
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        //           Loading.dismiss();
                        // this.initMap( resp.coords.latitude , resp.coords.longitude);
                        //  alert('latitude:'+resp.coords.latitude +''+'longitude:'+ resp.coords.longitude);
                        var latLng = new google.maps.LatLng(_this.lat, _this.long);
                        // alert('lat and long:'+latLng);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //      alert('circle');
                        console.log(latLng.lat(), latLng.lng());
                        _this.l = latLng.lat();
                        _this.lo = latLng.lng();
                        //                   var circle = new google.maps.Circle({
                        //           map : this.map,
                        //           center : new google.maps.LatLng(this.l,this.lo),
                        //           radius: 30 ,
                        //           strokeColor: "#00ff00" ,
                        //           fillColor: "red",
                        //           editable:true,
                        //       });
                        //       
                        //     alert('deg');
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            //        var circle = new google.maps.Circle({
                            //           map : this.map,
                            //           center : new google.maps.LatLng(this.crlat,this.crlng),
                            //           radius: 30 ,
                            //           strokeColor: "#00ff00" ,
                            //           fillColor: "red",
                            //          
                            //       });
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                            //             google.maps.event.addListener(circle,'centre_changed', ((circle)=>{
                            //       var latLng = circle(this.l,this.lo)
                            //       this.crlat = latLng.lat();
                            //      this.crlng = latLng.lng();
                            ////         let latLong = new google.maps.LatLng(this.crlat,this.crlng);  
                            ////         console.log('working');
                            //       document.getElementById("info").innerHTML = circle.getCenter(this.crlat,this.crlng);
                            //    
                            //   }));
                        }));
                        // alert("working1");
                    }).catch(function (error) {
                        var toast = _this.toastCtrl.create({
                            message: 'Something went wrong',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        Loading.dismissAll();
                        var latLng = new google.maps.LatLng(_this.crlat, _this.crlng);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            _this.lat = _this.crlat;
                            _this.long = _this.crlng;
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                        }));
                        console.log('Error getting location', error);
                    });
                });
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (data) {
                    // console.log('My latitude : ', data.coords.latitude);
                    // console.log('My longitude: ', data.coords.longitude);
                    nill.latt = data.coords.latitude;
                    nill.longg = data.coords.longitude;
                    //  alert(nill.latt+','+nill.longg);
                });
            });
        };
        //  this.initMap();
    }
    MapmodalPage.prototype.ngOnInit = function () {
        // alert("neelanshi");
        this.acService = new google.maps.places.AutocompleteService();
        this.infowindow = new google.maps.InfoWindow;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    MapmodalPage.prototype.updateSearch = function () {
        var _this = this;
        delete this.crlat;
        delete this.crlng;
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        //let self = this; 
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, (function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            _this.autocompleteItems = [];
            console.log(predictions);
            predictions.forEach((function (prediction) {
                console.log("abc");
                _this.autocompleteItems.push(prediction);
            }));
        }));
    };
    MapmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    MapmodalPage.prototype.chooseItem = function (item) {
        var _this = this;
        console.log(item);
        this.autocomplete.query = item.description;
        this.geocoder.geocode({ 'placeId': item.place_id }, (function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]);
                    _this.map.setZoom(18);
                    _this.map.setCenter(results[0].geometry.location);
                    _this.crlat = results[0].geometry.location.lat();
                    _this.crlng = results[0].geometry.location.lng();
                    _this.lat = _this.crlat;
                    _this.long = _this.crlng;
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: results[0].geometry.location
                    });
                    _this.infowindow.open(_this.map, marker);
                    //           var circle = new google.maps.Circle({
                    //           map : this.map,
                    //           center : results[0].geometry.location,
                    //           radius: 30 ,
                    //           strokeColor: "#00ff00" ,
                    //           fillColor: "red"
                    //       });
                    _this.infowindow.setContent(results[0].formatted_address);
                    _this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
                        .then(function (coordinates) {
                        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                        _this.lat = coordinates.latitude;
                        _this.long = coordinates.longitude;
                        console.log(_this.lat + ' ' + _this.long);
                    })
                        .catch(function (error) { return console.log(error); });
                    //                   var circle = new google.maps.Circle({
                    //           map : this.map,
                    //           center : results[0].geometry.location,
                    //           radius: 30 ,
                    //           strokeColor: "#00ff00" ,
                    //           fillColor: "red"
                    //       });  
                    //   this.infowindow.open(this.map, circle);
                }
            }
        }));
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    MapmodalPage.prototype.closeModal = function () {
        console.log(this.autocomplete.query);
        console.log(this.lat, this.long);
        this.viewCtrl.dismiss({
            address: this.autocomplete.query,
            lati: this.lat,
            longi: this.long
        });
    };
    return MapmodalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapmodalPage.prototype, "mapElement", void 0);
MapmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mapmodal',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\mapmodal\mapmodal.html"*/'<!--\n  Generated template for the MapmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start (click)="dismiss()">\n      <button ion-button icon-only>\n        \n      </button>\n    </ion-buttons>-->\n\n    <ion-title>Choose Location</ion-title>\n    \n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{ item.description }}\n      </ion-item>\n      </ion-list>\n        \n<div #map id="map"></div>\n   \n    <!--<button ion-button (click)="saveaddress">Save Location</button>-->\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\mapmodal\mapmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MapmodalPage);

//# sourceMappingURL=mapmodal.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddspecialitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AddspecialitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddspecialitiesPage = (function () {
    function AddspecialitiesPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.srcImage = '';
        this.srcImage1 = '';
        this.srcImage2 = '';
        this.arr = [];
        this.array = [];
        //    alert('ioioio');
        console.log(this.arr.length);
    }
    AddspecialitiesPage.prototype.Addspeciality = function (speciality) {
        var _this = this;
        console.log(speciality.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        if (this.srcImage1 == undefined) {
            this.srcImage1 = '';
        }
        if (this.srcImage2 == undefined) {
            this.srcImage2 = '';
        }
        var postdata = {
            id: userid,
            specialties_product: speciality.value.specialtiesproduct,
            add_ingredients: speciality.value.addingredients,
            speciality_cuisine: speciality.value.specialtiescuisine,
            specialities_product_image1: 'jijio',
            specialities_product_image2: this.srcImage1,
            specialities_product_image3: this.srcImage2
        };
        console.log(postdata);
        this.array.push(this.data);
        console.log(this.array.length);
        if (postdata.specialities_product_image1) {
            var serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'add_specialties', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        _this.presentConfirm('Specialities added successfully.<br>You want to add another?');
                        //this.navCtrl.push(TabsPage)
                    }
                }, function (err) {
                    console.log(err);
                    Loading.dismissAll();
                });
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Atleast one image have to be selected',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        _this.data = {
                            'specialtiesproduct': ' ',
                            'addingredients': ' ',
                            'specialtiescuisine': ' ',
                            'specialities_product_image1': '',
                            'specialities_product_image2': '',
                            'specialities_product_image3': ''
                        };
                        _this.srcImage = '';
                        _this.srcImage1 = '';
                        _this.srcImage2 = '';
                        console.log('Neelanshi');
                        console.log(_this.data);
                        console.log(_this.srcImage, _this.srcImage1, _this.srcImage2);
                    }
                }
            ]
        });
        alert.present();
    };
    AddspecialitiesPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
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
                            targetWidth: 767,
                            targetHeight: 600,
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
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('camera working');
                            //            
                        }, function (err) {
                            //            alert(JSON.stringify(err));
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
                            targetWidth: 767,
                            targetHeight: 600,
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
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('gallery working');
                        }, function (err) {
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
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    AddspecialitiesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddspecialitiesPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AddspecialitiesPage;
}());
AddspecialitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addspecialities',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\addspecialities\addspecialities.html"*/'<!--\n  Generated template for the AddspecialitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Add Specialities</ion-title>\n\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1 style="font-size:14px">Add Specialities</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #specialityform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n<!--               <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>ADD SPECIALITY CUISINE </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiescuisine" name=\'specialtiescuisine\' #specialtiescuisine="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger red" color="danger">\n            <div *ngIf="specialtiescuisine.errors && (specialtiescuisine.dirty || specialtiescuisine.touched)">\n              <div [hidden]="!specialtiescuisine.errors.required">\n                Speciality Cuisine is required\n              </div>\n            </div>\n          </div>\n      </ion-col>-->\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>SPECIALITIES PRODUCT </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiesproduct" name=\'specialtiesproduct\' #specialtiesproduct="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger red" color="danger">\n            <div *ngIf="specialtiesproduct.errors && (specialtiesproduct.dirty || specialtiesproduct.touched)">\n              <div [hidden]="!specialtiesproduct.errors.required">\n                Speciality Product is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n          <ion-input type="text"  [(ngModel)]="data.addingredients" name="addingredients" #addingredients="ngModel" required></ion-input>\n        </ion-item>\n             <div class="alert alert-danger red" color="danger">\n            <div *ngIf="addingredients.errors && (addingredients.dirty || addingredients.touched)">\n              <div [hidden]="!addingredients.errors.required">\n                Product Ingridients are required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n  \n\n<br>\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE</h2>\n<ion-grid style="padding:0;">\n  <ion-row>\n    <ion-col col-3 style="padding-left:0px;">\n      <div class="image" >\n\n           <img *ngIf="srcImage" class="pick0" [src]="srcImage" >\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n <!--<img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">-->\n     \n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage1" class="pick0" [src]="srcImage1">\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col><!--\n\n\n-->      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n   <img *ngIf="srcImage2" class="pick0" [src]="srcImage2">\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n<ion-col col-3 style="padding-left:0px;" *ngIf="arr.length<3" >\n  <div class="input-sec"  (click)="CameraAction()">\n      <div class="upld">\n       \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>\n\n   \n  </ion-row>\n</ion-grid>\n</div>\n  \n </form>\n  </div>\n\n \n <div class="plusbtn">\n<button ion-fab mini (click)="Addspeciality(specialityform)" [disabled]="!specialityform.valid" ><ion-icon name="add"></ion-icon></button>\n\n</div>\n  \n\n\n</div>\n</ion-content>\n\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\addspecialities\addspecialities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], AddspecialitiesPage);

//# sourceMappingURL=addspecialities.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessingformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addreference_addreference__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Device } from '@ionic-native/device';


/**
 * Generated class for the ProcessingformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcessingformPage = (function () {
    function ProcessingformPage(navCtrl, toastCtrl, navParams, appsetting, http, 
        // private device: Device,
        alertCtrl, loadingCtrl) {
        //      alert('neelanshiiii');
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bit = false;
        this.data = {};
    }
    ProcessingformPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            if (data1.data.alternative_phone && data1.data.responsible_contact_number) {
                console.log(data1.data.alternative_phone.length);
                var str = data1.data.alternative_phone;
                var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                //  var res3 = str.substring(9,12);
                /************************* */
                var res1 = str.substring(0, 3);
                var res11 = str.substring(3, 6);
                var res21 = str.substring(6, 10);
                data1.data.alternative_phone = res + '-' + res1 + '-' + res2;
                data1.data.responsible_contact_number = res1 + '-' + res11 + '-' + res21;
                if (data1.data) {
                    _this.data.companyname = data1.data.company_name;
                    _this.data.position = data1.data.postion;
                    _this.data.phone = data1.data.alternative_phone;
                    _this.data.address = data1.data.home_address;
                    _this.data.contactname = data1.data.responsible_contact_name;
                    _this.data.contactnumber = data1.data.responsible_contact_number;
                    _this.data.occupationchef = data1.data.occupation_of_chef;
                    _this.data.workaddress = data1.data.chef_address;
                }
            }
        });
    };
    ProcessingformPage.prototype.chefadres = function () {
        this.AlertMsg('Is your home address is same as the work place address?');
        console.log(this.data.address);
    };
    ProcessingformPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.bit = true;
                        if (_this.data.workaddress != '') {
                            _this.data.workaddress = '';
                        }
                        //            this.AlertMsg(msg) 
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Yes',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.data.workaddress = _this.data.address;
                        //            this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        if (this.bit == true) {
        }
        else {
            alert.present();
        }
    };
    ProcessingformPage.prototype.Processing = function (process) {
        var _this = this;
        console.log(process);
        console.log(process.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        if (process.value.phone && process.value.contactnumber) {
            process.value.phone = process.value.phone.replace(/-/g, "");
            process.value.contactnumber = process.value.contactnumber.replace(/-/g, "");
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var postdata = {
                id: userid,
                company_name: process.value.companyname,
                position: process.value.position,
                phone_number: process.value.phone,
                home_address: process.value.address,
                chef_address: process.value.workaddress,
                responsible_contact_name: process.value.contactname,
                responsible_contact_number: process.value.contactnumber,
                occupation_of_chef: process.value.occupationchef,
                experience: process.value.experience
            };
            console.log(postdata);
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/image/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'general_info_update', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addreference_addreference__["a" /* AddreferencePage */]);
                });
            });
        }
    };
    // addreference() {
    //   console.log('ionViewDidLoad ProcessingformPage');
    //   this.navCtrl.push(AddreferencePage);
    // }
    ProcessingformPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ProcessingformPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    ProcessingformPage.prototype.contactvalidation = function (contactnumber) {
        console.log(contactnumber.length);
        if (contactnumber.length == 3) {
            this.data.contactnumber = this.data.contactnumber + '-';
        }
        else if (contactnumber.length == 7) {
            this.data.contactnumber = this.data.contactnumber + '-';
        }
    };
    ProcessingformPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProcessingformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessingformPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.getdata();
    };
    ProcessingformPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return ProcessingformPage;
}());
ProcessingformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-processingform',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\processingform\processingform.html"*/'<!--\n  Generated template for the ProcessingformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n        <button style="height:28px;" start ion-button clear (click)="back()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>Processing Form</ion-title>\n  </ion-toolbar>\n\n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li class="two-circle"></li>\n    <li class="three-circle"></li>\n    \n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n  \n <div class="content-sec">\n   <div class="text-sec">\n  <h2>General Information</h2>\n  </div>\n\n\n\n  \n  <div class="sign">\n      <form class="form-sec" #processform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>COMPANY NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.companyname" name="companyname" #companyname="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="companyname.errors && (companyname.dirty || companyname.touched)">\n                    <div [hidden]="!companyname.errors.required">\n                      Comapany name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>POSITION</ion-label>\n          <ion-input type="text" [(ngModel)]="data.position" name="position" #position="ngModel"  required></ion-input>\n        </ion-item>\n          <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="position.errors && (position.dirty || position.touched)">\n                    <div [hidden]="!position.errors.required">\n                      Position is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>ALTERNATIVE PHONE NUMBER (xxx-xxx-xxxx) </ion-label>         \n          <ion-input  type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="phonevalidation(data.phone)"></ion-input>\n        </ion-item>\n        <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>CHEF HOME ADDRESS</ion-label>\n          <ion-input type="text" [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="address.errors && (address.dirty || address.touched)">\n                    <div [hidden]="!address.errors.required">\n                     Chef home address is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n                 <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>CHEF KITCHEN ADDRESS</ion-label>\n          <ion-input (focus)="chefadres()" type="text" [(ngModel)]="data.workaddress" name="workaddress" #workaddress="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="workaddress.errors && (workaddress.dirty || workaddress.touched)">\n                    <div [hidden]="!workaddress.errors.required">\n                      Chef kitchen address is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RESPONSIBLE CONTACT NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.contactname" name="contactname" #contactname="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="contactname.errors && (contactname.dirty || contactname.touched)">\n                    <div [hidden]="!contactname.errors.required">\n                      Contact name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RESPONSIBLE CONTACT NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.contactnumber" name="contactnumber" #contactnumber="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="contactvalidation(data.contactnumber)"></ion-input>\n        </ion-item>\n      <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="contactnumber.errors && (contactnumber.dirty || contactnumber.touched)">\n                    <div [hidden]="!contactnumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!contactnumber.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n       <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>OCCUPATION OF CHEF</ion-label>\n          <ion-input type="text" [(ngModel)]="data.occupationchef" name="occupationchef" #occupationchef="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="occupationchef.errors && (occupationchef.dirty || occupationchef.touched)">\n                    <div [hidden]="!occupationchef.errors.required">\n                      Occupation of Chef is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n               <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.experience" name="experience" #experience="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger red" color="danger">\n                  <div *ngIf="experience.errors && (experience.dirty || experience.touched)">\n                    <div [hidden]="!experience.errors.required">\n                      Experience is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n<!--               <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="number" placeholder="In Years" value="0" [(ngModel)]="data.experienceyr" name="experienceyr" #experienceyr="ngModel"  min="0" max="100" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger " color="danger">\n                  <div *ngIf="experienceyr.errors && (experienceyr.dirty || experienceyr.touched)">\n                    <div [hidden]="!experienceyr.errors.required">\n                    Field is required\n                    </div>\n                  </div>\n                </ion-col>\n               <ion-col col-6 class="right ">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="number" placeholder="In Months" value="0" [(ngModel)]="data.experiencemn" name="experiencemn" #experiencemn="ngModel" min="0" max="12" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="experienceyr.errors && (experienceyr.dirty || experienceyr.touched)">\n                    <div [hidden]="!experiencemn.errors.required">\n                    Field is required\n                    </div>\n                  </div>\n                </ion-col>-->\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n          <div class="bottombutton">\n         <button ion-button full color="theme-header" (click)="Processing(processform)" [disabled]="!processform.valid">Next</button>\n    </div>\n   </form>\n  </div>\n </div>\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\processingform\processingform.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], ProcessingformPage);

//# sourceMappingURL=processingform.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrastaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlist_orderlist__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ExtrastaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtrastaffPage = (function () {
    // public staff:any = [];
    // public firstname = [];
    function ExtrastaffPage(navCtrl, toastCtrl, navParams, appsetting, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // public extra = [1];
        this.data = {};
        this.arr = [];
        //    alert('extraff profile jdhfjk');
        //console.log(this.extra.length);
    }
    ExtrastaffPage.prototype.Extrastaff = function (staffdata) {
        var _this = this;
        console.log(staffdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        // if(staffdata.value.phone==' '){
        //   console.log(staffdata.value.phone);
        //   staffdata.value.phone= staffdata.value.phone.replace(' ','');}
        if (staffdata.value.phone) {
            console.log('happy');
            staffdata.value.phone = staffdata.value.phone.replace(/-/g, "");
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var postdata = {
                id: userid,
                firstname: staffdata.value.firstname,
                lastname: staffdata.value.lastname,
                occupation: staffdata.value.occupation,
                phone: staffdata.value.phone,
            };
            console.log(postdata);
            this.arr.push(this.data);
            console.log(this.arr.length);
            if (this.arr.length == 6) {
                this.alert('Only 5 Extra Staff could be added');
            }
            else {
                var serialized = this.serializeObj(postdata);
                this.http.post(this.appsetting.myGlobalVar + 'add_staff_info', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    if (response.status == true) {
                        localStorage.setItem('Completed', 'complete');
                        _this.presentConfirm('Extra staff added successfully.<br>You want to add another?');
                        //this.navCtrl.push(TabsPage)
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    ExtrastaffPage.prototype.presentConfirm = function (msg) {
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        // this.data.firstname = ' ';
                        // this.data.lastname = ' ';
                        // this.data.occupation = ' ';
                        // this.data.phone = ' ';
                        _this.data = { 'firstname': ' ',
                            'lastname': ' ',
                            'occupation': ' ',
                            'phone': '' };
                        // this.data.vikki=' ';
                        // this.data={};
                        console.log('vikki');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    ExtrastaffPage.prototype.alert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ExtrastaffPage.prototype.phonevalidation = function (phn) {
        console.log(phn);
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
        // else if (phn.value.phone.length == 12) {
        //   phn.value.phone = phn.value.phone + '-';
        // }
    };
    ExtrastaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Orderlist');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ExtrastaffPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    // tabs() {
    //   this.navCtrl.push(TabsPage);
    // }
    ExtrastaffPage.prototype.orderlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderlist_orderlist__["a" /* OrderlistPage */]);
    };
    return ExtrastaffPage;
}());
ExtrastaffPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-extrastaff',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\extrastaff\extrastaff.html"*/'<!--\n  Generated template for the ExtrastaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Processing Form</ion-title>\n  </ion-navbar>\n  \n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li  class="two-circle"></li>\n    <li class="three-circle"></li>\n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1 style="font-size:14px">Extra Staff</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #extraform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n           <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>FIRST NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger red" color="danger">\n            <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n              <div [hidden]="!firstname.errors.required">\n                First name is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-6 class="right">\n        <ion-item>\n          <ion-label stacked>LAST NAME</ion-label>\n             <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger red" color="danger">\n            <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n              <div [hidden]="!lastname.errors.required">\n                Last name is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n          <ion-item>\n            <ion-label stacked>PROFESSION OR OCCUPATION</ion-label>\n            <ion-input type="text" [(ngModel)]="data.occupation" name="occupation" #occupation="ngModel" required></ion-input>\n            \n          </ion-item>\n          <div class="alert alert-danger red" color="danger">\n              <div *ngIf="occupation.errors && (occupation.dirty || occupation.touched)">\n                <div [hidden]="!occupation.errors.required">\n                  Occupation is required\n                </div>\n              </div>\n            </div>\n        </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PHONE NUMBER</ion-label>\n          <ion-input type="tel" (input)="phonevalidation(data.phone)" [(ngModel)]="data.phone" name="phone" #phone="ngModel" required maxlength="12" pattern="^[0-9]+(-[0-9]+)+$"></ion-input>\n        </ion-item>\n        <div class="alert alert-danger red" color="danger">\n            <div *ngIf="phone.errors && (phone.dirty || phone.touched) && data.phone != \'\'">\n              <div [hidden]="!phone.errors.required">\n               Phone is required\n              </div>\n              <div [hidden]="!phone.errors.pattern">\n                  Only number allowed\n                </div>\n            </div>\n            \n          </div>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n     <!-- <button ion-button full color="theme-header" [disabled]="!extraform.valid" (click)="Extrastaff(extraform)">Next</button> -->\n   </form>\n  </div>\n\n \n <div class="plusbtn" >\n <button ion-fab mini (click)="Extrastaff(extraform)" [disabled]="!extraform.valid" ><ion-icon name="add"></ion-icon></button>\n</div>\n </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\extrastaff\extrastaff.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
], ExtrastaffPage);

//# sourceMappingURL=extrastaff.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialitylistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addspecialities_addspecialities__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editspeciality_editspeciality__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SpecialitylistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecialitylistsPage = (function () {
    function SpecialitylistsPage(navCtrl, navParams, alertCtrl, loadingCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.specialities = [];
        this.specialitylist();
    }
    SpecialitylistsPage.prototype.backtoprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    SpecialitylistsPage.prototype.specialitylist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        console.log(postdata);
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                console.log(data1.data.specialties);
                Loading.dismiss();
                if (data1.status == true) {
                    _this.specialities = data1.data.specialties;
                }
            }, function (err) {
                Loading.dismissAll();
            });
        });
    };
    //   ndelete(proid){
    //        console.log(proid);
    //    let alert = this.alertCtrl.create({
    //      title: 'RAFAHO',
    //      message: 'Are you sure<br>you want to delete?',
    //      buttons: [
    //        {
    //          text: 'NO',
    //          role: 'cancel',
    //          handler: () => {
    //            console.log('Cancel clicked');
    //            // this.navCtrl.push(RegisterPage)
    //          }
    //        },
    //        {
    //          text: 'YES',
    //          role: 'submit',
    //          handler: () => {
    //            console.log('Continue clicked');
    //      let headers = new Headers();
    //    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //    var options = new RequestOptions({ headers: headers });
    //    var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    //    console.log(userid)
    //    var postdata = {
    //      user_id: userid,
    //      id: proid
    //      
    //    };
    ////    let options = new RequestOptions({ 
    ////    body: body,
    ////    method: RequestMethod.Delete
    ////  });
    //    console.log(postdata);
    //
    //     var  Loading = this.loadingCtrl.create({
    //          spinner: 'bubbles',
    //          cssClass: 'loader',
    //          dismissOnPageChange: true
    //        });
    //       var serialized = this.serializeObj(postdata);
    //        Loading.present().then(() => {
    //    this.http.post(this.appsetting.myGlobalVar + 'users/removeProduct', serialized, options).map(res => res.json()).subscribe(data1 => {
    //     console.log(data1);
    //     Loading.dismiss();
    //     if(data1.status==true){
    //           this.ToastMsg(data1.message);
    //           this.specialitylist();
    //           
    //     }
    //
    // },(err)=>{
    //     this.ToastMsg('Something went wrong');
    //     Loading.dismissAll();
    // });
    //          });
    //          }
    //        }
    //      ]
    //    });
    //    alert.present();
    ////  
    //  }
    SpecialitylistsPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SpecialitylistsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SpecialitylistsPage.prototype.addspe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addspecialities_addspecialities__["a" /* AddspecialitiesPage */]);
    };
    SpecialitylistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialitylistsPage');
    };
    SpecialitylistsPage.prototype.editpro = function (dat) {
        localStorage.setItem('Specialitytoedit', JSON.stringify(dat));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editspeciality_editspeciality__["a" /* EditspecialityPage */]);
    };
    return SpecialitylistsPage;
}());
SpecialitylistsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-specialitylists',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\specialitylists\specialitylists.html"*/'<!--\n  Generated template for the SpecialitylistsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n    <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem;" start ion-button clear (click)="backtoprofile()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>SPECIALITY LIST</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only clear class="btnprofile" (click)="addspe()"> <ion-icon name="add" style="font-size: 2.2em;" ></ion-icon></button>\n    </ion-buttons>\n<!--    <ion-icon  ios="ios-add" md="md-add"  (click)="add()"></ion-icon>-->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list >\n    <ion-item *ngFor="let dat of specialities" >\n      <ion-thumbnail item-start>\n         <img [src]="dat.specialities_product_image1">\n\n      </ion-thumbnail>\n        <h2 > {{dat?.specialties_product}}\n</h2>\n        <!--<p>Cuisine:{{dat?.cuisine}} </p>-->\n     <p>Ingredients:{{dat?.add_ingredients}}</p>\n<!--    <p item-end class="rightp"  (click)="edit(dat)">Edit Info</p>\n     <p item-end class="rightp"  >Delete</p>-->\n<ion-icon item-end name="create" (click)="editpro(dat)" class="edit"></ion-icon>\n    </ion-item>\n  \n  \n  </ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\specialitylists\specialitylists.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], SpecialitylistsPage);

//# sourceMappingURL=specialitylists.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StafflistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editstaff_editstaff__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extrastaff_extrastaff__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
/**
 * Generated class for the StafflistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StafflistPage = (function () {
    function StafflistPage(navCtrl, navParams, alertCtrl, loadingCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.data1 = '';
        this.data2 = '';
        this.data3 = '';
        this.data4 = '';
        this.data5 = '';
        this.stafflist();
    }
    StafflistPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
    };
    StafflistPage.prototype.stafflist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        console.log(postdata);
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                Loading.dismiss();
                if (data1.data) {
                    console.log(data1.data.extra_staffs);
                    _this.array = data1.data.extra_staffs;
                    console.log(_this.array);
                }
                localStorage.removeItem('Extrastaff');
                //         localStorage.removeItem('Extrastaff2');
                //          localStorage.removeItem('Extrastaff3');
                //           localStorage.removeItem('Extrastaff4');
                //            localStorage.removeItem('Extrastaff5');
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
                Loading.dismissAll();
            });
        });
    };
    StafflistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    StafflistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StafflistPage');
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    StafflistPage.prototype.backtostafflist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    StafflistPage.prototype.ndelete = function (del) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Are you sure<br>you want to delete?',
            buttons: [
                {
                    text: 'NO',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'YES',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                        //    var options = new RequestOptions({ headers: headers });
                        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
                        console.log(userid + ',' + del);
                        var body = {
                            user_id: userid,
                            staff_id: del
                        };
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
                            body: body,
                            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Delete
                        });
                        //    console.log(postdata);
                        //    var serialized = 'user_id=5a33981e31120335884ecb12&staff_id=5a3398dc31120335884ecb13';
                        //    console.log(serialized);
                        _this.http.request('http://rafao.us-west-2.elasticbeanstalk.com/api/extra_staff/?', options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                            console.log(data1);
                            if (data1.status == true) {
                                _this.ToastMsg(data1.message);
                                _this.stafflist();
                            }
                            //     this.navCtrl.push(StafflistPage);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    StafflistPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    StafflistPage.prototype.edit = function (dat) {
        localStorage.setItem('Extrastaff', JSON.stringify(dat));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editstaff_editstaff__["a" /* EditstaffPage */]);
    };
    return StafflistPage;
}());
StafflistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stafflist',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\stafflist\stafflist.html"*/'<!--\n  Generated template for the StafflistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n    <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem;" start ion-button clear (click)="backtostafflist()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>STAFF LIST</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only clear class="btnprofile" (click)="add()"> <ion-icon name="add" style="font-size: 2.2em;" ></ion-icon></button>\n    </ion-buttons>\n<!--    <ion-icon  ios="ios-add" md="md-add"  (click)="add()"></ion-icon>-->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list >\n    <ion-item *ngFor="let dat of array" >\n    \n        <h2>{{dat?.firstname}} {{dat?.lastname}} <span (click)="edit(dat)"><ion-icon name="create"></ion-icon>\n</span></h2>\n        <p>{{dat?.profession}} </p>\n     <p>{{dat?.phonenumber}} <span (click)="ndelete(dat?._id)"> <ion-icon name="trash"></ion-icon> </span></p>\n<!--    <p item-end class="rightp"  (click)="edit(dat)">Edit Info</p>-->\n<!--     <p item-end class="rightp"  >Delete</p>-->\n    </ion-item>\n  \n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\stafflist\stafflist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], StafflistPage);

//# sourceMappingURL=stafflist.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editproduct_editproduct__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addproduct_addproduct__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, navParams, alertCtrl, loadingCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.products = [];
        this.productlist();
    }
    ProductlistPage.prototype.addpro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addproduct_addproduct__["a" /* AddproductPage */]);
    };
    ProductlistPage.prototype.productlist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        console.log(postdata);
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                console.log(data1.data.products);
                Loading.dismiss();
                if (data1.status == true) {
                    _this.products = data1.data.products;
                }
            }, function (err) {
                Loading.dismissAll();
            });
        });
    };
    ProductlistPage.prototype.ndelete = function (proid) {
        var _this = this;
        console.log(proid);
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Are you sure<br>you want to delete?',
            buttons: [
                {
                    text: 'NO',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'YES',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
                        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
                        console.log(userid);
                        var postdata = {
                            user_id: userid,
                            id: proid
                        };
                        //    let options = new RequestOptions({ 
                        //    body: body,
                        //    method: RequestMethod.Delete
                        //  });
                        console.log(postdata);
                        var Loading = _this.loadingCtrl.create({
                            spinner: 'bubbles',
                            cssClass: 'loader',
                            dismissOnPageChange: true
                        });
                        var serialized = _this.serializeObj(postdata);
                        Loading.present().then(function () {
                            _this.http.post(_this.appsetting.myGlobalVar + 'users/removeProduct', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                                console.log(data1);
                                Loading.dismiss();
                                if (data1.status == true) {
                                    _this.ToastMsg(data1.message);
                                    _this.productlist();
                                }
                            }, function (err) {
                                _this.ToastMsg('Something went wrong');
                                Loading.dismissAll();
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
        //  
    };
    ProductlistPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ProductlistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.backtoprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    ProductlistPage.prototype.editpro = function (dat) {
        localStorage.setItem('Producttoedit', JSON.stringify(dat));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editproduct_editproduct__["a" /* EditproductPage */]);
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productlist',template:/*ion-inline-start:"D:\bawarchibhojnalya\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n    <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem;" start ion-button clear (click)="backtoprofile()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>PRODUCT LIST</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only clear class="btnprofile" (click)="addpro()"> <ion-icon name="add" style="font-size: 2.2em;" ></ion-icon></button>\n    </ion-buttons>\n<!--    <ion-icon  ios="ios-add" md="md-add"  (click)="add()"></ion-icon>-->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list >\n    <ion-item *ngFor="let dat of products" >\n      <ion-thumbnail item-start>\n         <img [src]="dat.product_image0">\n\n      </ion-thumbnail>\n        <h2 > {{dat?.product_name}}<span (click)="editpro(dat)" ><ion-icon name="create"></ion-icon>\n</span></h2>\n        <p>Cuisine:{{dat?.cuisine}} </p>\n     <p>Price:${{dat?.product_price}}<span (click)="ndelete(dat?._id)"> <ion-icon name="trash"></ion-icon> </span></p>\n<!--    <p item-end class="rightp"  (click)="edit(dat)">Edit Info</p>-->\n<!--     <p item-end class="rightp"  >Delete</p>-->\n    </ion-item>\n  \n  \n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\bawarchibhojnalya\src\pages\productlist\productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map