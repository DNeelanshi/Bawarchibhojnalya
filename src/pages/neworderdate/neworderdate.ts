import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Component } from '@angular/core';
import { OrderviewcalendarPage } from '../orderviewcalendar/orderviewcalendar';
import { CancelorderviewcalendarPage } from '../cancelorderviewcalendar/cancelorderviewcalendar';
import {PendingorderviewcalendarPage} from '../pendingorderviewcalendar/pendingorderviewcalendar';
import {HistoryorderviewcalendarPage} from '../historyorderviewcalendar/historyorderviewcalendar';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as moment from 'moment';
/**
 * Generated class for the NeworderdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neworderdate',
  templateUrl: 'neworderdate.html',
})

export class NeworderdatePage {
  public pet;
  chef:any=[];
  Orders:any=[];
  earned:any=0;
  notavail:any = 0;
   notavail1:any = 0;
    notavail2:any = 0;
     notavail3:any = 0;
   activeorders:any=[];
   pendingorders:any=[];
    historyorders:any=[];
     canceledorders:any=[];
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private platform: Platform,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
       this.pet = "ACTIVEORDER";
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange:true
     });
     Loading.present().then(() => {
         
      this.getdata();
    setTimeout(() => {
    Loading.dismiss();
  }, 3000);

      })
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
getdata(){
     this.chef = JSON.parse(localStorage.getItem('UserInfo'));
    this.Orders = JSON.parse(localStorage.getItem('particualrorders'));
        console.log( this.Orders);
        
        for (var y = 0; y < this.Orders.length;y++){
            if(this.Orders[y].order_status == 0){
                    
                 this.historyorders.push(this.Orders[y]);
                  this.historyorder();
            }else if(this.Orders[y].order_status == 5){
                
                 this.canceledorders.push(this.Orders[y]);
                
                       this.canceledorder();
            }else if(this.Orders[y].order_status == 1){
             
                this.activeorders.push(this.Orders[y]);
                  this.activeorder();
            }else if(this.Orders[y].order_status == 2){
               
                this.pendingorders.push(this.Orders[y]);
               this.pendingorder();
   
        
            }
        }
       
        console.log( this.activeorders);
         console.log( this.pendingorders);
          console.log( this.historyorders);
           console.log( this.canceledorders);
            if(this.pendingorders == ''){
               this.notavail1 =1;
           }else{
               this.notavail1 =0;
           }
             if(this.activeorders == ''){
               this.notavail =1;
           }else{
               this.notavail =0;
           }
            if(this.historyorders == ''){
               this.notavail2 =1;
           }else{
               this.notavail2 =0;
           } 
       if(this.canceledorders == ''){
               this.notavail3 =1;
           }else{
               this.notavail3 =0;
           }
}
  activeorder(){ 
      var j =this;
        this.activeorders.forEach(function(value,key){
              console.log(value);
              value.products.forEach(function(prodvalue,prodkey){
                  console.log(prodvalue);
                  j.chef.products.forEach(function(chefvalue,chefkey){
                      console.log(chefvalue);
                      
                      if(prodvalue.product_id === chefvalue._id){
                          console.log('matched');
                          prodvalue.image = chefvalue.product_image0;
                          prodvalue.minorder = chefvalue.minimum_order;
                          prodvalue.prodprice = chefvalue.product_price
                     
                      }else{
                    
                          console.log('not matched');
                      }
                  })
              })
          })
              for(var d=0;d<this.activeorders.length;d++){
                       this.activeorders[d].booking_datetime = this.activeorders[d].booking_datetime.replace(/T/gi, " ");
                 this.activeorders[d].booking_datetime = this.activeorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                     }
                     this.getInfo()
  }
    getInfo(){
      var temp = this;
      console.log('getinfo')
      console.log(this.activeorders);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.activeorders.forEach(function(value,key){
                        var user = value.user_id
                console.log(user);
                var postdata1 = {
                      id:user
                         }
              var serialized = temp.serializeObj(postdata1);
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;
//                temp.users1.push(res.data.firstname);
//                console.log(this.users1);
              
            }) 
    })
    
    console.log(this.activeorders);

  }
    order(products){
      
      console.log(products);
       localStorage.setItem('Productorders',JSON.stringify(products));
  this.navCtrl.push(OrderviewcalendarPage);
}
 /*************************************pending*******************************************************************************************/
 pendingorder(){
       var j =this;
      
               this.pendingorders.forEach(function(value,key){
              console.log(value);
              value.products.forEach(function(prodvalue,prodkey){
                  console.log(prodvalue);
                  j.chef.products.forEach(function(chefvalue,chefkey){
                      console.log(chefvalue);
                      
                      if(prodvalue.product_id === chefvalue._id){
                          console.log('matched');
                          prodvalue.image = chefvalue.product_image0;
                          prodvalue.minorder = chefvalue.minimum_order;
                            prodvalue.prodprice = chefvalue.product_price
                      }else{
                    
                          console.log('not matched');
                      }
                  })
              })
          })
              
              for(var d=0;d<this.pendingorders.length;d++){
                       this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/T/gi, " ");
                 this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                     }
                     this.getInfo1()
  }
    getInfo1(){
      var temp = this;
      console.log('getinfo')
      console.log(this.pendingorders);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.pendingorders.forEach(function(value,key){
                        var user = value.user_id
                console.log(user);
                var postdata1 = {
                      id:user
                         }
              var serialized = temp.serializeObj(postdata1);
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;

              
            }) 
    })
    
    console.log(this.pendingorders);

  }
     order1(productss){
      
      console.log(productss);
       localStorage.setItem('PendingProductorders',JSON.stringify(productss));
  this.navCtrl.push(PendingorderviewcalendarPage);
}
  /*************************************************************************history********************************************************/
    historyorder(){
                var j =this;
             
               this.historyorders.forEach(function(value,key){
              console.log(value);
              value.products.forEach(function(prodvalue,prodkey){
                  console.log(prodvalue);
                  j.chef.products.forEach(function(chefvalue,chefkey){
                      console.log(chefvalue);
                      
                      if(prodvalue.product_id === chefvalue._id){
                          console.log('matched');
                          prodvalue.image = chefvalue.product_image0;
                          prodvalue.minorder = chefvalue.minimum_order;
                        prodvalue.prodprice = chefvalue.product_price
                      }else{
                    
                          console.log('not matched');
                      }
                  })
              })
          })
              
                          for(var d=0;d<this.historyorders.length;d++){
                       this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/T/gi, " ");
                 this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                     }
                     
                     this.getInfo2()
  }
    getInfo2(){
      var temp = this;
      console.log('getinfo')
      console.log(this.historyorders);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.historyorders.forEach(function(value,key){
                        var user = value.user_id
                console.log(user);
                var postdata1 = {
                      id:user
                         }
              var serialized = temp.serializeObj(postdata1);
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;

              
            }) 
    })
     for (var f = 0; f < this.historyorders.length;f++){
     
        for (var g = 0; g < this.historyorders[f].products.length;g++){
            parseInt(this.historyorders[f].products[g].quantity)* this.historyorders[f].products[g].minorder;
    this.earned = this.earned + (parseInt(this.historyorders[f].products[g].quantity)* this.historyorders[f].products[g].minorder)
    }
    }
    console.log(this.earned);
    console.log(this.historyorders);

  }
     order2(productS){
      
      console.log(productS);
       localStorage.setItem('HistoryProductorders',JSON.stringify(productS));
  this.navCtrl.push(HistoryorderviewcalendarPage);
}
  /*************************************************************cancelorders********************************************************************/
    canceledorder(){
       
      
             
     var j =this;
              
               this.canceledorders.forEach(function(value,key){
              console.log(value);
              value.products.forEach(function(prodvalue,prodkey){
                  console.log(prodvalue);
                  j.chef.products.forEach(function(chefvalue,chefkey){
                      console.log(chefvalue);
                      
                      if(prodvalue.product_id === chefvalue._id){
                          console.log('matched');
                          prodvalue.image = chefvalue.product_image0;
                          prodvalue.minorder = chefvalue.minimum_order;
                      prodvalue.prodprice = chefvalue.product_price
                      }else{
                    
                          console.log('not matched');
                      }
                  })
              })
          })
              
                           for(var d=0;d<this.canceledorders.length;d++){
                       this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/T/gi, " ");
                 this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
                     }
                     this.getInfo3()
  }
    getInfo3(){
      var temp = this;
      console.log('getinfo')
      console.log(this.canceledorders);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.canceledorders.forEach(function(value,key){
                        var user = value.user_id
                console.log(user);
                var postdata1 = {
                      id:user
                         }
              var serialized = temp.serializeObj(postdata1);
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                console.log(res);
                console.log(value);
                value.name = res.data.firstname;

              
            }) 
    })
    
    console.log(this.canceledorders);

  }
     order3(producttSS){
      
      console.log(producttSS);
       localStorage.setItem('cancelProductorders',JSON.stringify(producttSS));
  this.navCtrl.push(CancelorderviewcalendarPage);
}
  
      serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NeworderdatePage');
  }

}
