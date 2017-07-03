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
        var festival = document.createElement('div');
        
        var image = document.createElement('img');
        var h3 = document.createElement('h3');
        var country = document.createElement('p');
        var date = document.createElement('p');

        image.classList.add('festival-image');
        image.src = ele.image;

        h3.classList.add('festival-title');
        h3.innerText = ele.title;

        country.classList.add('festival-country');
        country.innerText = ele.country;  

        date.classList.add('festival-date');
        date.innerText = ele.start;


        festival.classList.add('festival');
        
        festival.appendChild(image);
        festival.appendChild(h3);
        festival.appendChild(country);
        festival.appendChild(date);

        
        festivalList.appendChild(festival);
      }.bind(this));
    }.bind(this));

    

  }

}


module.exports = ResultsFestivals;
