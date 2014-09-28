angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('OperationsCtrl', function($scope, Operations) {
  $scope.operations = Operations.all();
})

.controller('OperationDetailCtrl', function($scope, $stateParams, Operations) {
  $scope.operation = Operations.get($stateParams.operationId);

  $scope.verify = function(answer) {
      console.log($scope.operation.result == answer.result);
  }

})

.controller('AccountCtrl', function($scope) {
});
