var alarm = angular.module('AlarmModule');

alarm.directive('alarm', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/alarm.tpl.html'
  };
});
