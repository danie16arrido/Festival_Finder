/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var initialize = function(){

  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = __webpack_require__(1);
  var mainMap = new MapWrapper(mapDiv, center, 2);

  //to be delete, only to show how the api call works
  var FestivalsQuery =  __webpack_require__(2);
  url = 'http://localhost:3000/api/festivals';
  var list = new FestivalsQuery( url );
  list.getData( function() {
    for( ele of list.festivals){
      console.log(ele.position)
    }
  });
  //to be delete, only to show how the api call works

}

window.addEventListener('load', initialize);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

module.exports = MapWrapper;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var FestivalsList = function ( url ) {
  this.url = url;
  this.festivals = [];
}

FestivalsList.prototype = {

  getData: function ( callback) {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.send();
    request.onreadystatechange = function () {
      if(request.readyState < 4){
      } else if( request.readyState === 4 && request.status === 200 ) {
        var jsonString = request.responseText;
        var festivals = JSON.parse(jsonString);
        this.festivals = festivals;
        callback();
      }
    }.bind( this )
  }
}

module.exports = FestivalsList;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map