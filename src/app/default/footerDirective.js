var alarm = angular.module( 'reveilEnLigne.controllers');

alarm.directive('footerContent', function() {
  return {
    restrict: 'E',
    templateUrl: 'default/footer.tpl.html'
  };
});
