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
        var url = "https://www.youtube.com/embed/" + id + "?autoplay=1";

        var video = "<iframe id=\"ytplayer\" type=\"text/html\" width=\"640\" height=\"390\"" +
                       "src=\"" + url + "\"" +
                       "frameborder=\"0\"/>";

        return video;
    };

    /**
     * return a dailymotion video HTML object
     * @param id
     * @returns {HTML node}
     */
    UrlUtilsService.prototype.dailymotionBuilder = function dailymotionBuilder(id){
        var url = "https://www.dailymotion.com/embed/video/" + id;

        var video =  "<iframe frameborder=\"0\" autoplay='true' src=\"" + url + "?autoPlay=1&enablejsapi=1\">" +
        "</iframe><br />" +
        "<a href=\"https://www.dailymotion.com/video/" + id +"\" target=\"_blank\">" +
        "Bon réveil !" +
        "	</a>" +
        "	<i>par " +
        "<a href=\"https://www.dailymotion.com/\" target=\"_blank\">" +
        "Reveil-en-ligne.fr" +
        "</a>"  +
        "</i>";

        return video;
    };

    /**
     * return a mixcloud promise containing the embed HTML
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
            var whereToAdd = data.embed.indexOf('/iframe/?') + 9;
            var output = data.embed.substr(0, whereToAdd);
            output += 'autoplay=1&'; //autoplay value
            output += data.embed.substr(whereToAdd, data.embed.length);

            defer.resolve(output);
          }).
          error(function(data, status, headers, config) {
            defer.reject("mixcloudBuilder error", data);
          });

        return defer.promise;
    };

    /**
     * return a deezer video HTML object
     * examples :
     * album : https://www.deezer.com/album/9326526
     * playlist : https://www.deezer.com/playlist/1108276611
     * track : https://www.deezer.com/track/91883774
     * radio : https://www.deezer.com/radio/genre/31021
     * @param {string} URL
     * @returns {string} HTML node
     */
    UrlUtilsService.prototype.deezerBuilder = function deezerBuilder(url){
      var embed = '',
        deezerType,
        recognizedType = true,
        deezerId;

      if(url.match('playlist')){
        deezerType = 'playlist';
        deezerId = url.split('playlist/')[1];
      }
      else if(url.match('track')){
        deezerType = 'tracks';
        deezerId = url.split('track/')[1];
      }
      else if(url.match('album')) {
        deezerType = 'album';
        deezerId = url.split('album/')[1];
      }
      else  if(url.match('radio')) {
        deezerType = 'radio';
        deezerId = 'radio-' + url.split('genre/')[1];
      }
      else {
        recognizedType = false;
      }

      if(recognizedType) {
        embed = '<iframe scrolling="no" frameborder="0" allowTransparency="true"' +
        'src="https://www.deezer.com/plugins/player?autoplay=true&playlist=true&width=500&height=240&cover=true&' +
        'type=' + deezerType +
        '&id=' + deezerId +
        '&title=&app_id=undefined"' +
        'width="500" height="240"></iframe>';
      }

      return embed;
    };


    /**
     * Return a twich iframe
     * we have to add /embed for twitch integration
     * @param url string
     * @returns {HTML node} iframe
     */
    UrlUtilsService.prototype.twitchBuilder = function twitchBuilder(url){
       var embed = '/embed';
       if( url.match('/embed') ) { //Security if a smart user has already added embed at end of a twitch URL
        embed = '';
       }

       return this.iframeBuilder(url + embed);
    };


    /**
     * return a iframe HTML object
     * @param url string
     * @returns {HTML node} iframe
     */
    UrlUtilsService.prototype.iframeBuilder = function iframeBuilder(url){
        return "<iframe style='width:100%;'src='" + url + "'>" + "</iframe>";
    };

    return new UrlUtilsService();
});
