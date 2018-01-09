(function () {

  var app = angular.module('app');

  app.config(['$routeProvider', '$locationProvider', routeMenager]);

  function routeMenager($routeProvider, $locationProvider) {

    var sufix = '.html';

    $routeProvider.
      when('/', {
        templateUrl: './partials/01_ HelloWorld/index' + sufix,
        controller: 'helloWorldController'
      }).when('/lista-telefonica', {
        templateUrl: './partials/02_Lista_telefonica/index' + sufix,
        controller: 'listaTelefonicaController'
      });
    // $locationProvider.html5mode(true).hashPrefix('!');
  }

})();