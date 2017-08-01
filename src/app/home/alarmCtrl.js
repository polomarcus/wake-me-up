angular.module( 'AlarmModule', [
  'ui.router'
])

/**
 * And of course we define a controller for our route.
 */
  .controller( 'AlarmCtrl', function AlarmControl( $scope, $timeout, urlUtilsService, cookieService, dataService, i18nService, gaTrackerService, $q, adsService) {
    //Alarm Ctrl
    //show/hide URL div
    $scope.$parent.playURL = false;

    $scope.alarm={};

    $scope.alarm.error= '';
    $scope.alarmTime = moment().subtract(1, 'day'); //previous time for the alarm time init

    var initAlarmTimeValue = moment().subtract(1, 'day' );

    getCookieData();

    //progress bar
    $scope.displayProgressBar = 0;
    $scope.displayProgressActive = 'active'; //css class none or active

    $scope.countdown = 0;
    $scope.initialValueCountdown = 0;
    $scope.alarm.status='';
    $scope.alarm.button='ON';

    //countdown
    $scope.countdownInterval = null;
    $scope.countdownMoment = 0;

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

        //Teads inRead
        adsService.launchInread();

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

        //Store on Google Analytics
        gaTrackerService.track('set', 'Alarm activate', alarmTmp._i);

        //compute diff between today and alarmDate
        //hours
        if(today.get('hour') > $scope.alarm.time.hour ){ //ex : 23h to 7h
          alarmTmp.add(1, 'd');
        }
        else if( today.get('hour') === $scope.alarm.time.hour &&  today.get('minute') >= $scope.alarm.time.min){ //same hour but next day
          alarmTmp.add(1, 'd');
        }

        $scope.countdown = alarmTmp.diff(today, 'seconds');
        $scope.initialValueCountdown = $scope.countdown;
        $scope.countdownMoment = today;

        $timeout(function() {
          $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
          $scope.alarmTime = alarmTmp;

          //check alarm time and current time
          var cancelInterval = false;
          $scope.intervalAlarm = setInterval(function(){
            cancelInterval = isItTime();

            //compute progress bar size
            $scope.displayProgressBar = calculateProgressBar($scope.initialValueCountdown, $scope.countdownMoment.add(1, 'second'), alarmTmp);

            if(cancelInterval){
              clearInterval($scope.intervalAlarm);
              $scope.intervalAlarm = null;
              $scope.displayProgressActive = ''; //cancel active class on progress bar
            }
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
      //Store on Google Analytics
      gaTrackerService.track('reset', 'Alarm reset', '');

      $scope.alarm.button = 'ON';
      $scope.$parent.playURL = false;
      clearInterval($scope.intervalAlarm);
      //remove playing URL
      $('#url2play').html("");

      //progress bar
      $scope.displayProgressBar = 0;
      $scope.displayProgressActive = 'active';

      //countdown reinit
      $scope.countdown = 0;
      document.getElementById('countdown').getElementsByTagName('timer')[0].stop();

      $timeout(function() {
        $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
      });

      $scope.alarm.status = '';
    };

    // when we need to wake up the user with the alarm
    // Callback for angular-timer
    $scope.alarm.finish = function(){
      $scope.alarm.status='L\'alarme sonne !';
      $scope.launchLink('ring');
    };

    //utils
    //lauch sound, status is used to display the countdown
    $scope.launchLink = function(status){
      if( !$scope.$parent.playURL ){

        if(status === 'test'){
          gaTrackerService.track('test', 'test on', $scope.alarm.url);
        }
        else {
          var now = moment();

          //Store on Google Analytics
          gaTrackerService.track('alarm', 'Alarm URL', $scope.alarm.url);
          gaTrackerService.track('alarm', 'Alarm time', $scope.alarm.time.hour);

          var testMinute = $scope.alarm.time.min - now.minutes();
          var testHour = $scope.alarm.time.hour - now.hours();
          var outputAlarm = $scope.alarm.time.hour + "(" + now.hours() + ")" + ":" + $scope.alarm.time.min + "(" + now.minutes() + ")";
          var rsltTest = true;
          if(testHour === 0) {
            rsltTest = testMinute > -2 && testMinute < 2;
            if(!(testMinute > -2 && testMinute < 2)){
               gaTrackerService.track('alarm', 'Alarm check minute', outputAlarm);
            }
          }
          else {
            gaTrackerService.track('alarm', 'Alarm check hour', outputAlarm);
          }
        }


        //urlUtilsService.playURL = true; //future
        $scope.$parent.playURL = true;
        $scope.$parent.playURL = true;
        if(status === 'ring' || status === "ringSecure"){
          $scope.alarm.status= status;
        }

        $scope.alarm.button='OFF';
        $('#url2play').fadeIn(); //@TODO angular way

        //str = urlUtilsService.getHTML($scope.alarm.url); @TODO proper function inside a service
        var urlvideo = $scope.alarm.url,
          id,
          SoundCloudURL = false,
          str,
          SCregexp = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/,
          defer = $q.defer();

        if (/Youtube/i.test(urlvideo) || (/Youtu/i.test(urlvideo))) {
          if(/Youtube/i.test(urlvideo)){
            id = urlUtilsService.youtubeIDextract(urlvideo, true);
          }
          else {
            id = urlUtilsService.youtubeIDextract(urlvideo, false);
          }

          //video = "http://www.youtube.com/v/zR2BboZeLEw"; //Video example type
          str =  urlUtilsService.youtubeBuilder(id);
          defer.resolve(str);
        }
        else if(/Dailymotion/i.test(urlvideo)) { //Cas Dailymotion
          id = urlUtilsService.dailyIDextract(urlvideo);
          str = urlUtilsService.dailymotionBuilder(id);
          defer.resolve(str);
        }
        else if( urlvideo.match(SCregexp) && urlvideo.match(SCregexp)[2]) { //Soundcloud
          SoundCloudURL = true;
          urlUtilsService.launchSoundCloud(urlvideo);
          defer.resolve(str);
        }
        else if( urlvideo.match('mixcloud')) { //Mixcloud
          defer.resolve(urlUtilsService.mixcloudBuilder(urlvideo));
        }
        else if( urlvideo.match('twitch')) {
          defer.resolve(urlUtilsService.twitchBuilder(urlvideo));
        }
        else if( urlvideo.match('deezer')) { //Deezer
          defer.resolve(urlUtilsService.deezerBuilder(urlvideo));
        }
        else { //others cases we use iframe src
          str = urlUtilsService.iframeBuilder(urlvideo);
          defer.resolve(str);
        }

        defer.promise.
          then(function(str){
            if( !SoundCloudURL ){
              $('#url2play').html(str); //make appear the link on the page
            }
          });
      }
    };


    /**
     * time to wake up reached?
     * @returns boolean
     */
    function isItTime(){
      var output = false;
      if( $scope.alarmTime.diff(initAlarmTimeValue, 'seconds') !== 0 ) {
        if($scope.alarmTime.diff(moment(), 'seconds') === 0){
          $scope.launchLink('ringSecure');
          output = true;
        }
      }

      return output;
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

    /**
     * calculate the remaining time in a progress bar in percentage
     * @param {float} initCountdown
     * @param {moment} currentCountdown
     * @param {moment} alarmTime
     *
     * @return {float} 0 --> 100
     */
    function calculateProgressBar(initCountdown, currentCountdown, alarmTime ) {
      var displayProgressBar;

      displayProgressBar = alarmTime.diff(currentCountdown, 'seconds') * 100 / initCountdown ;
      displayProgressBar = 100 - displayProgressBar;

      displayProgressBar = Math.round(displayProgressBar * 10) / 10;

      if(displayProgressBar > 100){
        displayProgressBar = 100;
      }

      return displayProgressBar;
    }

    $scope.changeUrl = function(url, isKey){
      if(isKey){
        i18nService.translate(url)
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
