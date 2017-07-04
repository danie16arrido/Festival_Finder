var FestivalsList = function ( url ) {
  this.url = url ;
  this.festivals = [];
}

FestivalsList.prototype = {

  getData: function ( callback) {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.send();
    request.onreadystatechange = function () {

      if(request.readyState < 4){
      } else if( request.readyState === 4 && request.status === 200 ) {
        var jsonString = request.responseText;
        var festivals = JSON.parse(jsonString);

        this.festivals = festivals;
        callback();
      }
    }.bind( this )
  }
}

module.exports = FestivalsList;
