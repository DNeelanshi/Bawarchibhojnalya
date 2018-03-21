import { Component } from '@angular/core';
import { OrderviewPage } from '../orderview/orderview';
import { CancelorderviewPage } from '../cancelorderview/cancelorderview';
import {PendingorderviewPage} from '../pendingorderview/pendingorderview';
import {HistoryorderviewPage} from '../historyorderview/historyorderview';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController, Platform ,Events} from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pet;
  chef:any;
  userlength:any;
  imgg:any
  notavail:any=0;
   notavail1:any=0;
    notavail2:any=0;
     notavail3:any=0;
  datetime:any;
  earned:any=0;
   users3:any=[];
  bookdt:any=[];
  orders:any=[];
  service:any=[];
   pendingorders:any=[];
    historyorders:any=[];
     canceledorders:any=[];
  public users1:any=[];
   public users2:any=[];
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private platform: Platform,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
       public events: Events,
      private toastCtrl:ToastController, public http: Http) {
      this.activeorder();
    this.pendingorder();
    this.historyorder();
    this.canceledorder();

      this.platform.ready().then(() => {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;

            this.platform.registerBackButtonAction(() => {
                // get current active page
                let view = this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    this.platform.exitApp(); //Exit from app
                } else {
                    // alert('Press back again to exit App?');
                    let toast = this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });
                 events.subscribe('index', (res) => {
             console.log(res);
       if(res == 0){
           this.activeorder();
    this.pendingorder();
    this.historyorder();
    this.canceledorder();
       }
            })
    this.pet = "ACTIVEORDER";
  
//    alert('ajksdfh');
  }
  
      doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
        this.activeorder();
        this.canceledorder();
    this.pendingorder();
    this.historyorder();
   
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }
  order(products){
      
      console.log(products);
       localStorage.setItem('Productorders',JSON.stringify(products));
  this.navCtrl.push(OrderviewPage);
}
activeorder(){
    var j = this;
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.chef = JSON.parse(localStorage.getItem('UserInfo'));
    console.log(this.chef);
    var postdata = {
        order_status:1,
        chef_id:this.chef._id
    }
      var serialized = this.serializeObj(postdata);
           var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange:true
     });
     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(res => res.json()).subscribe(data1 => {
        console.log(data1);
        Loading.dismiss();
       if(data1.status == true){
            this.notavail=0;
           console.log(this.chef.products);
          data1.data.forEach(function(value,key){
              console.log(value);
              value.products.forEach(function(prodvalue,prodkey){
                  console.log(prodvalue);
                  j.chef.products.forEach(function(chefvalue,chefkey){
                      console.log(chefvalue);
                      
                      if(prodvalue.product_id === chefvalue._id){
                          console.log('matched');
                          prodvalue.image = chefvalue.product_image0;
                          prodvalue.minorder = chefvalue.minimum_order;
                           prodvalue.prodprice = chefvalue.product_price;
                          j.imgg = 1;
                      }else{
                      j.imgg = 0;
                          console.log('not matched');
                      }
                  })
              })
          })

          this.orders = data1.data;
          for(var k = 0;k< this.orders.length;k++){
              if(this.orders[k].order_prefrence == 1){
                 this.orders[k].order_prefrence ='Cook at Chef place'
              }else if(this.orders.order_prefrence == 2){
                  this.orders[k].order_prefrence ='Cook at Client Place'
              }else{
                  this.orders[k].order_prefrence='Home Delivery'
              }
          }
//          var neel = moment(this.orders[1].booking_datetime).format('LLLL')
//                console.log(neel);
                for(var d=0;d<this.orders.length;d++){
//                    this.orders[d].booking_datetime = moment(this.orders[d].booking_datetime).format('LLLL')
//                    console.log(this.orders[d].booking_datetime);
//                    var str2 = new Date(this.orders[d].booking_datetime).toLocaleTimeString();
//                this.orders[d].booking_datetime = str1+' '+str2;
                 this.orders[d].booking_datetime = this.orders[d].booking_datetime.replace(/T/gi, " ");
                 this.orders[d].booking_datetime = this.orders[d].booking_datetime.replace(/:00.000Z/gi, " ");
         
this.getInfo();
          
       }}else{
           this.notavail=1;
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

  getInfo(){
      var temp = this;
      console.log('getinfo')
      console.log(this.orders);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    this.orders.forEach(function(value,key){
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
    
    console.log(this.orders);

  }
  
  //*****-----------------------------------pending orders--------------------------------------------*****//
  
  pendingorder(){
    var j = this;
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers }); 
      var postdata = {
        order_status:2,
        chef_id:this.chef._id
    }
    var serialized = this.serializeObj(postdata);
     this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(res => res.json()).subscribe(response => {
         console.log(response);
             if(response.status == true){
            this.notavail1=0;
           console.log(this.chef.products);
          response.data.forEach(function(value,key){
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
                          j.imgg = 1;
                      }else{
                      j.imgg = 0;
                          console.log('not matched');
                      }
                  })
              })
          })

          this.pendingorders = response.data;
             for(var k = 0;k< this.pendingorders.length;k++){
              if(this.pendingorders[k].order_prefrence == 1){
                 this.pendingorders[k].order_prefrence ='Cook at Chef place'
              }else if(this.pendingorders.order_prefrence == 2){
                  this.pendingorders[k].order_prefrence ='Cook at Client Place'
              }else{
                  this.pendingorders[k].order_prefrence='Home Delivery'
              }
          }
            for(var d=0;d<this.pendingorders.length;d++){
//                this.pendingorders[d].booking_datetime= new Date(this.pendingorders[d].booking_datetime).toISOString();
        this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/T/gi, " ");
         this.pendingorders[d].booking_datetime = this.pendingorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }

this.getInfo1();
          
       }else{
           this.notavail1= 1;
       }
     })
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
//                temp.users1.push(res.data.firstname);
//                console.log(this.users1);
              
            }) 
    })
    
    console.log(this.pendingorders);

  }
   order1(productss){
      
      console.log(productss);
       localStorage.setItem('PendingProductorders',JSON.stringify(productss));
  this.navCtrl.push(PendingorderviewPage);
}




//*****-----------------------------------Order history--------------------------------------------*****//
  
  historyorder(){
    var j = this;
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers }); 
      var postdata = {
        order_status:0,
        chef_id:this.chef._id
    }
    var serialized = this.serializeObj(postdata);
     this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(res => res.json()).subscribe(response1 => {
         console.log(response1);
             if(response1.status == true){
            this.notavail2=0;
           console.log(this.chef.products);
          response1.data.forEach(function(value,key){
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
                          j.imgg = 1;
                      }else{
                      j.imgg = 0;
                          console.log('not matched');
                      }
                  })
              })
          })

          this.historyorders = response1.data;
                       for(var k = 0;k< this.historyorders.length;k++){
              if(this.historyorders[k].order_prefrence == 1){
                 this.historyorders[k].order_prefrence ='Cook at Chef place'
              }else if(this.historyorders.order_prefrence == 2){
                  this.historyorders[k].order_prefrence ='Cook at Client Place'
              }else{
                  this.historyorders[k].order_prefrence='Home Delivery'
              }
          }
                for(var d=0;d<this.historyorders.length;d++){
                    
//        this.historyorders[d].booking_datetime = new Date(this.historyorders[d].booking_datetime).toISOString();
                      this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/T/gi, " ");
         this.historyorders[d].booking_datetime = this.historyorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }

this.getInfo2();
          
       }else{
           this.notavail2=1;
       }
     })
  }
  
    getInfo2(){
        this.earned = 0;
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
//                temp.users1.push(res.data.firstname);
//                console.log(this.users1);
              
            }) 
    })
    
    console.log(this.historyorders);
    for (var f = 0; f < this.historyorders.length;f++){
     
        for (var g = 0; g < this.historyorders[f].products.length;g++){
    this.earned = this.earned + (this.historyorders[f].products[g].quantity * this.historyorders[f].products[g].prodprice)
    }
    }
       console.log(this.earned);
  }
   order2(productS){
      
      console.log(productS);
       localStorage.setItem('HistoryProductorders',JSON.stringify(productS));
  this.navCtrl.push(HistoryorderviewPage);
}



//*****-----------------------------------Cancelled orders--------------------------------------------*****//
  
  canceledorder(){
    var j = this;
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers }); 
      var postdata = {
        order_status:5,
        chef_id:this.chef._id
    }
    var serialized = this.serializeObj(postdata);
     this.http.post(this.appsetting.myGlobalVar + 'order/getorder_chef', serialized, options).map(res => res.json()).subscribe(response2 => {
         console.log(response2);
      
             if(response2.status == true){
            this.notavail3=0;
           console.log(this.chef.products);
          response2.data.forEach(function(value,key){
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
                          j.imgg = 1;
                      }else{
                      j.imgg = 0;
                          console.log('not matched');
                      }
                  })
              })
          })

          this.canceledorders = response2.data;
              for(var k = 0;k< this.canceledorders.length;k++){
              if(this.canceledorders[k].order_prefrence == 1){
                 this.canceledorders[k].order_prefrence ='Cook at Chef place'
              }else if(this.canceledorders.order_prefrence == 2){
                  this.canceledorders[k].order_prefrence ='Cook at Client Place'
              }else{
                  this.canceledorders[k].order_prefrence='Home Delivery'
              }
          }
                for(var d=0;d<this.canceledorders.length;d++){
//        this.canceledorders[d].booking_datetime =  new Date(this.canceledorders[d].booking_datetime).toISOString()
                      this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/T/gi, " ");
         this.canceledorders[d].booking_datetime = this.canceledorders[d].booking_datetime.replace(/:00.000Z/gi, " ");
        }

this.getInfo3();
          
       }else{
           this.notavail3=1;
       }
     })
  }
  
    getInfo3(){
      var temp = this;
      console.log('getinfo')
      console.log(this.historyorders);
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
              temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res1 => {
                console.log(res1);
                console.log(value);
                value.name = res1.data.firstname;
               
//                temp.users1.push(res.data.firstname);
//                console.log(this.users1);
              
            }) 
    })
    
     console.log(this.canceledorders);
 
  }
   order3(producttSS){
      
      console.log(producttSS);
       localStorage.setItem('cancelProductorders',JSON.stringify(producttSS));
  this.navCtrl.push(CancelorderviewPage);
}
}
