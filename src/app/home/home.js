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
angular.module( 'reveilEnLigne.home', [
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
    data:{ pageTitle: '' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, $timeout) {

    //init
    $scope.clock = {
      time: moment()
    };

    //show/hide URL div
    $scope.playURL = false;

    $scope.alarm={};
    $scope.alarm.error= '';
    $scope.alarm.time = {
      'min': 0,
      'hour': ((moment().get('hour') + 8) % 24)
    };
    $scope.countdown = 0;
    $scope.alarm.status='';
    $scope.alarm.button='ON';
    $scope.alarm.url='http://youtu.be/KGyZY4HNumw';

    //logic functions
    //display current date on the website
    setInterval(function(){
      $scope.clock.time = moment();
      $timeout(function() {
        $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
      });
    }, 1000);

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
          $scope.$broadcast('timer-set-countdown', $scope.countdown);

          document.getElementById('countdown').getElementsByTagName('timer')[0].start();
        });

        $scope.alarm.button='OFF';

        //document.getElementById('countdown').getElementsByTagName('timer')[0].addCDSeconds($scope.countdown);

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
        $scope.playURL = true;
        launchLink($scope.alarm.url);
    };

    //utils
    function launchLink(url){
      $('#url2play').fadeIn();
  		var urlvideo = url,
          id;

  			if (/Youtube/i.test(urlvideo) || (/Youtu/i.test(urlvideo))) { //Cas
          if(/Youtube/i.test(urlvideo)){
  				      id = youtubeIDextract(urlvideo, true);
          }
          else {
            id = youtubeIDextract(urlvideo, false);
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

  				var id = dailyIDextract(urlvideo);
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
  			else { //others cases
  				str = "<iframe style='width:100%;'src='" + url + "'>" + "</iframe>";
  			//window.location=document.getElementById("musicloc").value
  			//window.open(document.getElementById("musicloc").value) //Lancement de la vidéo dans un nouvel onglet, bloqué par les navigateurs
  			}

  		$('#url2play').html(str); //Remplace le html de "vidéo" par la vidéo
    }

    //extract the id of a youtube video
    function youtubeIDextract(url, longUrl){  //Retourne l'id de la vidéo youtube
      var youtube_id;
      if( longUrl ){
        youtube_id = url.replace(/^[^v]+v.(.{11}).*/,"$1");
      }
      else {
        youtube_id = url.replace(/^[^v]+be.(.{11}).*/,"$1");
      }

      return youtube_id;
    }

    //get the dailymotion video id
    function dailyIDextract(url){
      var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
      if (m !== null) {
          if(m[4] !== undefined) {
              return m[4];
          }
          return m[2];
      }
      return null;
    }

    //9 -> 09 for example
    function correctFormatDate(date){
      if(date < 10) {
        date = '0' + date;
      }

      return date;
    }

    //chronometer
    $scope.times = [];
    $scope.timerRunning = false;
    $scope.timerPaused = false;
    $scope.timerBegin = true;
    $scope.timerStartOrStop = "Start";

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
        $scope.timerStartOrStop = "Continuer";
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
    $scope.lapTimer = function (){
        var time = $('#chronoHour').html() + ' h ' + $('#chronoMin').html() + ' min ' + $('#chronoSec').html() + ' sec';
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

    //url management
    $scope.changeUrl = function(url){
      $scope.alarm.url = url;
    };
})

;
