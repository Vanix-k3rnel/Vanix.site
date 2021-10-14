var intervalID1 = window.setInterval(getcurrentsong, 1000);
function getcurrentsong() {
$.ajax({
  type: "GET",
  url: "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Vanix599&api_key=03f540ce57d8a68d5ba8b1902b9556dc&format=json&limit=1",
   success: function(data) {
    if (typeof data.recenttracks.track[0]["@attr"] != "undefined")
    {

      console.log("[Spotify.js]: Grabbed data \ud83d\udca4");

      var artwork = data.recenttracks.track[0].image[1]["#text"];
      var trackName = data.recenttracks.track[0].name;
      var artistName = data.recenttracks.track[0].artist["#text"];
    
      var artworkID = document.getElementById('trackArtwork');
      var track = document.getElementById('trackName');
      var artist = document.getElementById('artist');
      var listen = document.getElementById('spotify');
     artworkID.innerHTML = '<img src=' + artwork + '>';
     track.textContent = trackName;
     artist.textContent = ' By ' + artistName; 
     listen.innerHTML = 'Listening to Spotify';
     }
     else
     {
    artworkID = document.getElementById('trackArtwork');
    track = document.getElementById('trackName');
    artist = document.getElementById('artist');
    listen = document.getElementById('spotify');
     
    artworkID.innerHTML = '<img src=' +'https://img.icons8.com/ios-glyphs/240/000000/apple-music.png' + '>' ;
    track.textContent = ' Not listening to anything';
    artist.textContent = ''; 
    listen.textContent = ''; 
     }
  
  },
  error: function(resp)
  {
    var artworkID = document.getElementById('trackArtwork');
    var track = document.getElementById('trackName');
    var artist = document.getElementById('artist');
    var listen = document.getElementById('spotify');
    
    artworkID.innerHTML = '<img src=' +'https://img.icons8.com/ios-glyphs/240/000000/apple-music.png' + '>' ;
    track.textContent = ' Not listening to anything';
   artist.textContent = ''; 
   listen.textContent = ''; 
  },
  dataType: "json"
});
}


