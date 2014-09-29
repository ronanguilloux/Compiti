angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})


.controller('OperationsCtrl', function($scope, Operations) {
  $scope.operations = Operations.all();
})

.controller('OperationDetailCtrl', function($scope, $stateParams, Operations) {
    $scope.operation = Operations.get($stateParams.operationId);
    $scope.buttonText = 'Vérifier';
    $scope.verify = function(answer) {
        if((typeof $scope.operation.result != 'undefined')
        &&
        (typeof answer != 'undefined')) {
            if($scope.operation.result == answer.result){
                $scope.buttonText = 'OK !';
            } else {
                $scope.buttonText = "Incorrect, recommencez svp";
            }
            } else {
                $scope.buttonText = "Veuillez saisir un résultat svp";
        }
        console.log($scope.submitter)
    }
})

.controller('AccountCtrl', function($scope) {
});
