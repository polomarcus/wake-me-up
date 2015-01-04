angular.module( 'reveilEnLigne', [
  'templates-app',
  'templates-common',
  'reveilEnLigne.controllers',
  'reveilEnLigne.services',
  'ui.router'
  'firebase'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise( '/' );
})

.run(function(amMoment) {
    amMoment.changeLocale('fr'); //momentJS init i18n
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll ) {
  console.log('%c\nReveil-en-ligne.fr by @polomarcus from Montpellier, France\nGithub : https://github.com/polomarcus/reveil-en-ligne\n', 'color: #4472B9; font-family: "arial"; font-size: 20px;');

  $scope.adBlock = false;
  if (document.getElementById('ads_bottom') === null) {
		$scope.adBlock = true; //Put true if adblock
  }

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + 'Reveil-en-ligne.fr' ;
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
