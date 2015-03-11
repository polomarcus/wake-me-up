var app = angular.module('wakeMeUp.services');

app.factory('i18nService', function(amMoment, $translate) {
    var I18nService = function() {
        this.language = 'en';
    };

    //@TODO get data from $translateProvider.Translation
    var availableLanguages = [
        'en',
        'fr'
    ];

    var preferredLanguage = 'en';

    /**
     * set language for momentJS and angular-translate and facebook comments
     * @param lang
     */
    I18nService.prototype.set = function set(lang){
        //check if the lang exists
        if(_.indexOf(availableLanguages, lang) === -1){
            lang = preferredLanguage;
        }

        this.language = lang;
        amMoment.changeLocale(lang); //momentJS
        $translate.use(lang); // app language
        facebookLanguage(lang);
    };

    I18nService.prototype.get = function get(){
        return this.language;
    };

    /**
     * simple use of $translate method, to avoid using $translate dependency in module/Services
     * @param key translation
     * @returns {promise)
     */
    I18nService.prototype.translate = function translate(key){
        return $translate(key);
    };

    function getFullLangCode(lang){
        switch(lang) {
            case 'en':
                return lang +'_GB';
            case 'fr':
                return lang +'_FR';
            default:
                return 'en_GB';
        }
    }

    function facebookLanguage(lang){
        lang = getFullLangCode(lang);

        $(window).load(function() {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/" + lang + "/sdk.js#xfbml=1&appId=559454604162123&version=v2.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }

    return new I18nService();
});
