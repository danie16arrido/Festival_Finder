var ResultsFestivals = require('./resultsFestivals.js');

var SearchButton = function(typesFromApp, fav){
  this.types = typesFromApp;
  this.favourites = fav;
  this.currentUserId = "http://localhost:3000/api/users/festivals/595bb6d08d674fbaeb556a42";
}

SearchButton.prototype = {

  renderButton: function(type) {
    var appendDiv = document.createElement('div');
    appendDiv.classList.add('search-div');

    var button = document.createElement('button');
    button.value = type;
    button.innerText = type + " Festivals";

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
    results.renderSliderFestivals( apiCall );
  },

  handleButtonFavouritesClick: function( event ) {
    var results = new ResultsFestivals( true );
    results.renderSliderFestivals( event.target.value );
  },

  createUrl: function ( buttonValue ) {
    var apiCall = "http://localhost:3000/api/festivals/type/";
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

    button.addEventListener('click', this.handleButtonFavouritesClick);

    appendDiv.appendChild(button);

    var header = document.getElementById('header');
    header.appendChild(appendDiv);
  }
}

module.exports = SearchButton;
