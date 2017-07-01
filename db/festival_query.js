var MongoClient = require('mongodb').MongoClient;

var FestivalQuery = function() {
  this.url = "mongodb://localhost:27017/top_festivals_site";
}

FestivalQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url,function(err,db) {
      if(err) return;
      var collection = db.collection('festivals');
      collection.find().toArray(function(err,docs) {
        if (err) return;
        onQueryFinished(docs);
      });
    });
  }
}

module.exports = FestivalQuery;