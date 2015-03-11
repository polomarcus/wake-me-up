var app = angular.module('wakeMeUp.controllers');

app.directive('comments', function() {
  return {
    restrict: 'E',
    templateUrl: 'home/comments.tpl.html'
  };
});
