angular.module( 'wakeMeUp', [
  'templates-app',
  'templates-common',
  'wakeMeUp.controllers',
  'wakeMeUp.services',
  'ui.router',
  'firebase'
])

  .config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
    // Default route

    $stateProvider.state('otherwise', {
      url: '/',
      onEnter: function (i18nService, $location) {
        var navigatorLanguage = navigator.language || navigator.browserLanguage;
        if($location.url() === "/"){
          i18nService.set(navigatorLanguage || 'en'); //navigator language
        } else {
          i18nService.set("unknown");
        }
      },
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Reveil-en-ligne.fr' }
    })
      .state('lang', {
        url: '/:keyLangApp',
        onEnter: function (i18nService, $stateParams) {
          i18nService.set($stateParams.keyLangApp);
        },
        views: {
          "main": {
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
          }
        },
        data:{ pageTitle: '' }
      });

    $urlRouterProvider.otherwise('/');
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll, i18nService, gaTrackerService, seoService) {
    displayConsoleLogMessage();

    //hide loading message
    $scope.isViewLoading = false;

    $scope.appReady = true;

    //AdBlock management
    $scope.adBlock = false;

    if(document.getElementById('ads_bottom') === null) {
      $scope.adBlock = true; //Put true if adblock
    }
    gaTrackerService.track('Adblocker', 'value', $scope.adBlock);

    //utils
    //Go to anchor
    $scope.goToAnchor = function(anchorName) {
      //Store on Google Analytics
      gaTrackerService.track('menuAnchor', 'click', anchorName);

      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(anchorName);

      // call $anchorScroll()
      $anchorScroll();
    };

    //change language
    $scope.changeLanguage = function changeLanguage(lang) {
      //Store on Google Analytics
      gaTrackerService.track('changeLanguage', 'click', lang);

      i18nService.set(lang);
      seoService.init();
    };

    //Menu top facebook interaction
    $scope.facebookClick = function facebookClick(type) {
      //Store on Google Analytics
      gaTrackerService.track('facebookClick', 'click', type);
    };

    function displayConsoleLogMessage(){
      console.log('%c\nWake-me-up.co - Reveil-en-ligne.fr\nBy @polomarcus from Montpellier, France since 2011\nGithub : https://github.com/polomarcus/wake-me-up\n', 'color: #4472B9; font-family: "arial"; font-size: 20px;');
      cancelConsoleOutput();
    }

    /**
     * cancel all other console.log
     */
    function cancelConsoleOutput() {
     //console.log = function (){};
      console.warn = function (){};
      console.info = function (){};
      console.debug = function (){};
      console.error = function (){};
    }
  })
;
