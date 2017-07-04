var SearchButton = function(typesFromApp){
  this.types = typesFromApp;
}

SearchButton.prototype = {

  renderButton: function(type) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('search-div');
    
    var button = document.createElement('button');
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

  handleButtonClick: function() {
   console.log("button clicked");
  }
}

module.exports = SearchButton;
