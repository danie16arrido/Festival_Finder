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
  var mainMap = new MapWrapper(mapDiv, center, 2);

  var ResultsFestivals = __webpack_require__(5)
  var results = new ResultsFestivals();



  mainMap.addAllMarkers();
  results.render();

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
/***/ (function(module, exports, __webpack_require__) {

var FestivalsList = __webpack_require__(3);
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
  this.list = new FestivalsList( null );
  this.allFestivalsUrl = 'http://localhost:3000/api/festivals';
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

MapWrapper.prototype = {
  addMarker: function(ele){
    var marker = new google.maps.Marker({
      position: ele.position,
      map: this.googleMap
    });
  },

  addMarkers: function(url){
    this.list.url = url;
    this.list.getData( function() {
      this.list.festivals.forEach(function(ele){
        this.addMarker(ele);
      }.bind(this));
    }.bind(this));
  },

  addAllMarkers: function(){
    this.addMarkers(this.allFestivalsUrl);
  }
}


module.exports = MapWrapper;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var ResultsFestivals = function() {
  var FestivalsList = __webpack_require__(3);
  var url = 'http://localhost:3000/api/festivals'
  this.list = new FestivalsList(url);
  // this.selectedIndex = 0;
}

ResultsFestivals.prototype = {

  render: function(){

    var festivalList = document.getElementById('festival-div');
    
    this.list.getData(function() {
      this.list.festivals.forEach(function(ele){
        var festival = document.createElement('div');
        
        var image = document.createElement('img');
        var h3 = document.createElement('h3');
        var country = document.createElement('p');
        var date = document.createElement('p');

        image.classList.add('festival-image');
        image.src = ele.image;

        h3.classList.add('festival-title');
        h3.innerText = ele.title;

        country.classList.add('festival-country');
        country.innerText = ele.country;  

        date.classList.add('festival-date');
        date.innerText = ele.start;


        festival.classList.add('festival');
        
        festival.appendChild(image);
        festival.appendChild(h3);
        festival.appendChild(country);
        festival.appendChild(date);

        
        festivalList.appendChild(festival);
      }.bind(this));
    }.bind(this));

    

  }

}


module.exports = ResultsFestivals;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map