angular.module( 'AlarmModule', [
  'ui.router',
  'timer',
  'angularMoment',
  'reveilEnLigne.services',
  'firebase'
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'AlarmCtrl', function AlarmControl( $scope, $timeout, urlUtilsService, firebaseService, cookieService, dataService, $translate, gaTrackerService) {
    //Alarm Ctrl
    //show/hide URL div
    $scope.$parent.playURL = false;

    $scope.alarm={};

    $scope.alarm.error= '';
    $scope.alarmTime = moment().subtract(1, 'day'); //previous time for the alarm time init

    var initAlarmTimeValue = moment().subtract(1, 'day' );

    getCookieData();

    $scope.countdown = 0;
    $scope.alarm.status='';
    $scope.alarm.button='ON';

    //countdown
    $scope.countdownInterval = null;
    $scope.countdownMoment = null;

    //logic functions
    //enter key launch URL form
    $('body').bind('keyup', function(event) {
       if(event.keyCode === 13){
         if($scope.alarm.status === ''){
           $scope.alarm.activate();
         }
         else {
           $scope.alarm.reset();
         }
       }
    });

    //when the user click on the ON button
    $scope.alarm.activate = function() {
      if( $scope.alarm.time.hour >= 0 && $scope.alarm.time.hour < 24 &&  $scope.alarm.time.min >= 0 &&  $scope.alarm.time.min < 60){
        //no errors detected
        $scope.alarm.error= '';

        var tmp,
            today = moment(),
            alarmDate = moment().seconds('0'),
            todayDate = today.date(),
            todayMonth = today.month(), //0 is january so we need to do + 1
            alarmTimeHour = $scope.alarm.time.hour,
            alarmTimeMinute = $scope.alarm.time.min;

        todayDate = dataService.correctFormatDate(todayDate);
        todayMonth = dataService.correctFormatDate(todayMonth + 1);
        alarmTimeHour = dataService.correctFormatDate(alarmTimeHour);
        alarmTimeMinute = dataService.correctFormatDate(alarmTimeMinute);

        //init alarm time
        var alarmTmp = moment(today.year() + "-" + todayMonth + "-" + todayDate + " " + alarmTimeHour + ":" + alarmTimeMinute  + ":00");

          //save cookie
        cookieService.set(alarmTmp._i, $scope.alarm.url);

        //compute diff between today and alarmDate
        //hours
        if(today.get('hour') > $scope.alarm.time.hour ){ //ex : 23h to 7h
          alarmTmp.add(1, 'd');
        }
        else if( today.get('hour') === $scope.alarm.time.hour &&  today.get('minute') >= $scope.alarm.time.min){ //same hour but next day
          alarmTmp.add(1, 'd');
        }

        $scope.countdown = alarmTmp.diff(today, 'seconds');

        $timeout(function() {
          $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
          $scope.alarmTime = alarmTmp;

          //check alarm time and current time
          $scope.intervalAlarm = setInterval(function(){
            isItTime();
          }, 1000);

          $scope.$broadcast('timer-set-countdown', $scope.countdown);

          document.getElementById('countdown').getElementsByTagName('timer')[0].start();
        });

        $scope.alarm.button='OFF';

        $scope.alarm.status='L\'alarme est activée';
        }
        else {
          $scope.alarm.error = 'Format d\'heure non valide, exemple : 7:00';
        }
      };

      //reset alarm
      $scope.alarm.reset = function() {
        $scope.alarm.button = 'ON';
        $scope.$parent.playURL = false;
        clearInterval($scope.intervalAlarm);
        //remove playing URL
        $('#url2play').html("");

        $scope.countdown = 0;
        document.getElementById('countdown').getElementsByTagName('timer')[0].stop();

        $timeout(function() {
          $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
        });

        $scope.alarm.status = '';
    };

    //set countdown alarm //@TODO countdown timer
     $scope.alarm.countdown = function(val) {
       if( $scope.countdownInterval == null ){
         $scope.countdownMoment = moment().seconds(parseInt(val,10));
         $scope.countdownInterval = setInterval(function(){
           $timeout(function() {
             if( $scope.countdownMoment.get('second' ) === 0 ){
               $scope.launchLink('ring');
             }
             else {
               $scope.countdownMoment.subtract(1, 'second' );
             }
           });
         }, 1000);
       }
       else {
         $scope.countdownMoment = null;
         clearInterval($scope.countdownInterval);
       }
     };

    $scope.alarm.reset = function() {
        $scope.alarm.button = 'ON';
        $scope.$parent.playURL = false;
        clearInterval($scope.intervalAlarm);
        //remove playing URL
        $('#url2play').html("");

        $scope.countdown = 0;
        document.getElementById('countdown').getElementsByTagName('timer')[0].stop();

        $timeout(function() {
          $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
        });

        $scope.alarm.status = '';
    };

    //when we need to wake up the user with the alarm
    $scope.alarm.finish = function(){
        $scope.alarm.status='L\'alarme sonne !';
        $scope.launchLink('ring');
    };

    //utils
    //lauch sound, status is used to display the countdown
    $scope.launchLink = function(status){
      if( !$scope.$parent.playURL ){

        //Store on Google Analytics
        gaTrackerService.track('Alarm on', $scope.alarm.url);

        //urlUtilsService.playURL = true; //future
        $scope.$parent.playURL = true;
        $scope.$parent.playURL = true;
        if(status === 'ring' || status === "ringSecure"){
          $scope.alarm.status= status;
        }

        if(status === "ring"){
          //save firebase
          var tmpFirebase = {
            'url' : $scope.alarm.url,
            'time' : $scope.alarmTime._i
          };

          firebaseService.add(tmpFirebase);
        }

        $scope.alarm.button='OFF';
        $('#url2play').fadeIn(); //@TODO angular way

        var urlvideo = $scope.alarm.url,
            id,
            SoundCloudURL = false,
            str,
            SCregexp = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;

          if (/Youtube/i.test(urlvideo) || (/Youtu/i.test(urlvideo))) { //Cas
            if(/Youtube/i.test(urlvideo)){
                  id = urlUtilsService.youtubeIDextract(urlvideo, true);
            }
            else {
              id = urlUtilsService.youtubeIDextract(urlvideo, false);
            }

          //video = "http://www.youtube.com/v/zR2BboZeLEw"; //Video example type
          str =  urlUtilsService.youtubeBuilder(id);
          }
          else if(/Dailymotion/i.test(urlvideo)) { //Cas Dailymotion
            id = urlUtilsService.dailyIDextract(urlvideo);
            str = urlUtilsService.dailymotionBuilder(id);
          }
          else if( urlvideo.match(SCregexp) && urlvideo.match(SCregexp)[2]) {
            SoundCloudURL = true;
            urlUtilsService.launchSoundCloud(urlvideo);
          }
          else { //others cases
            str = urlUtilsService.iframeBuilder(urlvideo);
          }

        if( !SoundCloudURL ){
          $('#url2play').html(str); //make appear the link on the page
        }
      }
    };


    //return boolean
    //time to wake up
    function isItTime(){
      if( $scope.alarmTime.diff(initAlarmTimeValue, 'seconds') !== 0 ) {
          if($scope.alarmTime.diff(moment(), 'seconds') === 0){
            $scope.launchLink('ringSecure');
          }
      }
    }

    /**
     * from cookie data or default data if no cookie is set
     * set $scope.alarm.time
     * set $scope.alarm.url
     */
    function getCookieData(){
        //cookie service
        var cookieVal = cookieService.get();

        if(cookieVal !== null){
            $scope.alarmTime = moment(cookieVal.alarm);

            $scope.alarm.time = {
                'min': $scope.alarmTime.minute(),
                'hour': $scope.alarmTime.hour()
            };

            $scope.alarm.url = cookieVal.url;
        }
        else { //No cookie so default alarm + 8 hours from now
            $scope.alarm.time = {
                'min': 0,
                'hour': ((moment().get('hour') + 8) % 24)
            };

            $scope.alarm.url = dataService.getUrl();
        }
    }

    //url management
    $scope.changeUrl = function(url, isKey){
      if(isKey){
          $translate(url)
              .then(function (translatedValue) {
                  $scope.alarm.url = translatedValue;
                  $scope.alarm.urlId = url;
              });
      }
      else {
          $scope.alarm.url = url;
      }
    };
})
;
