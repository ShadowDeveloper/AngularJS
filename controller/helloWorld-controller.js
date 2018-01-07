(function () {
  'use strict';

  //O modo abaixo isola em um escolo o controller
  angular.module("app").controller("myAppCtrl", myAppCtrl);
  myAppCtrl.$inject = ['$scope'];
  function myAppCtrl($scope) {
    $scope.message = "Hellow World";
  }

})();
