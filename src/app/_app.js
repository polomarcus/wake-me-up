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
                if($location.url() === "/"){
                    i18nService.set(navigator.language.split('-')[0] || 'en'); //navigator language
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

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll, i18nService, gaTrackerService) {
        console.log('%c\nReveil-en-ligne.fr by @polomarcus from Montpellier, France\nGithub : https://github.com/polomarcus/reveil-en-ligne\n', 'color: #4472B9; font-family: "arial"; font-size: 20px;');

        //AdBlock management
        $scope.adBlock = false;

        if(document.getElementById('ads_bottom') === null) {
          $scope.adBlock = true; //Put true if adblock
        }
        gaTrackerService.track('Adblocker', $scope.adBlock);

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
        };

        //Menu top facebook interaction
        $scope.facebookClick = function facebookClick(type) {
            //Store on Google Analytics
            gaTrackerService.track('facebookClick', 'click', type);
        };



    })
;
