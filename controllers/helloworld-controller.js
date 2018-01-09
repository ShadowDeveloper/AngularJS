(function () {
  'use strict';

  //O modo abaixo isola em um escolo o controller
  angular.module("app").controller("helloWorldController", helloWorldController);
  helloWorldController.$inject = ['$scope'];
  function helloWorldController($scope) {
    $scope.message = "Hellow World";
  }

})();
