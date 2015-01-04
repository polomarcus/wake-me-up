var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination'
]);

app.controller("liveCtrl", function($scope, $firebase, $interval) {
  var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data").startAt().limit(100);
  var sync = $firebase(ref);
  $scope.liveData = [];

  $scope.liveData = sync.$asArray();
});
