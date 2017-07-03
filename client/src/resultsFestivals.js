var ResultsFestivals = function() {
  var FestivalsList = require("./festivalsList");
  var url = 'http://localhost:3000/api/festivals'
  this.list = new FestivalsList(url);

}

ResultsFestivals.prototype = {

  render: function(){

    var festivalList = document.getElementById('festivals');
    this.list.getData(function() {
      this.list.festivals.forEach(function(ele){
        var image = document.createElement('img');
        image.classList.add('festival-image')
        console.log(ele.image);
        image.src = ele.image;
        festivalList.appendChild(image);
      }.bind(this));
    }.bind(this));
  

  }

}


 module.exports = ResultsFestivals;
