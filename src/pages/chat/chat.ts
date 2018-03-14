import { Content } from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import { OrderviewPage } from '../orderview/orderview';
import { CancelorderviewPage } from '../cancelorderview/cancelorderview';
import {PendingorderviewPage} from '../pendingorderview/pendingorderview';
import {HistoryorderviewPage} from '../historyorderview/historyorderview';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as moment from 'moment';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
@ViewChild(Content) content: Content;
chef:any=[];
data:any={}
chat:any;
date:any;
bit=0;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private platform: Platform,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
//      this.addmessage();
     
      
  }
    ionViewWillEnter(): void {
        this.scrollToBottom();
    }
  scrollToTop() {
    this.content.scrollToTop();
  }
    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom();
        });
    }
  ionViewDidLoad() {
       this.content.scrollToBottom(0);
    console.log('ionViewDidLoad ChatPage');
     this.chef = JSON.parse(localStorage.getItem('UserInfo'));
    console.log( this.chef);
    this.getchat();
  }
addmessage(msg){
    console.log(msg)
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var postdata = {
   chef_id:this.chef._id,
    user_id:'5a675f513c053e2484a4cb76',
    message:msg,
    sender_id:this.chef._id
    }
 
      var serialized = this.serializeObj(postdata);
//           var Loading = this.loadCtrl.create({
//            spinner: 'hide',
//            cssClass: 'loader',
//            content: "<img src='assets/image/icons3.gif'>",
//            dismissOnPageChange:true
//     });
//     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'chats/addmessage', serialized, options).map(res => res.json()).subscribe(data1 => {
           console.log('get msg')
           console.log(data1);
//        Loading.dismiss();
        if(data1.status == true){
//              this.chat = data1.data[0].chat_messages;
//               for(var i =0; i<this.chat.length;i++){
//                   this.chat[i].created_at = moment(this.chat[i].created_at).format('llll').substring(18,26);
//              console.log(this.chat[i].created_at);
//          }
            this.getchat();
             
        }else{
             let toast = this.toastCtrl.create({
        message: data1.message,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
        }
        },(err)=>{
             let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
//            Loading.dismissAll();
        })
//        })
}
getchat(){
    console.log(this.bit)
    console.log('getchat');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     var postdata1 = {
      chef_id:this.chef._id,
      user_id:'5a675f513c053e2484a4cb76',
      page:this.bit
    
           }
      var serialized = this.serializeObj(postdata1);
      this.http.post(this.appsetting.myGlobalVar + 'chats/getchat', serialized, options).map(res => res.json()).subscribe(res => {
          console.log('get chat')
          console.log(res);
          if( res.data[0].length > 7){
          this.bit++;}
          this.content.scrollToBottom(300);
           this.date = new Date().toLocaleTimeString()
      console.log(this.date);
          this.chat = res.data[0].chat_messages;
         for(var i =0; i<this.chat.length;i++){
                   this.chat[i].created_at = moment(this.chat[i].created_at).format('llll').substring(18,26);
              console.log(this.chat[i].created_at);
          }
          
      })
}
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
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}
