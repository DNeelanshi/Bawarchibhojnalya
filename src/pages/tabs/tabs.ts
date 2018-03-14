import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalenderPage } from '../calender/calender';
import { ChatPage } from '../chat/chat';
// import { OrderViewPage } from '../orderview/orderview';
import { AccountsPage } from '../accounts/accounts';
import { ProfilePage } from '../profile/profile';
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
}
