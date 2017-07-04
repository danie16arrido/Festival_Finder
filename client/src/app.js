var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

  var ResultsFestivals = require("./resultsFestivals")
  var results = new ResultsFestivals();

  var types = ["Film", "Music", "Carnival", "Religious Traditional", "New Year", "Food and Drink", "Scenic Arts", "Featured"];
  var fav = "Favourites";


  results.renderSliderFestivals('http://localhost:3000/api/festivals/country/Scotland');

  mainMap.addAllMarkers();

  var SearchButton = require('./searchButtons.js')
  var buttons = new SearchButton(types, fav);

  buttons.renderAllButtons();
  buttons.renderFavButton();

}


window.addEventListener('load', initialize);
