var app = angular.module('reveilEnLigne.controllers');

app.directive('ads', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/ads.tpl.html',
    link : function(scope, element, attrs) {
      var ad = angular.element('<script src="http://www2.adserverpub.com/group.php?id=22019-27062&data=1&width=300&height=250"></script>');
      element.append(ad);
    }
  };
});
