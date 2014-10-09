/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'timer',
  'angularMoment',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {

    //init
    $scope.clock = {
      time: new Date()
    };

//TODO
    setInterval(function(){
      $scope.clock.time = new Date();
    }, 1000);

    $scope.alarm={};
    $scope.alarm.time = {
      'min': 0,
      'hour': 0
    };
    $scope.alarm.value = 0;
    $scope.alarm.status='';
    $scope.alarm.button='ON';
    $scope.alarm.url='http://youtu.be/KGyZY4HNumw';

    //logic functions
    $scope.alarm.called = function() {
      console.log("$scope.alarm.time.min * 60 +   $scope.alarm.time.hour * 60 * 60;", $scope.alarm.time.min * 60 +   $scope.alarm.time.hour * 60 * 60);
      $scope.alarm.value = $scope.alarm.time.min * 60 +   $scope.alarm.time.hour * 60 * 60;
      $scope.alarm.button='OFF';


      document.getElementsByTagName('timer')[0].addCDSeconds($scope.alarm.value);
      document.getElementsByTagName('timer')[0].start();
      $scope.alarm.status='L\'alarme est activée';
    };

    $scope.alarm.reset = function() {
      $scope.alarm.button='ON';
      document.getElementsByTagName('timer')[0].reset();
      $scope.alarm.status='';
    };

    $scope.alarm.finished=function(){
        $scope.alarm.status='L\'alarme sonne !';

        //Launch link
        alert("Le lien est :" + $scope.alarm.url);
    };

    //chronometer
            $scope.timerRunning = false;

            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');
                $scope.timerRunning = true;
            };

            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');
                $scope.timerRunning = false;
            };

            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
            });
})

;
