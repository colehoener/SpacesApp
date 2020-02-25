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
  mapOpen: boolean = true;
  //creates new view
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

  segmentChanged(ev: any) {
      this.mapOpen = !this.mapOpen;
  }
  
  //On startup of homepage this runs
  ionViewWillEnter() {
    let latLng = new google.maps.LatLng(39.9566, -75.1899);
    this.loadMap(latLng)
  }

  //Loads map
  loadMap(latLng){
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    this.getUserLocation()

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: false,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
      ],
      streetViewControl: false,
      mapTypeControl: false
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let latLng2 = new google.maps.LatLng(39.956587, -75.204674);

    this.addMarker("Test", latLng2)

  }

  getUserLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      console.log("Ran getUserLocation() with cordinates:", this.lat, this.lng)
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      
      var userMarkerImage = {
        url: '/assets/redDot.png',
        size: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 11),
        scaledSize: new google.maps.Size(20, 20)
      };

      let currentMarker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        icon : userMarkerImage
      });
    
      //zooms to user current location
      this.map.setZoom(15);
      this.map.panTo(currentMarker.getPosition());
    });
  }

  //Watches for position changes
  watchPositionChange(){
    let watch = this.geolocation.watchPosition();

    watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        this.lat = data.coords.latitude
        this.lng = data.coords.longitude
        let latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);

        let currentMarker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            //icon : myLocationIcon
          });

          console.log("Location updated with cordinates:", this.lat, this.lng)
      });
  }

  directions(endPoint){

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({polylineOptions: {
      strokeColor: "red"}, suppressMarkers: true});

    let start = new google.maps.LatLng(this.lat, this.lng)

    directionsRenderer.setMap(this.map);

    var request = {
      origin: start,
      destination: endPoint,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
        console.log("Ran directions")
      }
    });
  }

  addMarker(title, position){
      var myLatlng = new google.maps.LatLng(39.956587, -75.194674);
      var marker = new google.maps.Marker({
        //map: this.map,
        animation: google.maps.Animation.DROP,
        position: position,
        title: title
      });

      marker.setMap(this.map);

      marker.addListener('click', function() {
        console.log("Clicked Marker")
      });
  }
  
  /*codeAddress() {
    geocoder = new google.maps.Geocoder();
    //var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        this.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }*/
  
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
