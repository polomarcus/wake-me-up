angular.module( 'reveilEnLigne', [
    'templates-app',
    'templates-common',
    'reveilEnLigne.controllers',
    'reveilEnLigne.services',
    'ui.router',
    'firebase',
    'i18n'
])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
        // Default route

        $stateProvider.state('otherwise', {
            url: '/',
            onEnter: function (i18nService) {
                //set the navigator language by default if none is here
                i18nService.set(navigator.language.split('-')[0] || 'en'); //navigator language
            },
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: '' }
        })
            .state('otherwise.lang', {
                url: ':keyLangApp',
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

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location, $anchorScroll, i18nService, $stateParams ) {
        console.log('%c\nReveil-en-ligne.fr by @polomarcus from Montpellier, France\nGithub : https://github.com/polomarcus/reveil-en-ligne\n', 'color: #4472B9; font-family: "arial"; font-size: 20px;');

        //AdBlock management
        $scope.adBlock = false;
        if(document.getElementById('ads_bottom') === null) {
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

        //change language
        $scope.changeLanguage = function changeLanguage(lang) {
            i18nService.set(lang);
        };
    })
;
