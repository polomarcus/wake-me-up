var chrono = angular.module('liveModule');

chrono.directive('liveData', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/live.tpl.html'
  };
});
