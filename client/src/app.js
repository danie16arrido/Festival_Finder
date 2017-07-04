var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

<<<<<<< HEAD
  var ResultsFestivals = require("./resultsFestivals")
  var results = new ResultsFestivals();


=======
  var types = ["Film", "Music", "Carnival", "Religious/Traditional", "New Year", "Food and Drink", "Featured"];
>>>>>>> 4c244ffc6ba933035baea1ab75b7f68a6b74c061

  mainMap.addAllMarkers();
  results.render();

  var SearchButton = require('./searchButtons.js')
  var buttons = new SearchButton(types);

  buttons.renderAllButtons();

}


window.addEventListener('load', initialize);

