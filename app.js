var dependecies = [
  'ngRoute'
];

//App module
var app = angular.module('app', dependecies);

app.config(['$routeProvider', '$locationProvider', routeManager]);

function routeManager($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: './partials/01 - HelloWorld/index.html',
      controller: './controller/helloWorld-controller.js'
    }).when('/second', {
      templateUrl: './partials/02 - Lista_telefonica/index.html',
      controller: 'secondController'
    });
  // $locationProvider.html5mode(false).hashPrefix('!');
}
