import {Component} from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CalendarModule, CalendarComponentOptions} from "ion2-calendar";
//import { Component } from '@angular/core';
import {OrderviewPage} from '../orderview/orderview';
import {CancelorderviewPage} from '../cancelorderview/cancelorderview';
import {PendingorderviewPage} from '../pendingorderview/pendingorderview';
import {HistoryorderviewPage} from '../historyorderview/historyorderview';
import {IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import * as moment from 'moment';
import {NeworderdatePage} from '../neworderdate/neworderdate';
//import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
//import { CalendarComponentOptions } from 'ion2-calendar'
/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-calender',
    templateUrl: 'calender.html',
})
export class CalenderPage {
    color: any;
    chef: any = [];
    status: any = Boolean;
    bookingdate: any = [];
    bookingdate1: any = [];
    isSame: any;
    isAfter: any;
    isBefore: any;
    isSame1: any;
    isAfter1: any;
    isBefore1: any;
    particulardata: any = [];
    particulardata1: any = [];
    colour; any;
    previousdateMulti: any = [];
    currentdateMulti: any = [];
    upcomingdateMulti: any = [];
    dates: any = [];
move:any=0;

    eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()

    };

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private alertCtrl: AlertController,
        private loadCtrl: LoadingController,
        public appsetting: Appsetting,
        private toastCtrl: ToastController, public http: Http) {
        this.getdata();
//        this.loadEvents();
    }
    loadEvents() {
        console.log(this.previousdateMulti);
        this.eventSource = this.orderEvents();//this.previousdateMulti;/
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        //        this.navCtrl.push(NeworderdatePage);
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {

        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }
    onCurrentDateChanged(event: Date) {
        console.log(event);
        this.particulardata1 = [];
        this.move =0;
        var today = new Date();
        if (moment(event).isSame(this.calendar.currentDate)) {
            console.log('baby');

        } else {

            for (var x = 0; x < this.particulardata.length; x++) {
                this.particulardata[x].booking_datetime = this.particulardata[x].booking_datetime.replace(/T/gi, " ");
                this.particulardata[x].booking_datetime = this.particulardata[x].booking_datetime.replace(/:00.000Z/gi, " ");
                console.log(event.toDateString(), new Date(this.particulardata[x].booking_datetime).toDateString())

                console.log(moment(event.toDateString()).isSame(new Date(this.particulardata[x].booking_datetime).toDateString()));
                if (moment(event.toDateString()).isSame(new Date(this.particulardata[x].booking_datetime).toDateString()) == true) {
                    console.log(this.particulardata[x]);
                    this.particulardata1.push(this.particulardata[x])
                    console.log(this.particulardata1);
                       this.move = 1;
                    localStorage.setItem('particualrorders', JSON.stringify(this.particulardata1))
                 console.log(this.move)
                }
                           
            }
            if(this.move == 1){
//              alert('call hua');
                    this.navCtrl.push(NeworderdatePage);
                    }else{
                      
                    }
        }
    }
    orderEvents() {

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
                startTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                events.push({
                    // title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,

                    //allDay: true
                });



            }
        } if (this.upcomingdateMulti != '') {

            var events1 = [];

            for (var i = 0; i < this.upcomingdateMulti.length; i += 1) {
                var date = this.upcomingdateMulti[i];//new Date();
                console.log(date);
                //            console.log(date.getUTCFullYear());
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                console.log(eventType);
                //if (eventType === 0) {
                startTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
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
                var date = this.currentdateMulti[i];//new Date();
                console.log(date);
                console.log(date.getUTCFullYear());
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                console.log(eventType);
                //if (eventType === 0) {
                startTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = date;// new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
                events1.push({
                    // title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,

                    //allDay: true
                });

                this.setClasses();

            }
        }
        console.log(events);
        console.log(events1)
        console.log(events.concat(events1, events2));
        if (events == undefined) {
            if (events1 == undefined) {
                if (events2 == undefined) {
                    return null;
                } else {
                    return events2;
                }
            } else {
                if (events2 == undefined) {
                    return events1;
                }
                else {
                    return events1.concat(events2)
                }
            }
        } else {
            if (events1 == undefined) {
                if (events2 == undefined) {
                    return events;
                } else {
                    return events.concat(events2);
                }
            } else {
                if (events2 == undefined) {
                    return events.concat(events1);
                }
                else {
                    return events.concat(events1, events2)
                }
            }
        }
    }
    //    orders(){
    //        console.log('orders');
    //        return new Date(this.previousdateMulti);
    //    }
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
    //  ***********************************************************************************************************************************************/
    setClasses() {
        console.log(this.isSame, this.isAfter, this.isBefore);
        let classes = {

            cal_yellow: this.isAfter1,

        };
        return classes;
    }

    getdata() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new RequestOptions({headers: headers});
        this.chef = JSON.parse(localStorage.getItem('UserInfo'));
        console.log(this.chef);
        var postdata = {

            chef_id: this.chef._id
        }
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.myGlobalVar + 'order/getorderdataforcalendar', serialized, options).map(res => res.json()).subscribe(data1 => {

                console.log(data1.data);
                this.particulardata = data1.data;
                Loading.dismiss();
                for (var i = 0; i < data1.data.length; i++) {

                    this.bookingdate.push(data1.data[i].booking_datetime.substr(0, 10));
                    this.bookingdate1.push(data1.data[i].booking_datetime)

                }
                this.calenderview();
                console.log(this.bookingdate);
            });
        })

    }
    calenderview() {
        var dat = new Date().toDateString();
        //    var datt = new Date(this.bookingdate[0])
        console.log(dat);
        //    console.log(datt);

        for (var i = 0; i < this.bookingdate.length; i++) {
            console.log(this.bookingdate[i]);
            this.isSame = moment(dat).isSame(this.bookingdate[i]);
            this.isAfter = moment(dat).isAfter(this.bookingdate[i]);
            this.isBefore = moment(dat).isBefore(this.bookingdate[i]);

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
    }
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
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    onChange($event) {
        console.log($event);
        console.log($event._d.toISOString());
        //    var dat = $event._d.toISOString        ();
        //   



    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CalenderPage');
    }

}
