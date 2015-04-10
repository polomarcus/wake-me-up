var app = angular.module('wakeMeUp.services');

app.factory('gaTrackerService', function($log) {
  var GaTrackerService = function() {};

  var _gaq = _gaq || []; //safe script loading for GA

  GaTrackerService.prototype.track = function track(category, type, message){
    _gaq.push([
      '_trackEvent',
      category,
      type,
      message
    ]);
  };

  return new GaTrackerService();
});
