angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router',
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run(function(amMoment) {
    amMoment.changeLocale('fr'); //momentJS
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + 'Reveil en ligne.fr' ;
    }
  });

  //utils
  //Go to anchor
  $scope.goToAnchor = function(anchorName) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(anchorName);

      // call $anchorScroll()
      $anchorScroll();
  };
})

;
