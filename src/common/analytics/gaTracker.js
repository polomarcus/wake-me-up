// AngularJS errors handler
angular.module('wakeMeUp')
    .config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate) {
            return function (exception, cause) {
                $delegate(exception, cause);
                if(typeof _gaq !== "undefined") {
                    _gaq.push([
                        '_trackEvent',
                        'AngularJS error',
                        exception.message,
                        exception.stack,
                        0,
                        true
                    ]);
                }
            };
        });
    });