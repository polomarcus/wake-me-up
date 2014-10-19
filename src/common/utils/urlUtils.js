var app = angular.module('reveilEnLigne.services');

app.factory('urlUtilsService', function() {

    var urlUtilsService = function() {};

    urlUtilsService.launchSoundCloud = function launchSoundCloud(urlvideo){
      SC.oEmbed(urlvideo, {auto_play: true}, function(oembed){
        str =  oembed.html;
        $('#url2play').html(str);
      });
    };

    //extract the id of a youtube video
    urlUtilsService.youtubeIDextract = function youtubeIDextract(url, longUrl){  //Retourne l'id de la vidéo youtube
      var youtube_id;
      if( longUrl ){
        youtube_id = url.replace(/^[^v]+v.(.{11}).*/,"$1");
      }
      else {
        youtube_id = url.replace(/^[^v]+be.(.{11}).*/,"$1");
      }

      return youtube_id;
    };

    //get the dailymotion video id
    urlUtilsService.dailyIDextract = function dailyIDextract(url){
      var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
      if (m !== null) {
          if(m[4] !== undefined) {
              return m[4];
          }
          return m[2];
      }
      return null;
    };

    return urlUtilsService;
});
