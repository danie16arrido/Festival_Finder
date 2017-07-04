var ResultsFestivals = function() {
  var FestivalsList = require("./festivalsList");
  var url = 'http://localhost:3000/api/festivals'
  this.list = new FestivalsList(url);
  // this.selectedIndex = 0;
}

ResultsFestivals.prototype = {

  render: function(){

    var festivalList = document.getElementById('festival-div');
    
    this.list.getData(function() {
      this.list.festivals.forEach(function(ele){
        //festival container
        var festival = document.createElement('div');
        
        //festival container's body
        var image = document.createElement('img');
        var h3 = document.createElement('h3');
        var country = document.createElement('p');
        var date = document.createElement('p');
       
       //overlay container and it's body
        var overlay = document.createElement('div');
        var overlayBody = document.createElement('div');

        //overlayBody container's body
        var h2 = document.createElement('h3');
        var description = document.createElement('p');
        var countryOverlay = document.createElement('p');
        var dateOverlay = document.createElement('p');
        var favButton = document.createElement('button');

        festival.classList.add('festival');

        //festival's container's body
        image.classList.add('festival-image');
        image.src = ele.image;

        h3.classList.add('festival-title');
        h3.innerText = ele.title;

        country.classList.add('festival-country');
        country.innerText = ele.country;  

        date.classList.add('festival-date');
        date.innerText = ele.start;

        overlay.classList.add('overlay');
        overlayBody.classList.add('overlay-body');

        //overlayBody container's body
        h2.innerText = ele.title;
        description.innerText = ele.description;
        countryOverlay.innerText = ele.country;
        dateOverlay.innerText = ele.start + "-" + ele.end;
        favButton.innerText = "Add to favourites";

        favButton.classList.add('fav-button');

        
        festival.appendChild(image);
        festival.appendChild(h3);
        festival.appendChild(country);
        festival.appendChild(date);

        overlayBody.appendChild(h2);
        overlayBody.appendChild(description);
        overlayBody.appendChild(countryOverlay);
        overlayBody.appendChild(dateOverlay);
        overlayBody.appendChild(favButton);
        
        overlay.appendChild(overlayBody);

        festival.appendChild(overlay);
        
        festivalList.appendChild(festival);
    
      }.bind(this));
    }.bind(this));

  }

}


module.exports = ResultsFestivals;
