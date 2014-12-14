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
  'AlarmModule',
  'ChronoModule',
  'liveModule',
  'angularMoment',
  'firebase'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/',
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

  //display current date on the website
  setInterval(function(){
    $scope.clock.time = moment();
    $timeout(function() {
      $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
    });
  }, 1000);
})

;
