angular.module( 'reveilEnLigne', [
  'templates-app',
  'templates-common',
  'reveilEnLigne.home',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run(function(amMoment) {
    amMoment.changeLocale('fr'); //momentJS
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll ) {
  console.log('%c\nReveil-en-ligne.fr\nGithub : https://github.com/polomarcus/reveil-en-ligne\nTwitter : @polomarcus', 'color: #4472B9; font-family: "arial"; font-size: 20px;');

  $scope.adBlock = false;
  if (document.getElementById('ads_bottom') === null) {
		$scope.adBlock = true; //Put true si il ya de la pub
  }

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
