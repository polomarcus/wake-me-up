var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination'
]);

app.controller("liveCtrl", function($scope, firebaseService) {

  $scope.liveData = firebaseService.get();
});
