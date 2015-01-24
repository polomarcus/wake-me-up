var app = angular.module('reveilEnLigne.services');

app.factory('urlUtilsService', function() {

    var urlUtilsService = function() {};

    urlUtilsService.playURL = false;

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

    /**
     * return a youtube video HTML object
     * @param id
     * @returns {HTML node}
     */
    urlUtilsService.youtubeBuilder = function youtubeBuilder(id){
        var url = "http://www.youtube.com/v/" + id;

        var video =  "<object width=\"420\" height=\"315\"> "+
        "<param name=\"movie\" value=\"" +
        video +
        "&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\">" +
        "</param><param name=\"allowFullScreen\" value=\"true\"></param> " +
        "<param name=\"allowscriptaccess\" value=\"always\"></param>"  +
        "<embed  width=\"420\" height=\"315\" src=\"" +
        url +
        "&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>"  +
        "</object>";

        return video;
    };

    /**
     * return a dailymotion video HTML object
     * @param id
     * @returns {HTML node}
     */
    urlUtilsService.dailymotionBuilder = function dailymotionBuilder(id){
        var url = "http://www.dailymotion.com/embed/video/" + id;

        var video =  "<iframe frameborder=\"0\" autoplay='true' src=\"" + url + "?autoPlay=1\">" +
        "</iframe><br />" +
        "<a href=\"http://www.dailymotion.com/video/" + id +"\" target=\"_blank\">" +
        "Bon réveil !" +
        "	</a>" +
        "	<i>par " +
        "<a href=\"http://www.dailymotion.com/\" target=\"_blank\">" +
        "Reveil-en-ligne.fr" +
        "</a>"  +
        "</i>";

        return video;
    };

    /**
     * return a iframe HTML object
     * @param id
     * @returns {HTML node}
     */
    urlUtilsService.iframeBuilder = function iframeBuilder(url){
        return "<iframe style='width:100%;'src='" + url + "'>" + "</iframe>";
    };

    return urlUtilsService;
});
