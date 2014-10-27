var app = angular.module("liveModule", ["firebase"]);

app.controller("liveCtrl", function($scope, $firebase, $interval) {
  var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data");
  var sync = $firebase(ref);

  // create a synchronized array for use in our HTML code
  $interval(function(){ //for momentJS
    $scope.liveData = sync.$asArray();
  }, 1000);

});
