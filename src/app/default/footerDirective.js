var alarm = angular.module( 'wakeMeUp.controllers');

alarm.directive('footerContent', function() {
  return {
    restrict: 'E',
    templateUrl: 'default/footer.tpl.html'
  };
});
