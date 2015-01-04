var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination'
]);

app.controller("liveCtrl", function($scope, $firebase, $interval) {
  var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data").endAt().limit(100);
  var sync = $firebase(ref);
  $scope.liveData = [];

  // create a synchronized array for use in our HTML code
  $scope.liveData = sync.$asArray();
});
