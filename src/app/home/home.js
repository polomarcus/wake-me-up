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
angular.module( 'wakeMeUp.home', [
  'ui.router',
  'timer',
  'AlarmModule',
  'ChronoModule',
  'liveModule',
  'angularMoment',
  'firebase'
])

.controller( 'HomeCtrl', function HomeController( $scope,$stateParams, $timeout, urlUtilsService, i18nService, seoService) {
  //Title and meta description init
  seoService.init();
  //init
  $scope.clock = {
    time: moment()
  };

  $scope.playURL = urlUtilsService.playURL;

  //language angular-timer
  $scope.language = i18nService.get();

  $scope.$watch(function () {
    return i18nService.get();
  }, function (newVal) {
    $scope.language = newVal;
  });

  //display current date on the website
  setInterval(function(){
    $scope.clock.time = moment();
    $timeout(function() {
      $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
    });
  }, 1000);
})

;
