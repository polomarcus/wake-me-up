var app = angular.module("liveModule", ["firebase"]);

app.controller("liveCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data");
  var sync = $firebase(ref);

  // create a synchronized array for use in our HTML code
  $scope.liveData = sync.$asArray();
  console.log($scope.liveData);
});
