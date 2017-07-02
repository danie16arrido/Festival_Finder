var initialize = function(){

  var mapDiv = document.getElementById('main-map');
  var center = { lat: 0, lng: 0 };

  var MapWrapper = require('./MapWrapper');
  var mainMap = new MapWrapper(mapDiv, center, 2);

  //
  var FestivalsQuery =  require("./FestivalsList");
  url = 'http://localhost:3000/api/festivals';
  var list = new FestivalsQuery( url );
  list.getData( function() {
    for( ele of list.festivals){
      console.log(ele.position)
    }
  });

}

window.addEventListener('load', initialize);
