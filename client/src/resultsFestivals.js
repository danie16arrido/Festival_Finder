var ResultsFestivals = require('./resultsFestivals.js');

var ResultsFestivals = function( fav ) {
  var FestivalsList = require("./festivalsList");
  this.list = new FestivalsList( null );
  this.isFav =  fav || false;
}

ResultsFestivals.prototype = {

    renderSliderFestivals: function( urlRequest ){
        this.list.url = urlRequest;
        this.list.getData( this.createDetails.bind( this ));
    },

    createDetails: function(){
        var festivalList = document.getElementById('festival-div');
        festivalList.innerHTML = "";

        this.list.festivals.forEach(function( ele ){
            var festival = document.createElement('div');

            var image = document.createElement('img');
            var h3 = document.createElement('h3');
            var country = document.createElement('p');
            var date = document.createElement('p');

            var overlay = document.createElement('div');
            var overlayBody = document.createElement('div');

            var titleOverlay = document.createElement('h3');
            var description = document.createElement('p');
            var countryOverlay = document.createElement('p');
            var dateOverlay = document.createElement('p');
            var favButton = document.createElement('button');


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



            titleOverlay.classList.add('overlay-title');
            titleOverlay.innerText = ele.title;

            description.classList.add('overlay-description');
            description.innerText = ele.description;

            countryOverlay.classList.add('overlay-country');
            countryOverlay.innerText = ele.country;

            dateOverlay.classList.add('overlay-date');
            dateOverlay.innerText = ele.start + "/" + ele.end;

            if( this.isFav ){
              favButton.classList.add('fav-button');
              favButton.innerText = "Delete";
              favButton.value = ele._id;
              favButton.addEventListener( 'click', this.handleButtonRemoveFromFavourites.bind( this ) );
            } else {
              favButton.classList.add('fav-button');
              favButton.innerText = "Add to favourites";
              favButton.value = ele._id;
              favButton.addEventListener( 'click', this.handleButtonAddToFavourites );
            }

            overlayBody.appendChild(favButton);
            overlayBody.appendChild(titleOverlay);
            overlayBody.appendChild(description);
            overlayBody.appendChild(countryOverlay);
            overlayBody.appendChild(dateOverlay);

            festival.classList.add('festival');

            festival.appendChild(image);
            festival.appendChild(h3);
            festival.appendChild(country);
            festival.appendChild(date);

            overlay.appendChild(overlayBody);


            festivalList.appendChild(festival);
            festival.appendChild(overlay);

        }.bind( this ))
    },

    handleButtonAddToFavourites: function ( event ) {
      console.log( event.target.value);
      var request = new XMLHttpRequest();
      request.open('POST', "http://localhost:3000/api/users/festivals/595bb6d08d674fbaeb556a42");
      request.setRequestHeader("Content-Type", "application/json");

      request.onreadystatechange = function () {
        //something to do when the information has saved
      }.bind( this )
      request.send(JSON.stringify( { "id": event.target.value }));
    },

    handleButtonRemoveFromFavourites: function ( event ) {
      var festivalId = event.target.value;
      var request = new XMLHttpRequest();
      var apicall = "http://localhost:3000/api/users/festivals/595bb6d08d674fbaeb556a42/";
      apicall += festivalId;
      console.log(apicall);
      request.open('DELETE', apicall);
      request.setRequestHeader("Content-Type", "application/json");

      request.onreadystatechange = function () {
        this.renderSliderFestivals( "http://localhost:3000/api/users/festivals/595bb6d08d674fbaeb556a42");
        //something to do when the information has saved
      }.bind( this )
      request.send();
    }

}

module.exports = ResultsFestivals;
