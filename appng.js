var myApp = angular.module('myApp',[]);

myApp.controller('MainCtr', ['$scope', '$http', function($scope, $http) {
  $http.get('js/agences.json').success(function(data) {
    $scope.agences = data;
  });
}]);