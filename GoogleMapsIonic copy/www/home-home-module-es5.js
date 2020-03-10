function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/@angular/common/fesm2015/http.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/http.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */

  /***/
  function node_modulesAngularCommonFesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license Angular v8.1.3
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {
      _classCallCheck(this, HttpHandler);
    };
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {
      _classCallCheck(this, HttpBackend);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents the header configuration options for an HTTP request.
     *
     * Instances should be assumed immutable with lazy parsing.
     *
     * \@publicApi
     */


    var HttpHeaders =
    /*#__PURE__*/
    function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this2 = this;

        _classCallCheck(this, HttpHeaders);

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this2.maybeSetNormalizedName(name, key);

                if (_this2.headers.has(key)) {
                  /** @type {?} */
                  _this2.headers.get(key).push(value);
                } else {
                  _this2.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this2.headers.set(key, values);

                _this2.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a header by a given name.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} Whether the header exits.
       */


      _createClass(HttpHeaders, [{
        key: "has",
        value: function has(name) {
          this.init();
          return this.headers.has(name.toLowerCase());
        }
        /**
         * Retrieves the first header value that matches a given name.
         *
         * @param {?} name The header name to retrieve.
         *
         * @return {?} A string if the header exists, null otherwise
         */

      }, {
        key: "get",
        value: function get(name) {
          this.init();
          /** @type {?} */

          var values = this.headers.get(name.toLowerCase());
          return values && values.length > 0 ? values[0] : null;
        }
        /**
         * Retrieves the names of the headers.
         *
         * @return {?} A list of header names.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        /**
         * Retrieves a list of header values for a given header name.
         *
         * @param {?} name The header name from which to retrieve the values.
         *
         * @return {?} A string of values if the header exists, null otherwise.
         */

      }, {
        key: "getAll",
        value: function getAll(name) {
          this.init();
          return this.headers.get(name.toLowerCase()) || null;
        }
        /**
         * Appends a new header value to the existing set of
         * header values.
         *
         * @param {?} name The header name for which to append the values.
         *
         * @param {?} value
         * @return {?} A clone of the HTTP header object with the value appended.
         */

      }, {
        key: "append",
        value: function append(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'a'
          });
        }
        /**
         * Sets a header value for a given name. If the header name already exists,
         * its value is replaced with the given value.
         *
         * @param {?} name The header name.
         * @param {?} value The value to set or overide for a given name.
         *
         * @return {?} A clone of the HTTP header object with the newly set header value.
         */

      }, {
        key: "set",
        value: function set(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 's'
          });
        }
        /**
         * Deletes all header values for a given name.
         *
         * @param {?} name The header name.
         * @param {?=} value The header values to delete for a given name.
         *
         * @return {?} A clone of the HTTP header object.
         */

      }, {
        key: "delete",
        value: function _delete(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'd'
          });
        }
        /**
         * @private
         * @param {?} name
         * @param {?} lcName
         * @return {?}
         */

      }, {
        key: "maybeSetNormalizedName",
        value: function maybeSetNormalizedName(name, lcName) {
          if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this3 = this;

          if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }

            this.lazyInit = null;

            if (!!this.lazyUpdate) {
              this.lazyUpdate.forEach(
              /**
              * @param {?} update
              * @return {?}
              */
              function (update) {
                return _this3.applyUpdate(update);
              });
              this.lazyUpdate = null;
            }
          }
        }
        /**
         * @private
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "copyFrom",
        value: function copyFrom(other) {
          var _this4 = this;

          other.init();
          Array.from(other.headers.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this4.headers.set(key,
            /** @type {?} */
            other.headers.get(key));

            _this4.normalizedNames.set(key,
            /** @type {?} */
            other.normalizedNames.get(key));
          });
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpHeaders();
          clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
          clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "applyUpdate",
        value: function applyUpdate(update) {
          /** @type {?} */
          var key = update.name.toLowerCase();

          switch (update.op) {
            case 'a':
            case 's':
              /** @type {?} */
              var value =
              /** @type {?} */
              update.value;

              if (typeof value === 'string') {
                value = [value];
              }

              if (value.length === 0) {
                return;
              }

              this.maybeSetNormalizedName(update.name, key);
              /** @type {?} */

              var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
              base.push.apply(base, _toConsumableArray(value));
              this.headers.set(key, base);
              break;

            case 'd':
              /** @type {?} */
              var toDelete =
              /** @type {?} */
              update.value;

              if (!toDelete) {
                this.headers.delete(key);
                this.normalizedNames.delete(key);
              } else {
                /** @type {?} */
                var existing = this.headers.get(key);

                if (!existing) {
                  return;
                }

                existing = existing.filter(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  return toDelete.indexOf(value) === -1;
                });

                if (existing.length === 0) {
                  this.headers.delete(key);
                  this.normalizedNames.delete(key);
                } else {
                  this.headers.set(key, existing);
                }
              }

              break;
          }
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          var _this5 = this;

          this.init();
          Array.from(this.normalizedNames.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return fn(
            /** @type {?} */
            _this5.normalizedNames.get(key),
            /** @type {?} */
            _this5.headers.get(key));
          });
        }
      }]);

      return HttpHeaders;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec =
    /*#__PURE__*/
    function () {
      function HttpUrlEncodingCodec() {
        _classCallCheck(this, HttpUrlEncodingCodec);
      }

      _createClass(HttpUrlEncodingCodec, [{
        key: "encodeKey",

        /**
         * Encodes a key name for a URL parameter or query-string.
         * @param {?} key The key name.
         * @return {?} The encoded key name.
         */
        value: function encodeKey(key) {
          return standardEncoding(key);
        }
        /**
         * Encodes the value of a URL parameter or query-string.
         * @param {?} value The value.
         * @return {?} The encoded value.
         */

      }, {
        key: "encodeValue",
        value: function encodeValue(value) {
          return standardEncoding(value);
        }
        /**
         * Decodes an encoded URL parameter or query-string key.
         * @param {?} key The encoded key name.
         * @return {?} The decoded key name.
         */

      }, {
        key: "decodeKey",
        value: function decodeKey(key) {
          return decodeURIComponent(key);
        }
        /**
         * Decodes an encoded URL parameter or query-string value.
         * @param {?} value The encoded value.
         * @return {?} The decoded value.
         */

      }, {
        key: "decodeValue",
        value: function decodeValue(value) {
          return decodeURIComponent(value);
        }
      }]);

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} options
       */
      function HttpParams() {
        var _this6 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
        /** @type {?} */
        {};

        _classCallCheck(this, HttpParams);

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this6.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      _createClass(HttpParams, [{
        key: "has",
        value: function has(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.has(param)
          );
        }
        /**
         * Retrieves the first value for a parameter.
         * @param {?} param The parameter name.
         * @return {?} The first value of the given parameter,
         * or `null` if the parameter is not present.
         */

      }, {
        key: "get",
        value: function get(param) {
          this.init();
          /** @type {?} */

          var res =
          /** @type {?} */
          this.map.get(param);
          return !!res ? res[0] : null;
        }
        /**
         * Retrieves all values for a  parameter.
         * @param {?} param The parameter name.
         * @return {?} All values in a string array,
         * or `null` if the parameter not present.
         */

      }, {
        key: "getAll",
        value: function getAll(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.get(param) || null
          );
        }
        /**
         * Retrieves all the parameters for this body.
         * @return {?} The parameter names in a string array.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(
          /** @type {?} */
          this.map.keys());
        }
        /**
         * Appends a new value to existing values for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value to add.
         * @return {?} A new body with the appended value.
         */

      }, {
        key: "append",
        value: function append(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'a'
          });
        }
        /**
         * Replaces the value for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value.
         * @return {?} A new body with the new value.
         */

      }, {
        key: "set",
        value: function set(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 's'
          });
        }
        /**
         * Removes a given value or all values from a parameter.
         * @param {?} param The parameter name.
         * @param {?=} value The value to remove, if provided.
         * @return {?} A new body with the given value removed, or with all values
         * removed if no value is specified.
         */

      }, {
        key: "delete",
        value: function _delete(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'd'
          });
        }
        /**
         * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
         * separated by `&`s.
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          var _this7 = this;

          this.init();
          return this.keys().map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var eKey = _this7.encoder.encodeKey(key);

            return (
              /** @type {?} */

              /** @type {?} */
              _this7.map.get(key).map(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return eKey + '=' + _this7.encoder.encodeValue(value);
              }).join('&')
            );
          }).join('&');
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpParams(
          /** @type {?} */
          {
            encoder: this.encoder
          });
          clone.cloneFrom = this.cloneFrom || this;
          clone.updates = (this.updates || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this8 = this;

          if (this.map === null) {
            this.map = new Map();
          }

          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return (
                /** @type {?} */
                _this8.map.set(key,
                /** @type {?} */

                /** @type {?} */

                /** @type {?} */
                _this8.cloneFrom.map.get(key))
              );
            });

            /** @type {?} */
            this.updates.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              switch (update.op) {
                case 'a':
                case 's':
                  /** @type {?} */
                  var base = (update.op === 'a' ?
                  /** @type {?} */
                  _this8.map.get(update.param) : undefined) || [];
                  base.push(
                  /** @type {?} */
                  update.value);

                  /** @type {?} */
                  _this8.map.set(update.param, base);

                  break;

                case 'd':
                  if (update.value !== undefined) {
                    /** @type {?} */
                    var _base =
                    /** @type {?} */
                    _this8.map.get(update.param) || [];
                    /** @type {?} */


                    var idx = _base.indexOf(update.value);

                    if (idx !== -1) {
                      _base.splice(idx, 1);
                    }

                    if (_base.length > 0) {
                      /** @type {?} */
                      _this8.map.set(update.param, _base);
                    } else {
                      /** @type {?} */
                      _this8.map.delete(update.param);
                    }
                  } else {
                    /** @type {?} */
                    _this8.map.delete(update.param);

                    break;
                  }

              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }]);

      return HttpParams;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        _classCallCheck(this, HttpRequest);

        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      _createClass(HttpRequest, [{
        key: "serializeBody",
        value: function serializeBody() {
          // If no body is present, no need to serialize it.
          if (this.body === null) {
            return null;
          } // Check whether the body is already in a serialized form. If so,
          // it can just be returned directly.


          if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
            return this.body;
          } // Check whether the body is an instance of HttpUrlEncodedParams.


          if (this.body instanceof HttpParams) {
            return this.body.toString();
          } // Check whether the body is an object or array, and serialize with JSON if so.


          if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
            return JSON.stringify(this.body);
          } // Fall back on toString() for everything else.


          return (
            /** @type {?} */
            this.body.toString()
          );
        }
        /**
         * Examine the body and attempt to infer an appropriate MIME type
         * for it.
         *
         * If no such type can be inferred, this method will return `null`.
         * @return {?}
         */

      }, {
        key: "detectContentTypeHeader",
        value: function detectContentTypeHeader() {
          // An empty body has no content type.
          if (this.body === null) {
            return null;
          } // FormData bodies rely on the browser's content type assignment.


          if (isFormData(this.body)) {
            return null;
          } // Blobs usually have their own content type. If it doesn't, then
          // no type can be inferred.


          if (isBlob(this.body)) {
            return this.body.type || null;
          } // Array buffers have unknown contents and thus no type can be inferred.


          if (isArrayBuffer(this.body)) {
            return null;
          } // Technically, strings could be a form of JSON data, but it's safe enough
          // to assume they're plain strings.


          if (typeof this.body === 'string') {
            return 'text/plain';
          } // `HttpUrlEncodedParams` has its own content-type.


          if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } // Arrays, objects, and numbers will be encoded as JSON.


          if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
            return 'application/json';
          } // No type could be inferred.


          return null;
        }
        /**
         * @param {?=} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // For method, url, and responseType, take the current value unless
          // it is overridden in the update hash.

          /** @type {?} */
          var method = update.method || this.method;
          /** @type {?} */

          var url = update.url || this.url;
          /** @type {?} */

          var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
          // whatever current body is present is being overridden with an empty
          // body, whereas an `undefined` value in update.body implies no
          // override.

          /** @type {?} */

          var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
          // `false` and `undefined` in the update args.

          /** @type {?} */

          var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
          /** @type {?} */

          var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
          // `setParams` are used.

          /** @type {?} */

          var headers = update.headers || this.headers;
          /** @type {?} */

          var params = update.params || this.params; // Check whether the caller has asked to add headers.

          if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers = Object.keys(update.setHeaders).reduce(
            /**
            * @param {?} headers
            * @param {?} name
            * @return {?}
            */
            function (headers, name) {
              return headers.set(name,
              /** @type {?} */
              update.setHeaders[name]);
            }, headers);
          } // Check whether the caller has asked to set params.


          if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams).reduce(
            /**
            * @param {?} params
            * @param {?} param
            * @return {?}
            */
            function (params, param) {
              return params.set(param,
              /** @type {?} */
              update.setParams[param]);
            }, params);
          } // Finally, construct the new HttpRequest using the pieces from above.


          return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials
          });
        }
      }]);

      return HttpRequest;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */

    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init) {
      var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

      _classCallCheck(this, HttpResponseBase);

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse =
    /*#__PURE__*/
    function (_HttpResponseBase) {
      _inherits(HttpHeaderResponse, _HttpResponseBase);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse() {
        var _this9;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpHeaderResponse);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(HttpHeaderResponse).call(this, init));
        _this9.type = HttpEventType.ResponseHeader;
        return _this9;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpHeaderResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Perform a straightforward initialization of the new HttpHeaderResponse,
          // overriding the current parameters with new ones if given.
          return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpHeaderResponse;
    }(HttpResponseBase);
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse =
    /*#__PURE__*/
    function (_HttpResponseBase2) {
      _inherits(HttpResponse, _HttpResponseBase2);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse() {
        var _this10;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpResponse);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(HttpResponse).call(this, init));
        _this10.type = HttpEventType.Response;
        _this10.body = init.body !== undefined ? init.body : null;
        return _this10;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new HttpResponse({
            body: update.body !== undefined ? update.body : this.body,
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpResponse;
    }(HttpResponseBase);
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse =
    /*#__PURE__*/
    function (_HttpResponseBase3) {
      _inherits(HttpErrorResponse, _HttpResponseBase3);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this11;

        _classCallCheck(this, HttpErrorResponse);

        // Initialize with a default status of 0 / Unknown Error.
        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(HttpErrorResponse).call(this, init, 0, 'Unknown Error'));
        _this11.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this11.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this11.status >= 200 && _this11.status < 300) {
          _this11.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
        } else {
          _this11.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
        }

        _this11.error = init.error || null;
        return _this11;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     *
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        _classCallCheck(this, HttpClient);

        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      _createClass(HttpClient, [{
        key: "request",
        value: function request(first, url) {
          var _this12 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var req; // First, check whether the primary argument is an instance of `HttpRequest`.

          if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req =
            /** @type {?} */
            first;
          } else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.

            /** @type {?} */
            var headers = undefined;

            if (options.headers instanceof HttpHeaders) {
              headers = options.headers;
            } else {
              headers = new HttpHeaders(options.headers);
            } // Sort out parameters.

            /** @type {?} */


            var params = undefined;

            if (!!options.params) {
              if (options.params instanceof HttpParams) {
                params = options.params;
              } else {
                params = new HttpParams(
                /** @type {?} */
                {
                  fromObject: options.params
                });
              }
            } // Construct the request.


            req = new HttpRequest(first,
            /** @type {?} */
            url, options.body !== undefined ? options.body : null, {
              headers: headers,
              params: params,
              reportProgress: options.reportProgress,
              // By default, JSON is assumed to be returned for all calls.
              responseType: options.responseType || 'json',
              withCredentials: options.withCredentials
            });
          } // Start with an Observable.of() the initial request, and run the handler (which
          // includes all interceptors) inside a concatMap(). This way, the handler runs
          // inside an Observable chain, which causes interceptors to be re-run on every
          // subscription (this also makes retries re-run the handler, including interceptors).

          /** @type {?} */


          var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
          /**
          * @param {?} req
          * @return {?}
          */
          function (req) {
            return _this12.handler.handle(req);
          })); // If coming via the API signature which accepts a previously constructed HttpRequest,
          // the only option is to get the event stream. Otherwise, return the event stream if
          // that is what was requested.

          if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
          } // The requested stream contains either the full response or the body. In either
          // case, the first step is to filter the event stream to extract a stream of
          // responses(s).

          /** @type {?} */


          var res$ =
          /** @type {?} */
          events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof HttpResponse;
          })); // Decide which stream to return.

          switch (options.observe || 'body') {
            case 'body':
              // The requested stream is the body. Map the response stream to the response
              // body. This could be done more simply, but a misbehaving interceptor might
              // transform the response body into a different format and ignore the requested
              // responseType. Guard against this by validating that the response is of the
              // requested type.
              switch (req.responseType) {
                case 'arraybuffer':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is an ArrayBuffer.
                    if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                      throw new Error('Response is not an ArrayBuffer.');
                    }

                    return res.body;
                  }));

                case 'blob':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a Blob.
                    if (res.body !== null && !(res.body instanceof Blob)) {
                      throw new Error('Response is not a Blob.');
                    }

                    return res.body;
                  }));

                case 'text':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a string.
                    if (res.body !== null && typeof res.body !== 'string') {
                      throw new Error('Response is not a string.');
                    }

                    return res.body;
                  }));

                case 'json':
                default:
                  // No validation needed for JSON responses, as they can be of any type.
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return res.body;
                  }));
              }

            case 'response':
              // The response stream was requested directly, so return it.
              return res$;

            default:
              // Guard against new future observe types being added.
              throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
          }
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `DELETE` request to execute on the server. See the individual overloads for
         * details on the return type.
         *
         * @param {?} url     The endpoint URL.
         * @param {?=} options The HTTP options to send with the request.
         *
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('DELETE', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `GET` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('GET', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `HEAD` request to execute on the server. The `HEAD` method returns
         * meta information about the resource without transferring the
         * resource itself. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "head",
        value: function head(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('HEAD', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes a request with the special method
         * `JSONP` to be dispatched via the interceptor pipeline.
         * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
         * API endpoints that don't support newer,
         * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
         * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
         * requests even if the API endpoint is not located on the same domain (origin) as the client-side
         * application making the request.
         * The endpoint API must support JSONP callback for JSONP requests to work.
         * The resource API returns the JSON response wrapped in a callback function.
         * You can pass the callback function name as one of the query parameters.
         * Note that JSONP requests can only be used with `GET` requests.
         *
         * @template T
         * @param {?} url The resource URL.
         * @param {?} callbackParam The callback function name.
         *
         * @return {?}
         */

      }, {
        key: "jsonp",
        value: function jsonp(url, callbackParam) {
          return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes the configured
         * `OPTIONS` request to execute on the server. This method allows the client
         * to determine the supported HTTP methods and other capabilites of an endpoint,
         * without implying a resource action. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "options",
        value: function options(url) {
          var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.request('OPTIONS', url,
          /** @type {?} */
          _options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PATCH` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patch",
        value: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PATCH', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `POST` request to execute on the server. The server responds with the location of
         * the replaced resource. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "post",
        value: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('POST', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
         * with a new set of values.
         * See the individual overloads for details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "put",
        value: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PUT', url, addBody(options, body));
        }
      }]);

      return HttpClient;
    }();

    HttpClient.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        _classCallCheck(this, HttpInterceptorHandler);

        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptorHandler, [{
        key: "handle",
        value: function handle(req) {
          return this.interceptor.intercept(req, this.next);
        }
      }]);

      return HttpInterceptorHandler;
    }();
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor =
    /*#__PURE__*/
    function () {
      function NoopInterceptor() {
        _classCallCheck(this, NoopInterceptor);
      }

      _createClass(NoopInterceptor, [{
        key: "intercept",

        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        value: function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return NoopInterceptor;
    }();

    NoopInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */

    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {
      _classCallCheck(this, JsonpCallbackContext);
    };
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        _classCallCheck(this, JsonpClientBackend);

        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      _createClass(JsonpClientBackend, [{
        key: "nextCallback",
        value: function nextCallback() {
          return "ng_jsonp_callback_".concat(nextRequestId++);
        }
        /**
         * Processes a JSONP request and returns an event stream of the results.
         * @param {?} req The request object.
         * @return {?} An observable of the response events.
         *
         */

      }, {
        key: "handle",
        value: function handle(req) {
          var _this13 = this;

          // Firstly, check both the method and response type. If either doesn't match
          // then the request was improperly routed here and cannot be handled.
          if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
          } else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
          } // Everything else happens inside the Observable boundary.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.

            /** @type {?} */
            var callback = _this13.nextCallback();
            /** @type {?} */


            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

            /** @type {?} */

            var node = _this13.document.createElement('script');

            node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.

            /** @type {?} */

            var body = null; // Whether the response callback has been called.

            /** @type {?} */

            var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.

            /** @type {?} */

            var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.

            _this13.callbackMap[callback] =
            /**
            * @param {?=} data
            * @return {?}
            */
            function (data) {
              // Data has been received from the JSONP script. Firstly, delete this callback.
              delete _this13.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

              if (cancelled) {
                return;
              } // Set state to indicate data was received.


              body = data;
              finished = true;
            }; // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.

            /** @type {?} */


            var cleanup =
            /**
            * @return {?}
            */
            function cleanup() {
              // Remove the <script> tag if it's still on the page.
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              } // Remove the response callback from the callbackMap (window object in the
              // browser).


              delete _this13.callbackMap[callback];
            }; // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.

            /** @type {?} */


            var onLoad =
            /**
            * @param {?} event
            * @return {?}
            */
            function onLoad(event) {
              // Do nothing if the request has been cancelled.
              if (cancelled) {
                return;
              } // Cleanup the page.


              cleanup(); // Check whether the response callback has run.

              if (!finished) {
                // It hasn't, something went wrong with the request. Return an error via
                // the Observable error path. All JSONP errors have status 0.
                observer.error(new HttpErrorResponse({
                  url: url,
                  status: 0,
                  statusText: 'JSONP Error',
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              } // Success. body either contains the response body or null if none was
              // returned.


              observer.next(new HttpResponse({
                body: body,
                status: 200,
                statusText: 'OK',
                url: url
              })); // Complete the stream, the response is over.

              observer.complete();
            }; // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              // If the request was already cancelled, no need to emit anything.
              if (cancelled) {
                return;
              }

              cleanup(); // Wrap the error in a HttpErrorResponse.

              observer.error(new HttpErrorResponse({
                error: error,
                status: 0,
                statusText: 'JSONP Error',
                url: url
              }));
            }; // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.


            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);

            _this13.document.body.appendChild(node); // The request has now been successfully sent.


            observer.next({
              type: HttpEventType.Sent
            }); // Cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              }
            );
          });
        }
      }]);

      return JsonpClientBackend;
    }();

    JsonpClientBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        _classCallCheck(this, JsonpInterceptor);

        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      _createClass(JsonpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method === 'JSONP') {
            return this.jsonp.handle(
            /** @type {?} */
            req);
          } // Fall through for normal HTTP requests.


          return next.handle(req);
        }
      }]);

      return JsonpInterceptor;
    }();

    JsonpInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {
      _classCallCheck(this, XhrFactory);
    };
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr =
    /*#__PURE__*/
    function () {
      function BrowserXhr() {
        _classCallCheck(this, BrowserXhr);
      }
      /**
       * @return {?}
       */


      _createClass(BrowserXhr, [{
        key: "build",
        value: function build() {
          return (
            /** @type {?} */
            new XMLHttpRequest()
          );
        }
      }]);

      return BrowserXhr;
    }();

    BrowserXhr.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        _classCallCheck(this, HttpXhrBackend);

        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      _createClass(HttpXhrBackend, [{
        key: "handle",
        value: function handle(req) {
          var _this14 = this;

          // Quick check to give a better error message when a user attempts to use
          // HttpClient.jsonp() without installing the JsonpClientModule
          if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
          } // Everything happens on Observable subscription.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.

            /** @type {?} */
            var xhr = _this14.xhrFactory.build();

            xhr.open(req.method, req.urlWithParams);

            if (!!req.withCredentials) {
              xhr.withCredentials = true;
            } // Add all the requested headers.


            req.headers.forEach(
            /**
            * @param {?} name
            * @param {?} values
            * @return {?}
            */
            function (name, values) {
              return xhr.setRequestHeader(name, values.join(','));
            }); // Add an Accept header if one isn't present already.

            if (!req.headers.has('Accept')) {
              xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            } // Auto-detect the Content-Type header if one isn't present already.


            if (!req.headers.has('Content-Type')) {
              /** @type {?} */
              var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

              if (detectedType !== null) {
                xhr.setRequestHeader('Content-Type', detectedType);
              }
            } // Set the responseType if one was requested.


            if (req.responseType) {
              /** @type {?} */
              var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
              // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
              // xhr.response will be null, and xhr.responseText cannot be accessed to
              // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
              // is parsed by first requesting text and then applying JSON.parse.

              xhr.responseType =
              /** @type {?} */
              responseType !== 'json' ? responseType : 'text';
            } // Serialize the request body if one is present. If not, this will be set to null.

            /** @type {?} */


            var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.

            /** @type {?} */

            var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.

            /** @type {?} */

            var partialFromXhr =
            /**
            * @return {?}
            */
            function partialFromXhr() {
              if (headerResponse !== null) {
                return headerResponse;
              } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

              /** @type {?} */


              var status = xhr.status === 1223 ? 204 : xhr.status;
              /** @type {?} */

              var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

              /** @type {?} */

              var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
              // request URL.

              /** @type {?} */

              var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

              headerResponse = new HttpHeaderResponse({
                headers: headers,
                status: status,
                statusText: statusText,
                url: url
              });
              return headerResponse;
            }; // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.

            /** @type {?} */


            var onLoad =
            /**
            * @return {?}
            */
            function onLoad() {
              // Read response state from the memoized partial data.
              var _partialFromXhr = partialFromXhr(),
                  headers = _partialFromXhr.headers,
                  status = _partialFromXhr.status,
                  statusText = _partialFromXhr.statusText,
                  url = _partialFromXhr.url; // The body will be read out if present.

              /** @type {?} */


              var body = null;

              if (status !== 204) {
                // Use XMLHttpRequest.response if set, responseText otherwise.
                body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
              } // Normalize another potential bug (this one comes from CORS).


              if (status === 0) {
                status = !!body ? 200 : 0;
              } // ok determines whether the response will be transmitted on the event or
              // error channel. Unsuccessful status codes (not 2xx) will always be errors,
              // but a successful status code can still result in an error if the user
              // asked for JSON data and the body cannot be parsed as such.

              /** @type {?} */


              var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
              // will have done that already).

              if (req.responseType === 'json' && typeof body === 'string') {
                // Save the original body, before attempting XSSI prefix stripping.

                /** @type {?} */
                var originalBody = body;
                body = body.replace(XSSI_PREFIX, '');

                try {
                  // Attempt the parse. If it fails, a parse error should be delivered to the user.
                  body = body !== '' ? JSON.parse(body) : null;
                } catch (error) {
                  // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                  // JSON response. Restore the original body (including any XSSI prefix) to deliver
                  // a better error response.
                  body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                  // just isn't JSON. Otherwise, deliver the parsing error to the user.

                  if (ok) {
                    // Even though the response status was 2xx, this is still an error.
                    ok = false; // The parse error contains the text of the body that failed to parse.

                    body =
                    /** @type {?} */
                    {
                      error: error,
                      text: body
                    };
                  }
                }
              }

              if (ok) {
                // A successful response is delivered on the event stream.
                observer.next(new HttpResponse({
                  body: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                })); // The full body has been received and delivered, no further events
                // are possible. This request is complete.

                observer.complete();
              } else {
                // An unsuccessful request is delivered on the error channel.
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                }));
              }
            }; // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              var _partialFromXhr2 = partialFromXhr(),
                  url = _partialFromXhr2.url;
              /** @type {?} */


              var res = new HttpErrorResponse({
                error: error,
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Unknown Error',
                url: url || undefined
              });
              observer.error(res);
            }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.

            /** @type {?} */


            var sentHeaders = false; // The download progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */

            var onDownProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onDownProgress(event) {
              // Send the HttpResponseHeaders event if it hasn't been sent already.
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              } // Start building the download progress event to deliver on the response
              // event stream.

              /** @type {?} */


              var progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              }; // Set the total number of bytes in the event if it's available.

              if (event.lengthComputable) {
                progressEvent.total = event.total;
              } // If the request was for text content and a partial response is
              // available on XMLHttpRequest, include it in the progress event
              // to allow for streaming reads.


              if (req.responseType === 'text' && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              } // Finally, fire the event.


              observer.next(progressEvent);
            }; // The upload progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */


            var onUpProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onUpProgress(event) {
              // Upload progress events are simpler. Begin building the progress
              // event.

              /** @type {?} */
              var progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              }; // If the total number of bytes being uploaded is available, include
              // it.

              if (event.lengthComputable) {
                progress.total = event.total;
              } // Send the event.


              observer.next(progress);
            }; // By default, register for load and error events.


            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

            if (req.reportProgress) {
              // Download progress is always enabled if requested.
              xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener('progress', onUpProgress);
              }
            } // Fire the request, and notify the event stream that it was fired.


            xhr.send(
            /** @type {?} */
            reqBody);
            observer.next({
              type: HttpEventType.Sent
            }); // This is the return from the Observable function, which is the
            // request cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                xhr.abort();
              }
            );
          });
        }
      }]);

      return HttpXhrBackend;
    }();

    HttpXhrBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
      _classCallCheck(this, HttpXsrfTokenExtractor);
    };
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        _classCallCheck(this, HttpXsrfCookieExtractor);

        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      _createClass(HttpXsrfCookieExtractor, [{
        key: "getToken",
        value: function getToken() {
          if (this.platform === 'server') {
            return null;
          }
          /** @type {?} */


          var cookieString = this.doc.cookie || '';

          if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
          }

          return this.lastToken;
        }
      }]);

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        _classCallCheck(this, HttpXsrfInterceptor);

        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      _createClass(HttpXsrfInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          /** @type {?} */
          var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
          // Non-mutating requests don't require a token, and absolute URLs require special handling
          // anyway as the cookie set
          // on our origin is not the same as the token expected by another origin.

          if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
            return next.handle(req);
          }
          /** @type {?} */


          var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

          if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({
              headers: req.headers.set(this.headerName, token)
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        _classCallCheck(this, HttpInterceptingHandler);

        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptingHandler, [{
        key: "handle",
        value: function handle(req) {
          if (this.chain === null) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(
            /**
            * @param {?} next
            * @param {?} interceptor
            * @return {?}
            */
            function (next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.backend);
          }

          return this.chain.handle(req);
        }
      }]);

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule =
    /*#__PURE__*/
    function () {
      function HttpClientXsrfModule() {
        _classCallCheck(this, HttpClientXsrfModule);
      }

      _createClass(HttpClientXsrfModule, null, [{
        key: "disable",

        /**
         * Disable the default XSRF protection.
         * @return {?}
         */
        value: function disable() {
          return {
            ngModule: HttpClientXsrfModule,
            providers: [{
              provide: HttpXsrfInterceptor,
              useClass: NoopInterceptor
            }]
          };
        }
        /**
         * Configure XSRF protection.
         * @param {?=} options An object that can specify either or both
         * cookie name or header name.
         * - Cookie name default is `XSRF-TOKEN`.
         * - Header name default is `X-XSRF-TOKEN`.
         *
         * @return {?}
         */

      }, {
        key: "withOptions",
        value: function withOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: HttpClientXsrfModule,
            providers: [options.cookieName ? {
              provide: XSRF_COOKIE_NAME,
              useValue: options.cookieName
            } : [], options.headerName ? {
              provide: XSRF_HEADER_NAME,
              useValue: options.headerName
            } : []]
          };
        }
      }]);

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientModule = function HttpClientModule() {
      _classCallCheck(this, HttpClientModule);
    };

    HttpClientModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        /**
         * Optional configuration for XSRF protection.
         */
        imports: [HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })],

        /**
         * Configures the [dependency injector](guide/glossary#injector) where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientJsonpModule = function HttpClientJsonpModule() {
      _classCallCheck(this, HttpClientJsonpModule);
    };

    HttpClientJsonpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/
  },

  /***/
  "./node_modules/@ionic-native/sqlite/ngx/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@ionic-native/sqlite/ngx/index.js ***!
    \********************************************************/

  /*! exports provided: SQLiteObject, SQLite */

  /***/
  function node_modulesIonicNativeSqliteNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SQLiteObject", function () {
      return SQLiteObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SQLite", function () {
      return SQLite;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var SQLiteObject =
    /** @class */
    function () {
      function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
      }

      SQLiteObject.prototype.addTransaction = function (transaction) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "addTransaction", {
          "sync": true
        }, arguments);
      };

      SQLiteObject.prototype.transaction = function (fn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "transaction", {
          "successIndex": 2,
          "errorIndex": 1
        }, arguments);
      };

      SQLiteObject.prototype.readTransaction = function (fn) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "readTransaction", {}, arguments);
      };

      SQLiteObject.prototype.startNextTransaction = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "startNextTransaction", {
          "sync": true
        }, arguments);
      };

      SQLiteObject.prototype.open = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "open", {}, arguments);
      };

      SQLiteObject.prototype.close = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "close", {}, arguments);
      };

      SQLiteObject.prototype.executeSql = function (statement, params) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "executeSql", {}, arguments);
      };

      SQLiteObject.prototype.sqlBatch = function (sqlStatements) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "sqlBatch", {}, arguments);
      };

      SQLiteObject.prototype.abortallPendingTransactions = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abortallPendingTransactions", {
          "sync": true
        }, arguments);
      };

      Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "databaseFeatures");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "databaseFeatures", value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function get() {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertyGet"])(this, "openDBs");
        },
        set: function set(value) {
          Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instancePropertySet"])(this, "openDBs", value);
        },
        enumerable: true,
        configurable: true
      });
      return SQLiteObject;
    }();

    var SQLite =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SQLite, _super);

      function SQLite() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      SQLite.prototype.create = function (config) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(_this) === true) {
            return new Promise(function (resolve, reject) {
              sqlitePlugin.openDatabase(config, function (db) {
                return resolve(new SQLiteObject(db));
              }, reject);
            });
          }
        }();
      };

      SQLite.prototype.echoTest = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "echoTest", {}, arguments);
      };

      SQLite.prototype.selfTest = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "selfTest", {}, arguments);
      };

      SQLite.prototype.deleteDatabase = function (config) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteDatabase", {}, arguments);
      };

      SQLite.pluginName = "SQLite";
      SQLite.pluginRef = "sqlitePlugin";
      SQLite.plugin = "cordova-sqlite-storage";
      SQLite.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
      SQLite.platforms = ["Android", "iOS", "macOS", "Windows"];
      SQLite = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SQLite);
      return SQLite;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NxbGl0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw0R0FPTixNQUFNLG9CQUFvQixDQUFDOztJQXlEMUIsc0JBQW1CLGVBQW9CO1FBQXBCLG9CQUFlLEdBQWYsZUFBZSxDQUFLO0lBQUcsQ0FBQztJQVEzQyxxQ0FBYyxhQUFDLFdBQTRDO0lBVTNELGtDQUFXLGFBQUMsRUFBK0I7SUFTM0Msc0NBQWUsYUFBQyxFQUFtQztJQU9uRCwyQ0FBb0I7SUFNcEIsMkJBQUk7SUFRSiw0QkFBSztJQVNMLGlDQUFVLGFBQUMsU0FBaUIsRUFBRSxNQUFjO0lBUzVDLCtCQUFRLGFBQUMsYUFBMEM7SUFPbkQsa0RBQTJCOzBCQXZFUCwwQ0FBZ0I7Ozs7OzswQkFDaEIsaUNBQU87Ozs7Ozt1QkFwRTdCOzs7O0lBMkw0QiwwQkFBaUI7Ozs7SUFVM0MsdUJBQU0sYUFBQyxNQUE0Qjs7O21EQUF5QjtnQkFDMUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUNqQyxZQUFZLENBQUMsWUFBWSxDQUN2QixNQUFNLEVBQ04sVUFBQyxFQUFPLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFDMUMsTUFBTSxDQUNQLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBT0QseUJBQVE7SUFTUix5QkFBUTtJQVVSLCtCQUFjLGFBQUMsTUFBNEI7Ozs7OztJQTVDaEMsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTNMbkI7RUEyTDRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSBjb25zdCBzcWxpdGVQbHVnaW46IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVEYXRhYmFzZUNvbmZpZyB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLiBFeGFtcGxlOiAnZGVmYXVsdCdcbiAgICovXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogaU9TIERhdGFiYXNlIExvY2F0aW9uLiBFeGFtcGxlOiAnTGlicmFyeSdcbiAgICovXG4gIGlvc0RhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzdXBwb3J0IG9wZW5pbmcgcHJlLWZpbGxlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvY29yZG92YS1zcWxpdGUtZXh0XG4gICAqL1xuICBjcmVhdGVGcm9tTG9jYXRpb24/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBzdXBwb3J0IGVuY3J5cHRlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxjaXBoZXItYWRhcHRlclxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYlRyYW5zYWN0aW9uIHtcbiAgZXhlY3V0ZVNxbDogKFxuICAgIHNxbDogYW55LFxuICAgIHZhbHVlcz86IGFueVtdLFxuICAgIHN1Y2Nlc3M/OiBGdW5jdGlvbixcbiAgICBlcnJvcj86IEZ1bmN0aW9uXG4gICkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMaXRlVHJhbnNhY3Rpb24gZXh0ZW5kcyBEYlRyYW5zYWN0aW9uIHtcbiAgc3RhcnQ6ICgpID0+IHZvaWQ7XG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xuICBoYW5kbGVTdGF0ZW1lbnRTdWNjZXNzOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XG4gIGhhbmRsZVN0YXRlbWVudEZhaWx1cmU6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcbiAgcnVuOiAoKSA9PiB2b2lkO1xuICBhYm9ydDogKHR4RmFpbHVyZTogYW55KSA9PiB2b2lkO1xuICBmaW5pc2g6ICgpID0+IHZvaWQ7XG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfb2JqZWN0SW5zdGFuY2U6IGFueSkge31cblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9wZW5EQnM6IGFueTtcblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7XG4gICAgc3VjY2Vzc0luZGV4OiAyLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgdHJhbnNhY3Rpb24oZm46ICh0eDogRGJUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVhZFRyYW5zYWN0aW9uKGZuOiAodHg6IFNRTGl0ZVRyYW5zYWN0aW9uKSA9PiB2b2lkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHN0YXJ0TmV4dFRyYW5zYWN0aW9uKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXG4gICAqIGVuc3VyZSBpdCByZXNvbHZlZCBhbmQgc3VjY2Vzc2Z1bGx5IG9wZW5lZCB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3FsU3RhdGVtZW50cyB7c3RyaW5nW10gfCBzdHJpbmdbXVtdIHwgYW55W119XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0YWxsUGVuZGluZ1RyYW5zYWN0aW9ucygpOiB2b2lkIHt9XG59XG5cbi8qKlxuICogQG5hbWUgU1FMaXRlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgU1FMaXRlIGRhdGFiYXNlcyBvbiB0aGUgZGV2aWNlLlxuICpcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcWxpdGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZTogU1FMaXRlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNxbGl0ZS5jcmVhdGUoe1xuICogICBuYW1lOiAnZGF0YS5kYicsXG4gKiAgIGxvY2F0aW9uOiAnZGVmYXVsdCdcbiAqIH0pXG4gKiAgIC50aGVuKChkYjogU1FMaXRlT2JqZWN0KSA9PiB7XG4gKlxuICpcbiAqICAgICBkYi5leGVjdXRlU3FsKCdjcmVhdGUgdGFibGUgZGFuY2VNb3ZlcyhuYW1lIFZBUkNIQVIoMzIpKScsIFtdKVxuICogICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V4ZWN1dGVkIFNRTCcpKVxuICogICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICpcbiAqXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAY2xhc3Nlc1xuICogU1FMaXRlT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogU1FMaXRlRGF0YWJhc2VDb25maWdcbiAqIFNRTGl0ZVRyYW5zYWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU1FMaXRlJyxcbiAgcGx1Z2luUmVmOiAnc3FsaXRlUGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1FMaXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cbiAgICpcbiAgICogU2VlIHRoZSBwbHVnaW4gZG9jcyBmb3IgYW4gZXhwbGFuYXRpb24gb2YgYWxsIG9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlI29wZW5pbmctYS1kYXRhYmFzZVxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIHtTUUxpdGVEYXRhYmFzZUNvbmZpZ30gZGF0YWJhc2UgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIFByb21pc2U8U1FMaXRlT2JqZWN0PlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxTUUxpdGVPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShcbiAgICAgICAgY29uZmlnLFxuICAgICAgICAoZGI6IGFueSkgPT4gcmVzb2x2ZShuZXcgU1FMaXRlT2JqZWN0KGRiKSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgdGhhdCBib3RoIHRoZSBKYXZhc2NyaXB0IGFuZCBuYXRpdmUgcGFydCBvZiB0aGlzIHBsdWdpbiBhcmUgaW5zdGFsbGVkIGluIHlvdXIgYXBwbGljYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZWNob1Rlc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZWxmVGVzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlRGF0YWJhc2UoY29uZmlnOiBTUUxpdGVEYXRhYmFzZUNvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      Spaces\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n  <div #map id=\"map\" [hidden]=\"!user\"></div>\n  \n\n  <body style=\"background-color:rgb(39, 39, 39);\">\n  \n    <br>\n    <br>\n    <p style=\"text-align:center; color: rgb(255, 255, 255);\">Parking information displays here</p>\n  \n  </body>\n</ion-content>\n";
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


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"]]
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


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hlcnBvbGhvZGUvY2kxMDMvU3BhY2VzQXBwL0dvb2dsZU1hcHNJb25pYyBjb3B5L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2NSU7XG59XG5cbiIsIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NSU7XG59Il19 */";
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /*
    Title: Home Page classes
    Purpose: Script active features for application
    Version/Date: Version 1.2 01/28/2020
    Author(s): Cole Hoener
    Dependencies: Below
    */
    //selects the applied files to interact with


    var HomePage =
    /*#__PURE__*/
    //Main class
    function () {
      //Main constructor (code goes here)
      function HomePage(afAuth, afs, geolocation, sqlite, http) {
        _classCallCheck(this, HomePage);

        this.afAuth = afAuth;
        this.afs = afs;
        this.geolocation = geolocation;
        this.sqlite = sqlite;
        this.http = http;
        this.user = null;
        this.markers = [];
        this.anonLogin();
      } //On startup of homepage this runs


      _createClass(HomePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this15 = this;

          var latLng = new google.maps.LatLng(39.9566, -75.1899);
          this.openDB().then(function (db) {
            return _this15.db = db;
          }).then(function () {
            return _this15.initDB();
          }).then(function () {
            return _this15.getGarageIds();
          }).then(function (ids) {
            return _this15.getGarageAddress(ids[0]);
          }).then(function (address) {
            return console.log('Address: ' + address);
          }).catch(function (e) {
            return console.log(e);
          });
          this.loadMap(latLng);
        }
      }, {
        key: "getUserLocation",
        value: function getUserLocation() {
          var _this16 = this;

          console.log("Ran getUserLocation().");
          this.geolocation.getCurrentPosition().then(function (resp) {
            _this16.lat = resp.coords.latitude;
            _this16.lng = resp.coords.longitude;
            console.log("Ran geolocation.");
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var userMarkerImage = {
              url: '/assets/redDot.png',
              size: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(11, 11),
              scaledSize: new google.maps.Size(20, 20)
            };
            var currentMarker = new google.maps.Marker({
              map: _this16.map,
              position: latLng,
              icon: userMarkerImage
            }); //zooms to user current location

            _this16.map.setZoom(15);

            _this16.map.setCenter(currentMarker.getPosition());

            _this16.directions(new google.maps.LatLng(39.956587, -75.204674));
          });
        } //Loads map

      }, {
        key: "loadMap",
        value: function loadMap(latLng) {
          var directionsService = new google.maps.DirectionsService();
          var directionsRenderer = new google.maps.DirectionsRenderer();
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
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          var latLng2 = new google.maps.LatLng(39.956587, -75.204674);
          this.addMarker("Test", latLng2);
        } //Watches for position changes

      }, {
        key: "watchPositionChange",
        value: function watchPositionChange() {
          var _this17 = this;

          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            _this17.lat = data.coords.latitude;
            _this17.lng = data.coords.longitude;
            var latLng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var currentMarker = new google.maps.Marker({
              map: _this17.map,
              position: latLng
            });
            console.log("Location updated.");
          });
        }
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
          directionsRenderer.setMap(this.map);
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
        }
      }, {
        key: "addMarker",
        value: function addMarker(title, position) {
          var myLatlng = new google.maps.LatLng(39.956587, -75.194674);
          var marker = new google.maps.Marker({
            //map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            title: title
          });
          marker.setMap(this.map);
          marker.addListener('click', function () {
            console.log("Clicked Marker");
          });
        } //Firebase login

      }, {
        key: "anonLogin",
        value: function anonLogin() {
          var _this18 = this;

          this.afAuth.auth.signInAnonymously().then(function (user) {
            console.log(user);
            _this18.user = user;
            _this18.locationsCollection = _this18.afs.collection('locations/${this.user.uid}/track', function (ref) {
              return ref.orderBy('timestamp');
            });
          });
        }
      }, {
        key: "openDB",
        value: function openDB() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var db;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(window.cordova.platformId === 'browser')) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return window.openDatabase('garages', '1.0', 'Data', 2 * 1024 * 1024);

                  case 3:
                    db = _context.sent;
                    console.log('Opened DB.');
                    return _context.abrupt("return", db);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "initDB",
        value: function initDB() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var script, commands, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, command;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.http.get('../../assets/garages.sql', {
                      responseType: 'text'
                    }).toPromise();

                  case 2:
                    script = _context2.sent;
                    commands = script.split(";");

                    if (!(window.cordova.platformId === 'browser')) {
                      _context2.next = 32;
                      break;
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 8;
                    _iterator = commands[Symbol.iterator]();

                  case 10:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context2.next = 17;
                      break;
                    }

                    command = _step.value;
                    _context2.next = 14;
                    return this.execSQL(command);

                  case 14:
                    _iteratorNormalCompletion = true;
                    _context2.next = 10;
                    break;

                  case 17:
                    _context2.next = 23;
                    break;

                  case 19:
                    _context2.prev = 19;
                    _context2.t0 = _context2["catch"](8);
                    _didIteratorError = true;
                    _iteratorError = _context2.t0;

                  case 23:
                    _context2.prev = 23;
                    _context2.prev = 24;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 26:
                    _context2.prev = 26;

                    if (!_didIteratorError) {
                      _context2.next = 29;
                      break;
                    }

                    throw _iteratorError;

                  case 29:
                    return _context2.finish(26);

                  case 30:
                    return _context2.finish(23);

                  case 31:
                    console.log('Initialized DB.');

                  case 32:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[8, 19, 23, 31], [24,, 26, 30]]);
          }));
        } // get all garageIDs

      }, {
        key: "getGarageIds",
        value: function getGarageIds() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var results;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.execSQL('SELECT garageID FROM Garage');

                  case 2:
                    results = _context3.sent;

                    if (results instanceof Array) {
                      results = results.map(function (res) {
                        return res.garageID;
                      });
                    } else {
                      console.log('This shouldn\'t happen.');
                    }

                    return _context3.abrupt("return", results);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // get address of garage

      }, {
        key: "getGarageAddress",
        value: function getGarageAddress(garageID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var results;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.execSQL('SELECT address FROM Garage WHERE garageID = ' + garageID);

                  case 2:
                    results = _context4.sent;

                    if (results instanceof Array) {
                      results = results.map(function (res) {
                        return res.address;
                      });
                    } else {
                      console.log('This shouldn\'t happen.');
                    }

                    return _context4.abrupt("return", results[0]);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } //exec Sql callback wrapper

      }, {
        key: "execSQL",
        value: function execSQL(command) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var db;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    db = this.db;
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      var data = [];
                      db.transaction(function (tx) {
                        console.log(command);
                        tx.executeSql(command, [], function (tx, results) {
                          for (var i = 0; i < results.rows.length; i++) {
                            data.push(results.rows.item(i));
                          }
                        }, function (tx, error) {
                          console.log('SQL ERROR: ' + error.message);
                        });
                      }, function (error) {
                        console.log('Transaction ERROR: ' + error.message);
                        reject(error);
                      }, function () {
                        console.log('Transaction executed.');
                        resolve(data);
                      });
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
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
    , tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map