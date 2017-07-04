var SearchButton = function(typesFromApp, fav){
  this.types = typesFromApp;
  this.favourites = fav;
}

SearchButton.prototype = {

  renderButton: function(type) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('search-div');

    var button = document.createElement('button');
    button.value = type;
    button.innerText = type + " Festivals";

    button.addEventListener('click', this.handleButtonClick);

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
    var ResultsFestivals = require('./resultsFestivals.js');
    var results = new ResultsFestivals();
    var apiCall = "http://localhost:3000/api/festivals/type/";
    var type = (event.target.value).toString();
    type = type.split(' ').join('_');
    apiCall += type;
    console.log( apiCall  );

    // results.renderSliderFestivals( url );

  },

  renderFavButton: function(fav) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('head-div');

    var button = document.createElement('button');
    button.innerText = " Favourites";

    button.addEventListener('click', this.handleButtonClick);

    appendDiv.appendChild(button);

    var header = document.getElementById('header');
    header.appendChild(appendDiv);
  }
}

module.exports = SearchButton;
