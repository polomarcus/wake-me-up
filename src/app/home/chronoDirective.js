var chrono = angular.module('ChronoModule');

chrono.directive('chrono', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/chrono.tpl.html'
  };
});
