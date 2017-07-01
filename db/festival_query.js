var MongoClient = require('mongodb').MongoClient;

var FestivalQuery = function() {
  this.url = "mongodb://localhost:27017/festival_finder";
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
  },

  add: function(festivalToAdd,onQueryFinished){
    MongoClient.connect(this.url,function(err,db) {
      if (db) {
        var collection = db.collection('festivals');
        collection.insert(festivalToAdd);
        collection.find().toArray(function(err,docs) {
          if (docs) {
            onQueryFinished(docs);
          }
        })
      }
    })
  },

}

module.exports = FestivalQuery;
