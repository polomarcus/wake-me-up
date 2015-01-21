var app = angular.module('reveilEnLigne.controllers');

app.directive('ads', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/ads.tpl.html',
    link : function(scope, element, attrs) {
    //  var ad = angular.element('<script src="http://www2.adserverpub.com/group.php?id=22019-27062&data=1&width=300&height=250"></script>');
    //  element.append(ad);
          $(window).load(function() {
            window._ttf = window._ttf || [];
            _ttf.push({
                pid          : 22738,
                lang        : "fr",
                slot        : 'live-data',
                format      : "inread",
                before      : true,
                minSlot     : 0,
                BTF         : false
            });

            (function (d) {
                 var js, s = d.getElementsByTagName('script')[0];
                 js = d.createElement('script');
                 js.async = true;
                 js.src = 'http://cdn.teads.tv/js/all-v1.js';
                 s.parentNode.insertBefore(js, s);
            })(window.document);
          });
    }
  };
});
