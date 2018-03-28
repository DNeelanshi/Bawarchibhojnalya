import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Appsetting } from '../providers/appsetting';

import {Http, Headers, RequestOptions} from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { SigninPage } from '../pages/signin/signin';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { ExtrastaffPage} from '../pages/extrastaff/extrastaff';
import { ProcessingformPage} from '../pages/processingform/processingform';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';

  constructor(platform: Platform,  splashScreen: SplashScreen,public statusBar: StatusBar,public http:Http,
  public appsetting: Appsetting) {
   alert('Welcome to Rafaho.');
//    console.log(localStorage.getItem('Completed'));
      if (localStorage.getItem('UserInfo'))  {
  	let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	let options = new RequestOptions({ headers: headers });
         var userid=JSON.parse(localStorage.getItem('UserInfo'))._id;
    console.log(userid);

		var postdata = {
			id: userid
		};
		

      var serialized = this.serializeObj(postdata);
      console.log(postdata);
this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(response => {
			  // this.Loading.dismiss();
  console.log(response);
//			
  if(response.data.prossing_form==1){
      this.rootPage=TabsPage;
  }else{
       this.rootPage = SigninPage;
  }

		})}
      if(localStorage.getItem('UserInfo') && localStorage.getItem('Completed')){
            // if(localStorage.getItem('UserInfo')){
      console.log(localStorage.getItem('Completed'));
      console.log(localStorage.getItem('UserInfo'));
      this.rootPage = TabsPage;
    }
   else if(localStorage.getItem('Completed')){
    console.log(localStorage.getItem('Completed'));
       this.rootPage = SigninPage;
      }
      
       else{
        console.log(localStorage.getItem('Completed'));
        this.rootPage = SigninPage;
       }
   //  }
    platform.ready().then(() => {
     statusBar.overlaysWebView(true);
      statusBar.hide();
    
      splashScreen.hide();
    });

  }
     serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
 
}
