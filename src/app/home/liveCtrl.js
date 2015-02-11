var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination',
  'ngSanitize'
]);

app.controller("liveCtrl", function($scope, firebaseService, $timeout, $sanitize) {
  $scope.peakReached = false;

  $scope.liveData = firebaseService.get();

  //After 5 seconds, if there is no data from firebase, hide div
  $timeout(function(){
    if($scope.liveData.length === 0) {
      $scope.peakReached = true;
    }
  }, 10000);

});
