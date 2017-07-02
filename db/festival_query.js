var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var FestivalQuery = function() {
  this.url = "mongodb://localhost:27017/festival_finder";
  this.collection = "festivals";
}

FestivalQuery.prototype = {

  all: function( onQueryFinished ) {
    MongoClient.connect( this.url,function( err,db ) {
      if( err ) return;
      var collection = db.collection( this.collection );
      collection.find().toArray(function( err,docs ) {
        if ( err ) return;
        onQueryFinished( docs );
      });
    }.bind( this ));
  },

  add: function( festivalToAdd, onQueryFinished ){
    MongoClient.connect(this.url,function( err, db ) {
      if ( db ) {
        var collection = db.collection( this.collection );
        collection.insert( festivalToAdd );
        collection.find().toArray(function( err,docs ) {
          if ( docs ) {
            onQueryFinished( docs );
          }
        })
      }
    }.bind( this ))
  },

  findByID: function( festivalIdToFind, onQueryFinished ){
    MongoClient.connect( this.url,function( err,db ) {
      if ( db ) {
        var collection = db.collection( this.collection );
        collection.findOne({ _id: ObjectId( festivalIdToFind )}, function( err, docs) {
          if ( docs ) {
            onQueryFinished( docs );
          }
        })
      }
    }.bind( this ))
  },

  findByCountry: function(festivalCountryToFind, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection(this.collection);
        collection.findOne({"country": festivalCountryToFind}, function(err,docs) {
          if (docs) {
            onQueryFinished(docs);
          }
        })
      }
    }.bind(this))
  },

  update: function ( festivalID, payload, onQueryFinished ) {
    MongoClient.connect( this.url, function ( err, db ) {
       if ( db ) {
         var collection = db.collection( this.collection )
         collection.updateOne( { "_id": ObjectId( festivalID ) }, { $set: payload }, function ( err, docs ) {
           if( docs ){
             onQueryFinished( docs );
           }
         });
       }
       db.close()
     }.bind( this ))
   },

   delete: function ( festivalID, onQueryFinished ) {
     MongoClient.connect( this.url, function ( err, db ) {
       if( db ){
         var collection = db.collection( this.collection );

         collection.deleteOne( { "_id": ObjectId( festivalID )}, function( err, docs ) {
           if( docs ){
             onQueryFinished( docs );
           }
         })
       }
     }.bind( this ))
   }

}

module.exports = FestivalQuery;
