var app = angular.module('wakeMeUp.services');

app.factory('gaTrackerService', function($log) {
    var GaTrackerService = function() {};

    GaTrackerService.prototype.track = function track(category, type, message){
        //$log.info("Google Analytics", message);
        _gaq.push([
            '_trackEvent',
            category,
            type,
            message
        ]);
    };

    return new GaTrackerService();
});
