var app = angular.module('reveilEnLigne.controllers');

app.directive('comments', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/comments.tpl.html'
  };
});
