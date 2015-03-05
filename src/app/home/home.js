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
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: '' }
        })

        .state( 'home.lang', {
            url: '/:langKey',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Test ' }
        });
})

.controller( 'HomeCtrl', function HomeController( $scope,$stateParams, $timeout, urlUtilsService, i18nService) {
  //init
  $scope.clock = {
    time: moment()
  };

    //@TODO use it in _app.js
    i18nService.translate('WEBSITE.TITLE')
        .then(function (translatedValue) {
            $scope.pageTitle = translatedValue;
        });

  $scope.playURL = urlUtilsService.playURL;

  //display current date on the website
  setInterval(function(){
    $scope.clock.time = moment();
    $timeout(function() {
      $scope.$apply();  // anything you want can go here and will safely be run on the next digest.
    });
  }, 1000);
})

;
