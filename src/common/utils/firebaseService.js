var app = angular.module('reveilEnLigne.services');

app.factory('firebaseService', function($firebase) {
    var firebaseService = function() {};

    firebaseService.data = [];

    var ref = new Firebase("https://boiling-fire-8614.firebaseio.com/data").limitToLast(100);
    var sync =  $firebase(ref);

    // create a synchronized array for use in our HTML code
    firebaseService.data = sync.$asArray();

    //when loaded sort array by most recent
    firebaseService.data.$loaded().then(function() {
        //Sort array, recentest to the lastest
        firebaseService.data =  sortDate(firebaseService.data);
    });

    firebaseService.get = function get(){
        return firebaseService.data;
    };

    /**
     * save into firebase DB
     * @param {object} data
     *    {
            'url' : $scope.alarm.url,
            'time' : $scope.alarmTime._i
          };
     */
    firebaseService.add = function add(data){
        if(moment(data.time).diff(moment()) < 2000){ //avoid future time saving, 2000 -> 2 seconds
            firebaseService.data.$add(
                data
            );

            //resort after adding a data
            firebaseService.data =  sortDate(firebaseService.data);
        }
    };

    /**
     * Sort date by the most recent
     * @param {array} arrayDate
     */
    function sortDate(arrayDate){
        //Sort array, recentest to the lastest
        return arrayDate.sort(function(s1 ,s2) {
            return moment(s2.time).diff(moment(s1.time));
        });
    }

    return firebaseService;
});
