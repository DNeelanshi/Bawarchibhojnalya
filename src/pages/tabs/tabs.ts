import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalenderPage } from '../calender/calender';
import { ChatPage } from '../chat/chat';
// import { OrderViewPage } from '../orderview/orderview';
import { AccountsPage } from '../accounts/accounts';
import { ProfilePage } from '../profile/profile';

import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalenderPage;
  tab3Root = ChatPage;
  tab4Root = AccountsPage;
  tab5Root = ProfilePage;

   constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public events : Events
  ) {
    // this.navCtrl.push(OrderViewPage);
    
  }
  tabIndex(event){
    console.log(event);
         console.log('calling----'+event.srcElement);

    var domevent = event.srcElement.parentNode.id || event.path[1].id;
    console.log(domevent)
    var split = domevent.split('-');
    var target = split[2];
    console.log(target)
    
    if (target == '1') {
        console.log('hogya');
      this.events.publish('index', '1');     
    } else if (target == '2') {
      this.events.publish('index', '2'); 
    } else if(target == '3'){
         this.events.publish('index', '3');
    }
     else if(target == '4'){
         this.events.publish('index', '4');
    }else if(target == '0'){
        this.events.publish('index','0');
    }
}
}
