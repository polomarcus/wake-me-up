
angular.module( 'ChronoModule', [
  'ui.router'
])

.controller( 'ChronoCtrl', function ChronoCtrl($scope, i18nService) {
    $scope.manageTimer = function (){
      if($scope.timerRunning === false && $scope.timerBegin === true){
        $scope.timerStartOrStop = 'CHRONO.BUTTON.STOP';
        $scope.times = [];
        $scope.timerBegin = false;
        document.getElementById('chrono').getElementsByTagName('timer')[0].start();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
      }
      else if($scope.timerRunning === false) {
        $scope.timerStartOrStop = 'CHRONO.BUTTON.STOP';
        //$scope.$broadcast('timer-resume');
        document.getElementById('chrono').getElementsByTagName('timer')[0].resume();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
      }
      else {
        $scope.timerStartOrStop = 'CHRONO.BUTTON.RESUME';
        $scope.timerPaused = true;
        //stop time
        document.getElementById('chrono').getElementsByTagName('timer')[0].stop();
        $scope.timerRunning = false;
      }
    };

    $scope.clearTimer = function clearTimer(){
        $scope.timerStartOrStop = 'CHRONO.BUTTON.START';
        $scope.times = [];
        $scope.timerBegin = true;
        document.getElementById('chrono').getElementsByTagName('timer')[0].start();
        document.getElementById('chrono').getElementsByTagName('timer')[0].stop();
        $scope.timerRunning = false;
        $scope.timerPaused = false;
    };

    //Register a lap
    $scope.lapTimer = function lapTimer(){
        var time = $('timer > h3').html(); //@TODO angular way, passing variable form diretive to controller
        $scope.times.push(time);
    };

    $scope.resumeTimer = function (){
        $scope.timerStartOrStop = "Pause";
        //$scope.$broadcast('timer-resume');
        document.getElementById('chrono').getElementsByTagName('timer')[0].resume();
        $scope.timerRunning = true;
        $scope.timerPaused = false;
    };

    function init(){
        //chronometer
        $scope.times = [];
        $scope.timerRunning = false;
        $scope.timerPaused = false;
        $scope.timerBegin = true;
        $scope.timerStartOrStop = 'CHRONO.BUTTON.START';
    }

    init();
})


;
