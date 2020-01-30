/*
Title: Home Page classes
Purpose: Script active features for application
Version/Date: Version 1.2 01/28/2020
Author(s): Cole Hoener
Dependencies: Below
*/

import { Component, ViewChild, ElementRef } from '@angular/core';
import {Plugins, GeolocationPluginWeb } from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { Geolocation } from '@ionic-native/geolocation/ngx';

//const {Geolocation } = Plugins;

declare var google;

//selects the applied files to interact with
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//Main class
export class HomePage {
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  user = null;

  
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  //global variables
  lat: number;
  lng: number;
  map: any;
  markers = []

  //Main constructor (code goes here)
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private geolocation: Geolocation) {
    this.anonLogin();
  }

  //On startup of homepage this runs
  ionViewWillEnter() {
   this.loadMap();
  }
  
  //Loads map
  loadMap(){
    //Updates current location if there is a loction change
      /*let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          // data can be a set of coordinates, or an error (if an error occurred).
          this.lat = data.coords.latitude
          this.lng = data.coords.longitude
      });*/

    //Gets current loction of user
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //Draws icon (placeholder)
      var myLocationIcon = {
        path: 'M11 11l1.256 5 3.744-10-10 3.75 5 1.25zm1-11c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z',
        scale: 1,
        fillColor: '#3a84df'
      };
      
      //Creates a marker
      var marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon : myLocationIcon
      });
    });
  }
  
  //Firebase login
  anonLogin(){
    this.afAuth.auth.signInAnonymously().then(user => {
      console.log(user);
      this.user = user;

      this.locationsCollection = this.afs.collection(
        'locations/${this.user.uid}/track',
        ref => ref.orderBy('timestamp')
      );
      
    })
  }
}
