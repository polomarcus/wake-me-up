var app = angular.module('wakeMeUp.controllers');

app.directive('ads', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'home/ads.tpl.html',
    link : function(scope, element, attrs) {
    //  var ad = angular.element('<script src="http://www2.adserverpub.com/group.php?id=22019-27062&data=1&width=300&height=250"></script>');
    //  element.append(ad);
          $(window).load(function() {
            //teads
            window._ttf = window._ttf || [];
            _ttf.push({
                pid          : 22738,
                lang        : "fr",
                slot        : '#chrono',
                format      : "inread",
                minSlot     : 0,
                components  : { mute: {delay :0}, skip: {delay :0} },
                mutable     : false,
                BTF         : false
            });

            (function (d) {
                 var js, s = d.getElementsByTagName('script')[0];
                 js = d.createElement('script');
                 js.async = true;
                 js.src = 'http://cdn.teads.tv/js/all-v2.js';
                 s.parentNode.insertBefore(js, s);
            })(window.document);
          });
    }
  };
});