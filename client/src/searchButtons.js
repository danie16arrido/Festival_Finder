var ResultsFestivals = require('./resultsFestivals.js');
var user = require('./userId.js');

var SearchButton = function(map){
  this.currentUserId = "http://localhost:3000/api/users/festivals/" + user.id;
  this.typeUrl = "http://localhost:3000/api/festivals/type/";
  this.types = ["Film", "Music", "Carnival", "Religious Traditional", "New Year", "Food and Drink", "Scenic Arts"];
  this.favourites = "Favourites";
  this.map = map;
}

SearchButton.prototype = {

  renderButton: function(type) {
    var appendDiv = document.createElement('div');
    appendDiv.classList.add('search-div');

    var button = document.createElement('button');
    button.value = type;
    button.innerText = type + " Festivals";
    button.classList.add('search-button');

    button.addEventListener('click', this.handleButtonClick.bind(this));

    appendDiv.appendChild(button);

    var searchDiv = document.getElementById('search-bar');
    searchDiv.appendChild(appendDiv);
  },

  renderAllButtons: function(){
    this.types.forEach(function(type) {
      this.renderButton(type);
    }.bind(this))
  },

  handleButtonClick: function( event ) {
    var results = new ResultsFestivals();
    var apiCall = this.createUrl( event.target.value );
    //WE WANT TO RENDER MAP MARKERS
    this.map.clearMarkers();
    this.map.addMarkers( apiCall )
    results.renderSliderFestivals( apiCall );
  },

  handleButtonFavouritesClick: function( event ) {
    var results = new ResultsFestivals( true );
    results.renderSliderFestivals( event.target.value );
  },

  createUrl: function ( buttonValue ) {
    var apiCall = this.typeUrl;
    var type = buttonValue.toString();
    type = type.split(' ').join('_');
    apiCall += type;
    return apiCall;
  },

  renderFavButton: function( fav ) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('head-div');

    var button = document.createElement('button');
    button.innerText = " Favourites";
    button.value = this.currentUserId;


    button.classList.add('header-fav-button');

    button.addEventListener('click', this.handleButtonFavouritesClick);

    appendDiv.appendChild(button);

    var header = document.getElementById('search-bar');
    header.appendChild(appendDiv);
  }
}

module.exports = SearchButton;
