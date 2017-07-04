var FestivalsList = require("./festivalsList");
//source for the color settings in the map
var styledMapType = new google.maps.StyledMapType(
  [
  {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
  {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
  {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
  {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
  {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
  {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
  {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
  {"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}
  ], {name: 'Styled Map'}
  );

var MapWrapper = function(container, coords, zoom){
  this.list = new FestivalsList( null );
  this.allFestivalsUrl = 'http://localhost:3000/api/festivals';
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    //below option needed for colouring maps
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
      'styled_map']
    }
  });
  //below option needed for colouring maps
  this.googleMap.mapTypes.set('styled_map', styledMapType);
  this.googleMap.setMapTypeId('styled_map');
}

MapWrapper.prototype = {
  addMarker: function(ele){
    var marker = new google.maps.Marker({
      position: ele.position,
      map: this.googleMap
    });
    return marker;
  },

  addMarkers: function(url){
    this.list.url = url;
    this.list.getData( function() {
      this.list.festivals.forEach(function(ele){
        // this.addMarker(ele);
        this.addInfoWindow(ele);
      }.bind(this));
    }.bind(this));
  },

  addAllMarkers: function(){
    this.addMarkers(this.allFestivalsUrl);
  },

  addInfoWindow: function(festival) {
    var marker = this.addMarker(festival);
    marker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: festival.title + ", " + festival.country,

      });
      infoWindow.open(this.map, marker); 
      setTimeout(function(){ infoWindow.close()}, 5000);
    });
  }
}


module.exports = MapWrapper;
