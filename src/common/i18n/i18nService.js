var app = angular.module('reveilEnLigne.services');

app.factory('i18nService', function(amMoment, $translate) {
    var I18nService = function() {};

    I18nService.prototype.language = 'en'; //default language

    I18nService.prototype.set = function set(lang){

        this.language = lang;
        amMoment.changeLocale(lang); //momentJS
        console.log('$translate', $translate.versionInfo());


        $translate.use(lang); // app language
    };

    I18nService.prototype.get = function get(){
        return this.language;
    };

    return new I18nService();
});
