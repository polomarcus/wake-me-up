var app = angular.module("liveModule", [
  "firebase",
  'angularUtils.directives.dirPagination'
]);

app.controller("liveCtrl", function($scope, $firebase, $interval) {
  var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data");
  var sync = $firebase(ref.limitToLast(100));
  $scope.liveData = [];

  // create a synchronized array for use in our HTML code
  $scope.liveData = sync.$asArray();
});
