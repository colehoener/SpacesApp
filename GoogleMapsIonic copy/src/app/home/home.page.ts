/*
Title: Home Page classes
Purpose: Script active features for application
Version/Date: Version 1.3 03/10/2020
Author(s): Cole Hoener, Zak McConnell
Dependencies: Below
*/

import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

//const {Geolocation } = Plugins;

declare let window: any;
declare var google;
var geocoder;	
var map;	
var searchBarMarkers = []
var searchBarI = 0
var currentLocationMarkers = []
var currentLocationI = 0
var garageMarkers = []
var garageMarkersI = 0
var timeout = 0
var home;
const DB_DEBUG = false;

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
  mapOpen: boolean = true;
  user = null;

  //creates new view
  @ViewChild('map', {static: false}) mapElement: ElementRef;

  //global variables
  lat: number;
  lng: number;
  map: any;
  markers = [];
  db: any;
    

  //Main constructor (code goes here)
  constructor(private route: ActivatedRoute, public platform: Platform, private geolocation: Geolocation, private router: Router, private http: HttpClient) {
        home = this;
        this.route.queryParams.subscribe(params => {
              if (this.router.getCurrentNavigation().extras.state) {
                //do the directions
                for (let x of garageMarkers) {
                    if (x.id == this.router.getCurrentNavigation().extras.state.id) {
                        this.directions(x.position);
                        break;
                    }
                }
              }
        });
	}
	
  segmentChanged(ev: any) {	
    this.mapOpen = !this.mapOpen;	
  }

  //On startup of homepage this runs
  ionViewWillEnter() {
    console.log(timeout)
    console.log(garageMarkersI)
    this.platform.ready().then((readySource) => {
	  /*this.openDB().then((db) => this.db=db)
		  .then(() => this.initDB())
		  .then(() => this.getGarageIds())
		  .then((ids) => this.getGarageAddress(ids[0]))
		  .then((address) => console.log('Address: ' + address))
      .catch(e => console.log(e));*/
    });
    let latLng = new google.maps.LatLng(39.9566, -75.1899);
	  this.loadMap(latLng);
  }

  //Loads map
  loadMap(latLng){
    geocoder = new google.maps.Geocoder();

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

    map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   
    if(currentLocationMarkers[currentLocationI - 1] != null){
      currentLocationMarkers[currentLocationI - 1].setMap(map);
      map.setCenter(currentLocationMarkers[currentLocationI - 1].position)
    }

    if(garageMarkers[13] == null){
      this.platform.ready().then((readySource) => {
        this.openDB().then((db) => this.db=db)
        .then(() => this.initDB())
        .then(() => this.getGarageIds())
        .then((ids) => this.displayGarages(ids))
      });
    }
    else{
      for(let i = 0; i < garageMarkersI; i++){
        garageMarkers[i].setMap(map);
      }
    }
  }	

  //Gets the users current location. Displays it on the map and zooms to the location	
  getUserLocation(){	
    console.log("Ran getuserLocation()")	
    this.platform.ready().then((readySource) => {
      var garageIDS = this.getGarageIds()
      var geo_options = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
      };

      this.geolocation.getCurrentPosition(geo_options).then((resp) => {
        this.lat = resp.coords.latitude
        this.lng = resp.coords.longitude
  
      console.log(this.lat, this.lng)

      let latLng = new google.maps.LatLng(this.lat, this.lng);

      //declares current location marker
      var userMarkerImage = {
        url: '/assets/redDot.png',
        size: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 11),
        scaledSize: new google.maps.Size(20, 20)
      };

      //Sets current location marker
      currentLocationMarkers[currentLocationI] = new google.maps.Marker({
        map: map,
        position: latLng,
        icon : userMarkerImage
      });
      
      //zooms to user current location
      map.setZoom(15);
      map.panTo(currentLocationMarkers[currentLocationI].getPosition());

      this.watchPositionChange()
      currentLocationI++
    }).catch((error) => {
    console.log('Error getting location', error);
    });
  });
  }

  goToCurrentLocation(){
    map.setZoom(15);
    map.panTo(currentLocationMarkers[currentLocationI - 1].getPosition());
  }

  getDistance(lat1, lng1, lat2, lng2){
    /*var distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng({
          lat: 7.099473939079819, 
          lng: -73.10677064354888
      }),
      new google.maps.LatLng({
          lat: 4.710993389138328, 
          lng: -74.07209873199463
      })
    );
    let distanceInMiles = distanceInMeters * 0.000621371

    return distanceInMiles
    */
    console.log(lat1, lng1, lat2, lng2);
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lng1/180;
    var radlon2 = Math.PI * lng2/180;
    var radtheta = Math.PI * (lng1-lng2)/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    return Math.floor(dist*100)/100;
  }

  //Watches for position changes and updates current location
  watchPositionChange(){
    let watch = this.geolocation.watchPosition();

    watch.subscribe((data) => {
        
          for(let i = 0; i < currentLocationI; i++){
            currentLocationMarkers[i].setMap(null)
          }

        // data can be a set of coordinates, or an error (if an error occurred).
        this.lat = data.coords.latitude
        this.lng = data.coords.longitude
        let latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
	    
	var userMarkerImage = {	
          url: '/assets/redDot.png',	
          size: new google.maps.Size(20, 20),	
          origin: new google.maps.Point(0, 0),	
          anchor: new google.maps.Point(11, 11),	
          scaledSize: new google.maps.Size(20, 20)	
        };

        currentLocationMarkers[currentLocationI] = new google.maps.Marker({
            map: map,
            position: latLng,
            icon : userMarkerImage
          });

          currentLocationI += 1
      });
  }

  //Gets directions to the given endpoint (lattitude and longitude) from current location
  directions(endPoint){
    setTimeout(function(){
    console.log(endPoint)
    var directionsService = new google.maps.DirectionsService();

    var directionsRenderer = new google.maps.DirectionsRenderer({polylineOptions: {
      strokeColor: "red"}, suppressMarkers: true});

    directionsRenderer.setMap(map);

    var request = {
      origin: currentLocationMarkers[currentLocationI - 1].getPosition(),
      destination: endPoint,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
        console.log("Ran directions")
      }
    });
  }, 1500)
  }

  //Adds a marker to the map given the position as lattitude and longitude
  addMarker(title, position){
      let marker = new google.maps.Marker({
        //map: this.map,
        animation: google.maps.Animation.DROP,
        position: position,
        title: title
      });

      marker.setMap(map);
      //On marker click do this
      marker.addListener('click', function() {
        console.log("Clicked Marker")
      });
  }
  
  /*Given an address, this function returns the lattitude and longitude
    of the address if the address is valid*/
  geocode(address, id) {
    timeout+=250
    setTimeout(function(){
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {	
        //declares current location marker
        var garageMarkerImage = {
          url: '/assets/garage_icon.png',
          size: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 40),
          scaledSize: new google.maps.Size(40, 40)
        };

        garageMarkers[garageMarkersI] = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: results[0].geometry.location,
            icon : garageMarkerImage,
            id: id
        });
        let mark = garageMarkers[garageMarkersI];
        mark.addListener('click', async function markerListener() {
            let navExtras: NavigationExtras = {
                state: {
                    id: id,
                    address: await home.getGarageAddress(mark.id),
                    name: await home.getGarageField(mark.id, "name"),
                    daysOpen: await home.getGarageField(mark.id, "daysOpen"),
                    openTime: await home.getGarageField(mark.id, "openTime"),
                    closeTime: await home.getGarageField(mark.id, "closeTime"),
                    is24hr: await home.getGarageField(mark.id, "is24hr"),
                    hasMonthly: await home.getGarageField(mark.id, "hasMonthly"),
                    comments: await home.getGarageField(mark.id, "comments"),
                    distance: home.getDistance(
                            home.lat || 39.955859,
                            home.lng || -75.191336,
                            mark.position.lat(),
                            mark.position.lng()
                    ),
                }
            };
            home.router.navigate(['info'], navExtras);
      });
        
        garageMarkersI++

      } else {
        console.log("OVER QUERY LIMIT")
      }
    });
  }, timeout)
  }

  //Geocodes the address typed in the search bar and diaplays it on the map
  searchBar(address){
    if(searchBarI > 0){
      searchBarMarkers[searchBarI - 1].setMap(null)
    }

    geocoder.geocode( { 'address': address.srcElement.value}, function(results, status) {
      if (status == 'OK') {
        searchBarMarkers[searchBarI] = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        map.panTo(searchBarMarkers[searchBarI].getPosition());
        searchBarI += 1
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
	});
  }
  
  //Fetchs the garages from the database and translates them into cordinates,
  //then places the pins on
  displayGarages(ids){
    for(let i = 0; i < ids.length; i++){

      this.openDB().then((db) => this.db=db)
        .then(() => this.getGarageAddress(ids[i]))
        .then((address) => this.geocode(address, ids[i]))
        .catch(e => console.log(e));
      }
  }
	
  async openDB() {
    if (!window.cordova || window.cordova.platformId === 'browser') {
      var db = await window.openDatabase('garages', '1.0', 'Data', 2*1024*1024);
      console.log('Opened DB.')
      return db;
    }
  }

  async initDB() {
	  // Get 'garages.sql' text
	  var script = await this.http.get('../../assets/garages.sql', {responseType: 'text'}).toPromise();
	  var commands = script.split(";");
	  if (!window.cordova || window.cordova.platformId === 'browser') {
		  for (var command of commands) {
			  await this.execSQL(command);
		  }
		  console.log('Initialized DB.');
  	  }
		  /*else {
		this.sqlite.create({
			name: 'garages.db',
			location: 'default'
		})
			.then((db: SQLiteObject) => {
				db.executeSql(script, [])
					.then(() => console.log('Executed SQL'))
					.catch(e => console.log(e));
			})
			.catch(e => console.log(e));
	  }
	  //	  console.log('Loaded DB.');
	  //return db;*/
	  
  }
	

	// get all garageIDs
	async getGarageIds() {
		var results = await this.execSQL('SELECT garageID FROM Garage');
		if(results instanceof Array) {
			results = results.map(res => res.garageID);
		}
		else {
			if (DB_DEBUG) console.log('This shouldn\'t happen.');
    }
    
		return results;
	}

	// get address of garage
	async getGarageAddress(garageID) {
		var results = await this.execSQL('SELECT address FROM Garage WHERE garageID = ' + garageID);
		if(results instanceof Array) {
			results = results.map(res => res.address);
		}
		else {
			if (DB_DEBUG) console.log('This shouldn\'t happen.');
		}
		return results[0];
	}
	async getGarageField(garageID, field) {
		var results = await this.execSQL('SELECT '+field+' FROM Garage WHERE garageID = ' + garageID);
		if(results instanceof Array) {
			results = results.map(res => res[field]);
		}
		else {
			if (DB_DEBUG) console.log('This shouldn\'t happen.');
		}
		return results[0];
	}

	//exec Sql callback wrapper
	async execSQL(command) {
		var db = this.db;
		return new Promise(function(resolve, reject) {
			var data = [];
			db.transaction(function(tx) {
				if (DB_DEBUG) console.log(command);
				tx.executeSql(command, [], function(tx, results) {
					for (var i = 0; i < results.rows.length; i++) {
						data.push(results.rows.item(i));
					}
				}, function(tx, error) {
					if (DB_DEBUG) console.log('SQL ERROR: ' + error.message);
				});
			}, function(error) {
				if (DB_DEBUG) console.log('Transaction ERROR: ' + error.message);
				reject(error);
			}, function() {
				if (DB_DEBUG) console.log('Transaction executed.');
				resolve(data);
			});
		});
		
	}

}
