var app = angular.module('wakeMeUp.services');

app.factory('cookieService', function($cookies) {
    var CookieService = function() {};


    CookieService.set = function set(alarm, url){

        var now = new Date();
        now.setDate(now.getDate() + 30);

         var options = {
            expires: now
         };

         $cookies.put('alarm',alarm,options);
         $cookies.put('url',url,options);
    };

    CookieService.get = function get(){
        // Getting a cookie
        if(isCookieDefinied()){
            return {
                alarm : $cookies.get('alarm'),
                url :$cookies.get('url')
            };
        }
        else {
            return null;
        }
    };

    /**
     * return is a cookie is well set
     * @returns {boolean}
     */
    function isCookieDefinied(){
        return !_.isUndefined($cookies.get('alarm')) && !_.isUndefined($cookies.get('url'));
    }

    return CookieService;
});
