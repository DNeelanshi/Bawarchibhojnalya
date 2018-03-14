import { Component,ViewChild,OnInit,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Platform,ToastController,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//  import {googlemaps} from 'googlemaps';
import { NativeGeocoder,  NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
declare var google;
/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapmodal',
  templateUrl: 'mapmodal.html',
  
})
export class MapmodalPage {
 public selectedShape : any;
  public globalshape : any;   
  autocompleteItems: any;
  autocomplete: any;
  acService:any;
  placesService: any;
 @ViewChild('map') mapElement:ElementRef;
   map: any;
   infowindow: any;
  lat;long;crlat;crlng;
  public latt:any;
  public longg:any;
    public lati:any;
  public longi:any;
  bb:any = [];
  l:any;
  lo:any;
   geocoder = new google.maps.Geocoder();
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController,
  public toastCtrl: ToastController,
  private loadCtrl: LoadingController,
   private platform: Platform, private geolocation: Geolocation,
   private nativeGeocoder: NativeGeocoder,public places: ElementRef) {
    //  this.initMap();
  }

   ngOnInit() {
  // alert("neelanshi");
    this.acService = new google.maps.places.AutocompleteService();      
    this.infowindow = new google.maps.InfoWindow;  
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
  };        
  }
  updateSearch() {
   delete this.crlat;
   delete this.crlng;
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
    }
    //let self = this; 
    let config = { 
    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
    input: this.autocomplete.query, 
    componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, ((predictions, status)=> {
    console.log('modal > getPlacePredictions > status > ', status);
    this.autocompleteItems = [];   
    console.log(predictions)         
    predictions.forEach(((prediction)=> {   
      console.log("abc")           
    this.autocompleteItems.push(prediction);
    })
   );
    })
   );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapmodalPage');
    console.log(window.navigator.onLine);
    if (window.navigator.onLine == true) {
    } else {
      let toast = this.toastCtrl.create({
        message: 'Network connection failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    this.initMap();
  }

/**map initialization */
 initMap = (): void => {
     
    var nill = this;
    var newShape
    var map
    
 
    this.platform.ready().then(() => {
      // alert("working");
      // alert(lat+','+long);
        var Loading = this.loadCtrl.create({
          spinner:'hide',
          cssClass: 'loader',
          content:"<img src='assets/image/icons3.gif'>",
          dismissOnPageChange: true
        });
        Loading.present().then(() => {
       this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
  this.long= resp.coords.longitude;
      setTimeout(() => {
    Loading.dismiss();
           }, 5000);
 console.log(resp.coords.latitude);
  console.log(resp.coords.longitude);
//           Loading.dismiss();
  // this.initMap( resp.coords.latitude , resp.coords.longitude);
  //  alert('latitude:'+resp.coords.latitude +''+'longitude:'+ resp.coords.longitude);

   let latLng = new google.maps.LatLng(this.lat,this.long);
      // alert('lat and long:'+latLng);
      
       this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
		if (status == google.maps.GeocoderStatus.OK) {
    if (results[1]) {
    this.autocomplete.query= results[1].formatted_address;
                    }
                }
		   
	   })
	   )
 let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//      alert('circle');
      console.log(latLng.lat(),latLng.lng());
       this.l=latLng.lat();
      this.lo=latLng.lng();
     
           
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
         map: this.map,
       });
      //  alert("marker");
        google.maps.event.addListener(marker, 'dragend', ((marker)=>{
      var latLng = marker.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
     let latLong = new google.maps.LatLng(this.crlat,this.crlng); 
//        var circle = new google.maps.Circle({
//           map : this.map,
//           center : new google.maps.LatLng(this.crlat,this.crlng),
//           radius: 30 ,
//           strokeColor: "#00ff00" ,
//           fillColor: "red",
//          
//       });
       
	 
    this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
                    }
                }
		   
	   })
	   )
           
//             google.maps.event.addListener(circle,'centre_changed', ((circle)=>{
//       var latLng = circle(this.l,this.lo)
//       this.crlat = latLng.lat();
//      this.crlng = latLng.lng();
////         let latLong = new google.maps.LatLng(this.crlat,this.crlng);  
////         console.log('working');
//       document.getElementById("info").innerHTML = circle.getCenter(this.crlat,this.crlng);
//    
//   }));
   })
   );
   
 
      // alert("working1");
      }).catch((error) => {
         let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'top'
      });
      toast.present();
          Loading.dismissAll();
      let latLng = new google.maps.LatLng(this.crlat,this.crlng); 
   
      this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
        if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
        this.autocomplete.query= results[1].formatted_address;
                        }
                    }
           
         })
         )
          let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
    //  alert("mapOptions");
      var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         map: this.map,
       });
      //  alert("marker");
        google.maps.event.addListener(marker, 'dragend', ((marker)=>{
      var latLng = marker.latLng; 
      this.crlat = latLng.lat();
      this.crlng = latLng.lng();
      console.log(this.crlat)
      console.log(this.crlng)
      //  alert(this.crlat);
      // alert(this.crlng);
     let latLong = new google.maps.LatLng(this.crlat,this.crlng);
     this.lat=this.crlat;
     this.long = this.crlng; 
	  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
          this.autocomplete.query= results[1].formatted_address;
          console.log(this.autocomplete.query)
                    }
                }
		   
	   })
	   )
   }));

       console.log('Error getting location', error);
     }); })



let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 
  
  // console.log('My latitude : ', data.coords.latitude);
            // console.log('My longitude: ', data.coords.longitude);
             nill.latt=data.coords.latitude;
             nill.longg=data.coords.longitude;
            //  alert(nill.latt+','+nill.longg);
            
                        });
     


     

    });

  }
     chooseItem(item){
    console.log(item)
    this.autocomplete.query=item.description;
   

    this.geocoder.geocode({'placeId': item.place_id}, ((results, status)=>{
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0])
          this.map.setZoom(18);
          this.map.setCenter(results[0].geometry.location);
          this.crlat = results[0].geometry.location.lat();
          this.crlng = results[0].geometry.location.lng();
          this.lat=this.crlat;
          this.long=this.crlng;
          var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
          });
          
         
          this.infowindow.open(this.map, marker);
//           var circle = new google.maps.Circle({
//           map : this.map,
//           center : results[0].geometry.location,
//           radius: 30 ,
//           strokeColor: "#00ff00" ,
//           fillColor: "red"
//       });
          this.infowindow.setContent(results[0].formatted_address);
          this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
  .then((coordinates: NativeGeocoderForwardResult) =>{ console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
    this.lat=coordinates.latitude
    this.long=coordinates.longitude 
    console.log(this.lat+' '+this.long);
   } )
  .catch((error: any) => console.log(error));
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
    }))               


    this.autocompleteItems = [];
 }
clsmodel(){
  this.viewCtrl.dismiss();
}

  closeModal() {
      console.log(this.autocomplete.query)
      console.log(this.lat,this.long);
      this.viewCtrl.dismiss({
        address:this.autocomplete.query,
      
        lati: this.lat,
        longi:this.long
      });
    }

  
}
