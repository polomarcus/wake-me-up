var app = angular.module('reveilEnLigne.services');

app.factory('dataService', function() {
    var DataService = function() {};

    var url = 'https://soundcloud.com/20syl/20syl-ongoing-thing';

    DataService.getUrl = function getUrl(){
        return url;
    };

    return DataService;
});
