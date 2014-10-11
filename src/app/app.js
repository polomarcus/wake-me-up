angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run(function(amMoment) {
    amMoment.changeLocale('fr'); //momentJS
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll ) {
  console.log('%cBienvenue sur reveil-en-ligne.fr, le projet est sur Github :\nhttps://github.com/polomarcus/reveil-en-ligne\n', 'color: #4472B9; font-family: "arial"; font-size: 20px;');

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
