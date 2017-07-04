var ResultsFestivals = function() {
  var FestivalsList = require("./festivalsList");
<<<<<<< HEAD
  var url = 'http://localhost:3000/api/festivals'
  this.list = new FestivalsList(url);
=======
  this.list = new FestivalsList( null );
>>>>>>> 8112b7ee3dd61e75015306b14ece3404ba2a6cc4
}

ResultsFestivals.prototype = {

    renderSliderFestivals: function( urlRequest ){
        this.list.url = urlRequest;
        this.list.getData( this.createDetails.bind( this ));
    },

<<<<<<< HEAD
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
=======
    createDetails: function(){
        var festivalList = document.getElementById('festival-div');

        this.list.festivals.forEach(function( ele ){
            var festival = document.createElement('div');

            var image = document.createElement('img');
            var h3 = document.createElement('h3');
            var country = document.createElement('p');
            var date = document.createElement('p');

            var overlay = document.createElement('div');
            var overlayBody = document.createElement('div');

            var h2 = document.createElement('h3');
            var description = document.createElement('p');
            var countryOverlay = document.createElement('p');
            var dateOverlay = document.createElement('p');
>>>>>>> 8112b7ee3dd61e75015306b14ece3404ba2a6cc4


            image.classList.add('festival-image');
            image.src = ele.image;

            h3.classList.add('festival-title');
            h3.innerText = ele.title;

<<<<<<< HEAD
        overlay.classList.add('overlay');
        overlayBody.classList.add('overlay-body');

        //overlayBody container's body
        h2.innerText = ele.title;
        description.innerText = ele.description;
        countryOverlay.innerText = ele.country;
        dateOverlay.innerText = ele.start + "-" + ele.end;
        favButton.innerText = "Add to favourites";

        favButton.classList.add('fav-button');
=======
            country.classList.add('festival-country');
            country.innerText = ele.country;  

            date.classList.add('festival-date');
            date.innerText = ele.start;
>>>>>>> 8112b7ee3dd61e75015306b14ece3404ba2a6cc4

            overlay.classList.add('overlay');
            overlayBody.classList.add('overlayBody');

<<<<<<< HEAD
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
=======
            h2.innerText = ele.title;
            description.innerText = ele.description;
            countryOverlay.innerText = ele.country;
            dateOverlay.innerText = ele.start + "-" + ele.end;

            overlayBody.appendChild(h2);
            overlayBody.appendChild(description);
            overlayBody.appendChild(countryOverlay);
            overlayBody.appendChild(dateOverlay);


            festival.classList.add('festival');
>>>>>>> 8112b7ee3dd61e75015306b14ece3404ba2a6cc4

            festival.appendChild(image);
            festival.appendChild(h3);
            festival.appendChild(country);
            festival.appendChild(date);

            overlay.appendChild(overlayBody);


            festivalList.appendChild(festival);
            festival.appendChild(overlay);

        }.bind( this ))
    }
}


module.exports = ResultsFestivals;
