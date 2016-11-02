angular.module('myApp',[])
    .controller('MainCtrl',function($scope){
    $scope.color = 'blue';
    //$scope.color = "blue";
    })
    .directive('mycircle', function(){
    return {
        scope: {color:'@'},
        restrict: 'E', 
        templateUrl: 'circle.html',

        };
    });

