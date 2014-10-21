angular.module( 'AlarmModule', [
  'ui.router',
  'timer',
  'angularMoment',
  'reveilEnLigne.services'
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'AlarmCtrl', ['$scope', '$timeout', 'urlUtilsService', function AlarmControl( $scope, $timeout, urlUtilsService) {
    //Alarm Ctrl
    //show/hide URL div
    $scope.playURL = false;

    $scope.alarm={};
    $scope.alarm.error= '';
    $scope.alarmTime = moment().subtract(1, 'day'); //previous time for the alarm time init
    $scope.intervalAlarm;
    initAlarmTimeValue = moment().subtract(1, 'day' );
    $scope.alarm.time = {
      'min': 0,
      'hour': ((moment().get('hour') + 8) % 24)
    };
    $scope.countdown = 0;
    $scope.alarm.status='';
    $scope.alarm.button='ON';
    $scope.alarm.url='http://youtu.be/KGyZY4HNumw';


    //countdown
    $scope.countdownInterval = null;
    $scope.countdownMoment = null;

    //logic functions
    //enter key launch URL form
    $('body').bind('keyup', function(event) {
       if(event.keyCode==13){
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

        todayDate = correctFormatDate(todayDate);
        todayMonth = correctFormatDate(todayMonth + 1);
        alarmTimeHour = correctFormatDate(alarmTimeHour);
        alarmTimeMinute = correctFormatDate(alarmTimeMinute);

        //init alarm time
        var alarmTmp = moment(today.year() + "-" + todayMonth + "-" + todayDate + " " + alarmTimeHour + ":" + alarmTimeMinute  + ":00");
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

      //cancel alarm
      $scope.alarm.reset = function() {
        $scope.alarm.button = 'ON';
        $scope.playURL = false;
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

      //set countdown alarm //TODO
      $scope.alarm.countdown = function(val) {
        if( $scope.countdownInterval == null ){
          $scope.countdownMoment = moment().seconds(parseInt(val));
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
        $scope.playURL = false;
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
      if( !$scope.playURL ){
        $scope.playURL = true;
        if(status === 'ring'){
          $scope.alarm.status= status;
        }

        $scope.alarm.button='OFF';
        $('#url2play').fadeIn();

        var urlvideo = $scope.alarm.url,
            id,
            SoundCloudURL = false;
            SCregexp = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;

          if (/Youtube/i.test(urlvideo) || (/Youtu/i.test(urlvideo))) { //Cas
            if(/Youtube/i.test(urlvideo)){
                  id = urlUtilsService.youtubeIDextract(urlvideo, true);
            }
            else {
              id = urlUtilsService.youtubeIDextract(urlvideo, false);
            }

          //video = "http://www.youtube.com/v/zR2BboZeLEw"; //Exemple type de vidéo à lire
          video = "http://www.youtube.com/v/" + id;
          str =  "<object width=\"420\" height=\"315\"> "+ //width=\"420\" height=\"315\"
              "<param name=\"movie\" value=\""
              + video +
              "&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\">"  +
            "</param><param name=\"allowFullScreen\" value=\"true\"></param> "+
              "<param name=\"allowscriptaccess\" value=\"always\"></param>"  +
              "<embed  width=\"420\" height=\"315\" src=\"" +
              video +
              "&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>"  +
              "</object>";

          } else if(/Dailymotion/i.test(urlvideo)) { //Cas Dailymotion
            typevideo = "daily";

            id = urlUtilsService.dailyIDextract(urlvideo);
            str = "<iframe frameborder=\"0\" autoplay='true' src=\"" + "http://www.dailymotion.com/embed/video/" + id + "?autoPlay=1\">" +
            "</iframe><br />" +
            "<a href=\"http://www.dailymotion.com/video/" + id +"\" target=\"_blank\">" +
              "Bon réveil !" +
          "	</a>" +
          "	<i>par " +
              "<a href=\"http://www.dailymotion.com/\" target=\"_blank\">" +
                "Reveil-en-ligne.fr" +
              "</a>"  +
            "</i>";
          }
          else if( urlvideo.match(SCregexp) && urlvideo.match(SCregexp)[2]) {
            SoundCloudURL = true;
            urlUtilsService.launchSoundCloud(urlvideo);
          }
          else { //others cases
            str = "<iframe style='width:100%;'src='" + urlvideo + "'>" + "</iframe>";
          }

        if( !SoundCloudURL ){
          $('#url2play').html(str); //make appear the link on the page
        }
      }
    };


    //9 -> 09 for example
    function correctFormatDate(date){
      if(date < 10) {
        date = '0' + date;
      }

      return date;
    }

    //return boolean
    //time to wake up
    function isItTime(){
      if( $scope.alarmTime.diff(initAlarmTimeValue, 'seconds') !== 0 ) {
          if($scope.alarmTime.diff(moment(), 'seconds') === 0){
            $scope.launchLink('ring');
          }
      }
    }

    //url management
    $scope.changeUrl = function(url){
      $scope.alarm.url = url;
    };
}])
;
