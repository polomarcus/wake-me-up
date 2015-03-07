var app = angular.module('reveilEnLigne.services');

app.factory('gaTrackerService', function($log) {
    var GaTrackerService = function() {};

    GaTrackerService.prototype.track = function track(type, message){
        //$log.info("Google Analytics", message);
        _gaq.push([
            '_trackEvent',
            'alarm',
            type,
            message
        ]);
    };

    return GaTrackerService;
});
