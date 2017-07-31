var app = angular.module('wakeMeUp.services');

app.factory('adsService', function() {
  var AdsService = function() {};

  /**
   * Simply launch an inRead
   */
  AdsService.prototype.launchInread = function launchInread(){
    //teads
    window._ttf = window._ttf || [];
    _ttf.push({
      pid          : 22738,
      lang        : "fr",
      slot        : '#countdown',
      format      : "inread",
      minSlot     : 0,
      css         : 'margin:auto; max-width: 1px !important;',
      components  : { mute: {delay :0}, skip: {delay :0} },
      mutable     : false,
      BTF         : false
    });

    (function (d) {
      var js, s = d.getElementsByTagName('script')[0];
      js = d.createElement('script');
      js.async = true;
      js.src = 'http://cdn.teads.tv/js/all-v1.js';
      //js.src = 'http://videosfr.s3.amazonaws.com/media/router.js';
      s.parentNode.insertBefore(js, s);
    })(window.document);
  };

  AdsService.prototype.launchInread();
  AdsService.prototype.launchInread();
  AdsService.prototype.launchInread();

  return new AdsService();
});
