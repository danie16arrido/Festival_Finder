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

  var MapWrapper = __webpack_require__(4);
  this.mainMap = new MapWrapper(mapDiv, center, 2);

  var FestivalsList = __webpack_require__(3);
  url = 'http://localhost:3000/api/festivals';
  this.list = new FestivalsList( url );

  addMarkers();

}

var addMarkers = function(){
  this.list.getData( function() {
    this.list.festivals.forEach(function(ele){
      var marker = new google.maps.Marker({
        position: ele.position,
        map: this.mainMap.googleMap
      });
    }.bind(this));
  }.bind(this));

}

window.addEventListener('load', initialize);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

//source for the color settings in the map
var styledMapType = new google.maps.StyledMapType(
  [
    {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
  {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
  {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
  {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
  {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
  {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
  {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
  {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}
  ], {name: 'Styled Map'}
);

var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    //below option needed for colouring maps
    mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
  });
  //below option needed for colouring maps
  this.googleMap.mapTypes.set('styled_map', styledMapType);
  this.googleMap.setMapTypeId('styled_map');
}

module.exports = MapWrapper;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map