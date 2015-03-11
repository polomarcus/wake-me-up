var app = angular.module('wakeMeUp.services');

app.factory('dataService', function() {
    var DataService = function() {};

    var url = 'https://soundcloud.com/20syl/20syl-ongoing-thing';

    DataService.getUrl = function getUrl(){
        return url;
    };

    /**
     * @description
     * display date management
     * 9 -> 09 for example
     */
    DataService.correctFormatDate = function correctFormatDate(date){
        if(date < 10) {
            date = '0' + date;
        }

        return date;
    };


    return DataService;
});
