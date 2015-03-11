var alarm = angular.module( 'wakeMeUp.controllers');

alarm.directive('menuTop', function() {
  return {
    restrict: 'E',
    templateUrl: 'default/menuTop.tpl.html'
  };
});
