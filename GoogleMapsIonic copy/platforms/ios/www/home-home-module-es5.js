function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"queryText\" (change)=\"searchBar($event)\" placeholder=\"Enter a location...\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n        <ion-button (click) = \"getUserLocation()\">\n            <ion-icon name=\"locate\"></ion-icon>\n        </ion-button>\n        <ion-button [routerLink]=\"['/settings']\">\n            <ion-icon name=\"settings\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"map\">\n      <ion-segment-button value=\"map\">\n        <ion-icon name=\"map\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"list\">\n        <ion-icon name=\"list\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n    <div [hidden] = \"!mapOpen\" #map id=\"map\"></div>\n    <div [hidden] = \"mapOpen\" #listView id=\"listView\">\n        List view goes here.\n    </div>\n    <ion-button [routerLink]=\"['/info']\">Test info page</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb2xlaG9lbmVyL0RvY3VtZW50cy9Db2xsZWdlL1dpbnRlciBRIDIwMjAvQ0ktMTAzL1Byb3RvdHlwZS9TcGFjZXNBcHAvR29vZ2xlTWFwc0lvbmljIGNvcHkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIiNtYXAge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /*
    Title: Home Page classes
    Purpose: Script active features for application
    Version/Date: Version 1.2 01/28/2020
    Author(s): Cole Hoener
    Dependencies: Below
    */


    var geocoder;
    var map;
    var searchBarMarkers = [];
    var searchBarI = 0; //selects the applied files to interact with

    var HomePage =
    /*#__PURE__*/
    //Main class
    function () {
      //Main constructor (code goes here)
      function HomePage(platform, geolocation) {
        _classCallCheck(this, HomePage);

        this.platform = platform;
        this.geolocation = geolocation;
        this.mapOpen = true;
        this.markers = [];
      }

      _createClass(HomePage, [{
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.mapOpen = !this.mapOpen;
        } //On startup of homepage this runs

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var latLng = new google.maps.LatLng(39.9566, -75.1899);
          this.loadMap(latLng);
        } //Loads map

      }, {
        key: "loadMap",
        value: function loadMap(latLng) {
          geocoder = new google.maps.Geocoder();
          this.getUserLocation();
          var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            fullscreenControl: false,
            styles: [{
              "elementType": "geometry",
              "stylers": [{
                "color": "#1d2c4d"
              }]
            }, {
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#8ec3b9"
              }]
            }, {
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#1a3646"
              }]
            }, {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#4b6878"
              }]
            }, {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#64779e"
              }]
            }, {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#4b6878"
              }]
            }, {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#334e87"
              }]
            }, {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [{
                "color": "#023e58"
              }]
            }, {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{
                "color": "#283d6a"
              }]
            }, {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#6f9ba5"
              }]
            }, {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#1d2c4d"
              }]
            }, {
              "featureType": "poi.business",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#023e58"
              }]
            }, {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#3C7680"
              }]
            }, {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{
                "color": "#304a7d"
              }]
            }, {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#98a5be"
              }]
            }, {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#1d2c4d"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{
                "color": "#2c6675"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{
                "color": "#255763"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#b0d5ce"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#023e58"
              }]
            }, {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#98a5be"
              }]
            }, {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#1d2c4d"
              }]
            }, {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [{
                "color": "#283d6a"
              }]
            }, {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [{
                "color": "#3a4762"
              }]
            }, {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{
                "color": "#0e1626"
              }]
            }, {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#4e6d70"
              }]
            }],
            streetViewControl: false,
            mapTypeControl: false
          };
          map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          var latLng2 = new google.maps.LatLng(39.9566, -75.1899);
          this.addMarker("Test", latLng2);
        } //Gets the users current location. Displays it on the map and zooms to the location

      }, {
        key: "getUserLocation",
        value: function getUserLocation() {
          var _this = this;

          console.log("Ran getuserLocation() NEW UPDATED");
          this.platform.ready().then(function (readySource) {
            _this.geolocation.getCurrentPosition().then(function (resp) {
              _this.lat = resp.coords.latitude;
              _this.lng = resp.coords.longitude;
              console.log(_this.lat, _this.lng);
              var latLng = new google.maps.LatLng(_this.lat, _this.lng); //declares current location marker

              var userMarkerImage = {
                url: '/assets/redDot.png',
                size: new google.maps.Size(20, 20),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(11, 11),
                scaledSize: new google.maps.Size(20, 20)
              }; //Sets current location marker

              var currentMarker = new google.maps.Marker({
                map: map,
                position: latLng,
                icon: userMarkerImage
              });
              console.log("Got user cordinates"); //zooms to user current location

              map.setZoom(15);
              map.panTo(currentMarker.getPosition());

              _this.watchPositionChange();
            }).catch(function (error) {
              console.log('Error getting location', error);
            });
          });
        }
      }, {
        key: "getDistance",
        value: function getDistance(lat1, lng1, lat2, lng2) {
          var distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng({
            lat: 7.099473939079819,
            lng: -73.10677064354888
          }), new google.maps.LatLng({
            lat: 4.710993389138328,
            lng: -74.07209873199463
          }));
          var distanceInMiles = distanceInMeters * 0.000621371;
          return distanceInMiles;
        } //Watches for position changes and updates current location

      }, {
        key: "watchPositionChange",
        value: function watchPositionChange() {
          var _this2 = this;

          var watch = this.geolocation.watchPosition();
          console.log("Ran watch position change");
          watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            _this2.lat = data.coords.latitude;
            _this2.lng = data.coords.longitude;
            var latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var userMarkerImage = {
              url: '/assets/redDot.png',
              size: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(11, 11),
              scaledSize: new google.maps.Size(20, 20)
            };
            var currentMarker = new google.maps.Marker({
              map: map,
              position: latLng,
              icon: userMarkerImage
            });
            console.log("Location updated with cordinates:", _this2.lat, _this2.lng);
          });
        } //Gets directions to the given endpoint (lattitude and longitude) from current location

      }, {
        key: "directions",
        value: function directions(endPoint) {
          var directionsService = new google.maps.DirectionsService();
          var directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions: {
              strokeColor: "red"
            },
            suppressMarkers: true
          });
          var start = new google.maps.LatLng(this.lat, this.lng);
          directionsRenderer.setMap(map);
          var request = {
            origin: start,
            destination: endPoint,
            travelMode: 'DRIVING'
          };
          directionsService.route(request, function (result, status) {
            if (status == 'OK') {
              directionsRenderer.setDirections(result);
              console.log("Ran directions");
            }
          });
        } //Adds a marker to the map given the position as lattitude and longitude

      }, {
        key: "addMarker",
        value: function addMarker(title, position) {
          var marker = new google.maps.Marker({
            //map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            title: title
          });
          marker.setMap(map); //On marker click do this

          marker.addListener('click', function () {
            console.log("Clicked Marker");
          });
        }
        /*Given an address, this function returns the lattitude and longitude
          of the address if the address is valid*/

      }, {
        key: "geocode",
        value: function geocode(address) {
          geocoder.geocode({
            'address': address
          }, function (results, status) {
            if (status == 'OK') {
              return results[0].geometry.location;
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
      }, {
        key: "searchBar",
        value: function searchBar(address) {
          if (searchBarI > 0) {
            searchBarMarkers[searchBarI - 1].setMap(null);
          }

          geocoder.geocode({
            'address': address.srcElement.value
          }, function (results, status) {
            if (status == 'OK') {
              console.log(searchBarI);
              searchBarMarkers[searchBarI] = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
              });
              map.panTo(searchBarMarkers[searchBarI].getPosition());
              searchBarI += 1;
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
      }, {
        key: "displayGarages",
        value: function displayGarages(garagesAddresses, key) {
          for (var i = 0; i < garagesAddresses.length(); i++) {
            var cordinates = this.geocode(garagesAddresses[i]);
            this.addMarker(key[i], cordinates);
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HomePage.prototype, "mapElement", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }) //Main class
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map