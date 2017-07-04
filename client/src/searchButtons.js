var SearchButton = function(typesFromApp){
  this.types = typesFromApp;
}

SearchButton.prototype = {

  renderButton: function(type) {
    var appendDiv = document.createElement('appendDiv');
    appendDiv.classList.add('search-div');
    
    var button = document.createElement('button');
    button.innerText = type + " Festivals";

    appendDiv.appendChild(button);

    var searchDiv = document.getElementById('search-bar');
    searchDiv.appendChild(appendDiv);
  },

  renderAllButtons: function(){
    console.log(this.types);
    this.types.forEach(function(type) {
      console.log(type);
      this.renderButton(type);
    }.bind(this))
  }
}

module.exports = SearchButton;
