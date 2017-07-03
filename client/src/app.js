var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

  var types = ["Film", "Music", "Carnival", "Religious/Traditional", "New Year", "Food and Drink", "Featured"];

  mainMap.addAllMarkers();

  // searchButtons.render();

  // var SearchButton = require('./searchButton.js')
  // var buttons = new SearchButton();

  var renderAllButtons = function(){
    types.forEach(function(type) {
      renderButton(type);
    })
  }

  var renderButton = function(type) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('search-div');
    
    var button = document.createElement('button');
    button.innerText = type + " Festivals";

    appendDiv.appendChild(button);

    var searchDiv = document.getElementById('search-bar');
    searchDiv.appendChild(appendDiv);
  }
  renderAllButtons();
}


window.addEventListener('load', initialize);

