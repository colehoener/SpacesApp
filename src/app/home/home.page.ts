import { Component, ViewChild, ElementRef } from '@angular/core';
import {Plugins, GeolocationPluginWeb } from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
const {Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  user = null;

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  markers = []

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.anonLogin();
  }

  ionViewWillEnter() {
   this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(39.9566, -75.1955);

    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

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
