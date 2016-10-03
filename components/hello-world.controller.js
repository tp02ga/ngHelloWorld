(function () {
  
  angular
    .module("ngHelloWorld")
    .controller("helloWorldController", function ($scope) {
      $scope.message = "Hello World (from the controller)";
    });

})();

