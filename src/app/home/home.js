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

    $scope.alarm={};
    $scope.alarm.time = {
      'min': 0,
      'hour': moment().get('hour') + 5
    };
    $scope.alarm.value = 0;
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

    //when the user click on the ON button
    $scope.alarm.activate = function() {
      var tmp,
          today = moment(),
          alarmDate = moment();

      //compute diff between today and alarmDate
      if(today.get('hour') <= $scope.alarm.time.hour ){ //ex : 16h to 23h
        alarmDate.add($scope.alarm.time.hour - today.get('hour'), 'h');
      }
      else { //ex 23h to 7h
        alarmDate.add(24 - today.get('hour') + $scope.alarm.time.hour, 'h');
      }

      if(today.get('minute') <= $scope.alarm.time.min ){ //ex : 16h30 to 23h45
        alarmDate.add($scope.alarm.time.min - today.get('minute'), 'm');
      }
      else { //ex 23h45 to 7h30
        alarmDate.add(60 - today.get('minute') + $scope.alarm.time.min, 'm');
        alarmDate.subtract(1, 'h');
      }

      $scope.alarm.value = alarmDate.diff(today, 'seconds');
      //$timeout(function() {
        $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
      //});

      $scope.alarm.button='OFF';

      //document.getElementById('countdown').getElementsByTagName('timer')[0].addCDSeconds($scope.alarm.value);
      document.getElementById('countdown').getElementsByTagName('timer')[0].start();
      $scope.alarm.status='L\'alarme est activée';
    };

    //cancel alarm
    $scope.alarm.reset = function() {
      $scope.alarm.button = 'ON';
      document.getElementById('countdown').getElementsByTagName('timer')[0].stop();
      $scope.alarm.status = '';
    };

    //when we need to wake up the user with the alarm
    $scope.alarm.finish = function(){
        $scope.alarm.status='L\'alarme sonne !';

        //Launch link
        console.log("Le lien est :" + $scope.alarm.url);
        launchLink($scope.alarm.url);
    };

    //utils
    function launchLink(url){
      $('#url2play').fadeIn();
  		var urlvideo = url;

  			if (/Youtube/i.test(urlvideo) || (/Youtu/i.test(urlvideo))) { //Cas Youtube
  				var id = youtubeIDextract(urlvideo);

  			//video = "http://www.youtube.com/v/zR2BboZeLEw"; //Exemple type de vidéo à lire
  			video = "http://www.youtube.com/v/" + id;
  			str =  "<center><object width=\"420\" height=\"315\"> "+
  					"<param name=\"movie\" value=\""
  					+ video +
  					"&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\">"  +
  				"</param><param name=\"allowFullScreen\" value=\"true\"></param> "+
  			    "<param name=\"allowscriptaccess\" value=\"always\"></param>"  +
  					"<embed src=\"" +
  					video +
  					"&loop=1&autoplay=1?version=3&amp;hl=fr_FR&amp;rel=0\" type=\"application/x-shockwave-flash\" width=\"420\" height=\"315\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>"  +
  					"</object></center>";

  			} else if(/Dailymotion/i.test(urlvideo)) { //Cas Dailymotion
  			  typevideo = "daily";
  			  	function dailyIDextract(url)  //Retourne l'id de la vidéo daily
  				{
  					var d_id;
  					d_id = url.replace(/^[^v]+video.(.{6}).*/,"$1");
  					return d_id;
  				}
  				var id = dailyIDextract(urlvideo);


  				str = "<iframe frameborder=\"0\" width=\"420\" height=\"315\" src=\"" + "http://www.dailymotion.com/embed/video/" + id + "?autoPlay=1\">" +
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
  			else { //Cas autres liens chelou
  				str = "<iframe src='" + url + "'>" + "</iframe>";
  			//window.location=document.getElementById("musicloc").value
  			//window.open(document.getElementById("musicloc").value) //Lancement de la vidéo dans un nouvel onglet, bloqué par les navigateurs
  			}

  		$('#url2play').html(str); //Remplace le html de "vidéo" par la vidéo
    }

    //TODO new short link
    function youtubeIDextract(url){  //Retourne l'id de la vidéo youtube
      var youtube_id;
      youtube_id = url.replace(/^[^v]+v.(.{11}).*/,"$1");
      return youtube_id;
    }

    //chronometer
    $scope.timerRunning = false;
    $scope.timerPaused = false;

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
        $scope.timerPaused = false;
    };

    $scope.stopTimer = function (){
        if($scope.timerRunning === false){
          $scope.$broadcast('timer-reset');
        }
        else {
          $scope.timerPaused = true;
          $scope.$broadcast('timer-stop');
          $scope.timerRunning = false;
        }
    };

    $scope.resumeTimer = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
        $scope.timerPaused = false;
    };

    $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data = ', data);
    });
})

;
