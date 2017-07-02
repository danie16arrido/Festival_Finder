var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./MapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);
}

window.addEventListener('load', initialize);
