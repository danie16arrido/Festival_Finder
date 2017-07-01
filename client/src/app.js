
var phq = require('predicthq')

client = new phq.Client({access_token: "4ih8DjKchU0joNwr0onOB4yysU4crC"})

client.events.search({q: 'katy+perry'})
    .then(function(results){
        var events = results.toArray()
        for(var i=0; i < events.length; i++)
            console.info(events[i].rank, events[i].category, events[i].title, events[i].start, events[i].location )
    })

console.log("hi");
