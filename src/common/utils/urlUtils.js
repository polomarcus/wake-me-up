var app = angular.module('wakeMeUp.services');

app.factory('urlUtilsService', function($http, $q) {

    var UrlUtilsService = function() {};

    UrlUtilsService.prototype.playURL = false;

    UrlUtilsService.prototype.launchSoundCloud = function launchSoundCloud(urlvideo){
      SC.oEmbed(urlvideo, {auto_play: true}, function(oembed){
        str =  oembed.html;
        $('#url2play').html(str);
      });
    };

  /**
   * extract the id of a youtube video
   * @param {string} url
   * @param {boolean} longURL or short youtube
   * @returns {HTML node}
   */
    UrlUtilsService.prototype.youtubeIDextract = function youtubeIDextract(url, longUrl){
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
    UrlUtilsService.prototype.dailyIDextract = function dailyIDextract(url){
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
    UrlUtilsService.prototype.youtubeBuilder = function youtubeBuilder(id){
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
    UrlUtilsService.prototype.dailymotionBuilder = function dailymotionBuilder(id){
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
     * return a mixcloud video HTML object
     * via a GET to https://www.mixcloud.com/oembed/?url= + URL + &format=json
     * example https://www.mixcloud.com/oembed/?url=https%3A//www.mixcloud.com/spartacus/party-time/&format=json
     * &callback=JSON_CALLBACK mandatory for AngularJS jsonp
     * Not using get because of CORS, so jsonp is used
     * @param {string} URL
     * @returns {promise} HTML node
     */
    UrlUtilsService.prototype.mixcloudBuilder = function mixcloudBuilder(url){
        var defer = $q.defer();
        var getUrl = 'https://www.mixcloud.com/oembed/?url=' + url + '&format=json&callback=JSON_CALLBACK';

        $http.jsonp(getUrl).
          success(function(data, status, headers, config) {
            //Add autoplay value to embed
            var output = data.embed.substr(0, data.embed.indexOf('?autoplay=') + 10);
            output += '1'; //autoplay value
            output += data.embed.substr(data.embed.indexOf('?autoplay=') + 10, data.embed.length);

            defer.resolve(output);
          }).
          error(function(data, status, headers, config) {
            defer.reject("mixcloudBuilder error", data);
          });

        return defer.promise;
    };



    /**
     * return a iframe HTML object
     * @param id
     * @returns {HTML node}
     */
    UrlUtilsService.prototype.iframeBuilder = function iframeBuilder(url){
        return "<iframe style='width:100%;'src='" + url + "'>" + "</iframe>";
    };

    return new UrlUtilsService();
});
