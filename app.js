var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'views/list.html',
    controller : 'MainCtr'
  }).
  when('/page2/:num', {
    templateUrl: 'views/page2.html',
    controller : 'secondCtr'
  }).
    when('/details', {
    templateUrl: 'views/details.html'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

myApp.controller('MainCtr', ['$scope', function($scope){
$scope.name = 'kais rekouche';

}]);

myApp.controller('secondCtr', ['$scope','$routeParams', function($scope,$routeParams){
$scope.name = $routeParams.num || 1 ;

}]);


