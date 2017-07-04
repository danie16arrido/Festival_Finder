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
        collection.findOne({ "_id": ObjectId( festivalIdToFind )}, function( err, docs) {
          if ( docs ) {
            onQueryFinished( docs );
          }
        })
      }
    }.bind( this ))
  },

  findManyById: function ( arrayOfIds, onQueryFinished) {
    MongoClient.connect( this.url,function( err,db ) {
      if ( db ) {
    
      }
    }.bind( this ))
  },

    // db.festivals.find( { "_id": { $in: [ObjectId("595bb6d08d674fbaeb556a21"), ObjectId("595bb6d08d674fbaeb556a23")] } } );


  findByCountry: function(festivalCountryToFind, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection(this.collection);
        collection.find({ country: festivalCountryToFind } ).toArray(function( err,docs ) {
        // collection.findOne({"country": festivalCountryToFind}, function(err,docs) {
          if (docs) {
            onQueryFinished(docs);
          }
        })
      }
    }.bind(this))
  },

  findByType: function(festivalTypeToFind, onQueryFinished) {
      MongoClient.connect(this.url, function(err, db) {
        if (db) {
          var collection = db.collection(this.collection);
          collection.find({ type: festivalTypeToFind } ).toArray(function( err,docs ) {
          // collection.find({ type: festivalTypeToFind }, function(err,docs) {
            if (docs) {
              onQueryFinished(docs);
            }
          })
        }
      }.bind(this))
    },

    findByRating: function(festivalRatingToFind, onQueryFinished) {
      MongoClient.connect(this.url, function(err,db) {
        if (db) {
          var collection = db.collection(this.collection);
          collection.find({ rating: festivalRatingToFind } ).toArray(function( err,docs ) {
          // collection.find({ rating: festivalRatingToFind }, function(err, docs) {
            if (docs) {
              onQueryFinished(docs);
            }
          })
        }
      }.bind(this))
    },

  findTopN: function(top, onQueryFinished) {
    MongoClient.connect(this.url, function(err,db) {
      if (db) {
        var collection = db.collection(this.collection);
        // db.festivals.find().sort({rating:1}).limit(6)
        collection.find().sort({rating:1}).limit(top).toArray(function(err, docs) {
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
