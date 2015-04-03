// AngularJS errors handler
angular.module('wakeMeUp')
    .config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate) {
            return function (exception, cause) {
                var _gaq = _gaq || []; //safe script loading for GA
                $delegate(exception, cause);
                _gaq.push([
                    '_trackEvent',
                    'AngularJS error',
                    exception.message,
                    exception.stack,
                    0,
                    true
                ]);
            };
        });
    });