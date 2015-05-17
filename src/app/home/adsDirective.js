var app = angular.module('wakeMeUp.controllers');

app.directive('ads', function($timeout, i18nService) {
  return {
    restrict: 'E',
    templateUrl: 'home/ads.tpl.html',
    link : function(scope, element, attrs) {
      //@TODO use another ads here, teads is used in adsService.js

      scope.translationOK = i18nService.getTranslationAdOK();
    }
  };
});