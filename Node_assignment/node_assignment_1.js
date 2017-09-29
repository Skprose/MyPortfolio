/* Assignment:LIRI Bot - Week:10 */
/* Main Program - to validate the input parameters and call the respective application */
var inputlen = process.argv.length ;
if (inputlen <3)
{
  console.log("Only 2");
}
else {
  if ( process.argv[2] === 'tweet')
  {
    getalltweets();

  }
}
console.log("tweet");
getalltweets();
//gettweets();
//console.log("movie");
//getmoviereview();
console.log("music");
//getmusic();

function getmusic()
{


        var spotify = require('node-spotify-api');


        myspotify.search({type: 'track',query:'I Want it that way',limit:2},function(err,data){
           if(err)
           {
             console.log(err,'Error encountered');
           }
          // console.log(JSON.stringify(data,null,2));
          console.log("Details of Spotify");
          console.log(JSON.parse(data).external_urls);
          console.log(JSON.parse(data).name);
          console.log(JSON.parse(data).type);
        });
}

/*
    })
    .catch(dunction(err){

    })
*/



function getalltweets()
{
      var Twitter = require('twitter');

        var params = {screen_name: 'nodejs'};
      mytwitter.get('statuses/user_timeline',  function(error, tweets, response) {
        if (!error && response.statusCode === 200) {
             console.log("The tweets");
            // console.log(tweets);
            // console.log(JSON.parse(tweets));
             //console.log(JSON.parse(tweets).text);
             for (var i  =0 ; i < tweets.length ; i++)
             {
               console.log(tweets[i].created_at);
               console.log(tweets[i].text);
             }
           }
        if (error) throw error ;
      });
}

function getmoviereview()
{
        var omdb = require("request");
        var moviename = process.argv[2];
        var queryurl = "http://www.omdbapi.com/?t="+moviename+"&y=&plot=short&apikey=40e9cece";
        console.log(queryurl);
        omdb(queryurl, function(error, response, body) {
          if (!error && response.statusCode === 200)
          {
             //console.log(body);
              console.log(JSON.parse(body).imdbRating);
              console.log(JSON.parse(body).Title);
              console.log(JSON.parse(body).Director);
              console.log(JSON.parse(body).Writer);
          }
       });
};
function gettweets()
{
         var Twitter = require('twitter');


          var params = {screen_name: 'nodejs'};
          mytwitter.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              console.log("Details of Twitter");
              console.log(tweets);
              // console.log(JSON.stringify(tweets,null,2));
              //  console.log(JSON.parse(tweets).text);
              //  console.log(JSON.parse(tweets).created_at);
            }
          });

}
