var FestivalsList = function ( url ) {
  this.url = url;
  this.festivals = [];
}

FestivalsList.prototype = {

  getData: function ( callback) {
    var request = new XMLHttpRequest();
    console.log("url", this.url)
    request.open('GET', this.url);
    request.send();
    request.onreadystatechange = function () {
      console.log("callback url", this.url)

      if(request.readyState < 4){
      } else if( request.readyState === 4 && request.status === 200 ) {
        var jsonString = request.responseText;
        console.log("jsonString", jsonString)
        var festivals = JSON.parse(jsonString);
        console.log("festivals", festivals)

        this.festivals = festivals;
        callback();
      }
    }.bind( this )
  }
}

module.exports = FestivalsList;
