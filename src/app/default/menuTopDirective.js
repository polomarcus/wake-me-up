var alarm = angular.module( 'reveilEnLigne.controllers');

alarm.directive('menuTop', function() {
  return {
    restrict: 'E',
    templateUrl: 'default/menuTop.tpl.html'
  };
});
