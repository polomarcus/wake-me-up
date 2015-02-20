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
angular.module( 'ChronoModule', [
  'ui.router',
  'timer',
  'angularMoment'
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'ChronoCtrl', function ChronoCtrl( $scope, i18nService) {
    //chronometer
    $scope.times = [];
    $scope.timerRunning = false;
    $scope.timerPaused = false;
    $scope.timerBegin = true;
    $scope.timerStartOrStop = "Start";

    //language angular-timer
    $scope.language = i18nService.get();

    $scope.manageTimer = function (){
      if($scope.timerRunning === false && $scope.timerBegin === true){
        $scope.timerStartOrStop = "Pause";
        $scope.times = [];
        $scope.timerBegin = false;
        document.getElementById('chrono').getElementsByTagName('timer')[0].start();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
      }
      else if($scope.timerRunning === false) {
        $scope.timerStartOrStop = "Pause";
        //$scope.$broadcast('timer-resume');
        document.getElementById('chrono').getElementsByTagName('timer')[0].resume();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
      }
      else {
        $scope.timerStartOrStop = "Continue";
        $scope.timerPaused = true;
        //stop time
        document.getElementById('chrono').getElementsByTagName('timer')[0].stop();
        $scope.timerRunning = false;
      }
    };

    $scope.clearTimer = function (){
        $scope.timerStartOrStop = "Start";
        $scope.times = [];
        $scope.timerBegin = true;
        document.getElementById('chrono').getElementsByTagName('timer')[0].start();
        document.getElementById('chrono').getElementsByTagName('timer')[0].stop();
        $scope.timerRunning = false;
        $scope.timerPaused = false;
    };

    //Register a lap
    $scope.lapTimer = function lapTimer(time){
        $scope.times.push(time);
    };

    $scope.resumeTimer = function (){
        $scope.timerStartOrStop = "Pause";
        //$scope.$broadcast('timer-resume');
        document.getElementById('chrono').getElementsByTagName('timer')[0].resume();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
    };

    $scope.$on('timer-stopped', function (event, data){
        //console.log('Timer Stopped - data = ', data);
        //console.log('Timer Stopped - event = ', event);
    });
})

;
