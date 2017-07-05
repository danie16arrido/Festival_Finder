var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

  mainMap.addAllMarkers();

  var ResultsFestivals = require("./resultsFestivals")
  var results = new ResultsFestivals();

  results.renderSliderFestivals();

  var SearchButton = require('./searchButtons.js')
  var buttons = new SearchButton(mainMap);

  buttons.renderAllButtons();
  buttons.renderFavButton();

}

window.addEventListener('load', initialize);
