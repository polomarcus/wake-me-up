var app = angular.module('wakeMeUp.controllers');

app.directive('ads', function($timeout, adsService, i18nService) {
  return {
    restrict: 'E',
    templateUrl: 'home/ads.tpl.html',
    link : function(scope, element, attrs) {
      adsService.launchInread();
      scope.translationOK = i18nService.getTranslationAdOK();
    }
  };
});