var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./mapWrapper');
  this.mainMap = new MapWrapper(mapDiv, center, 2);

  var FestivalsList = require("./festivalsList");
  url = 'http://localhost:3000/api/festivals';
  this.list = new FestivalsList( url );

  addMarkers();

}

var addMarkers = function(){
  this.list.getData( function() {
    this.list.festivals.forEach(function(ele){
      var marker = new google.maps.Marker({
        position: ele.position,
        map: this.mainMap.googleMap
      });
    }.bind(this));
  }.bind(this));

}

window.addEventListener('load', initialize);
