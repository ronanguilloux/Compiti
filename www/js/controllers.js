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

    .controller('RomainsCtrl', function($scope, Romains) {
        $scope.romains = Romains.all();
    })

    .controller('RomainDetailCtrl', function($scope, $stateParams, Romains) {
        $scope.romain = Romains.get($stateParams.romainId);
        $scope.buttonText = 'Vérifier';
        $scope.verify = function(answer) {
            console.log(answer, $scope);
            if((typeof $scope.romain.romans.result != 'undefined')
                &&
                (typeof answer != 'undefined')) {
                if($scope.romain.romans.result == answer.result){
                    $scope.buttonText = 'OK !';
                } else {
                    $scope.buttonText = "Incorrect, recommencez svp";
                }
            } else {
                $scope.buttonText = "Veuillez saisir un résultat svp";
            }
            console.log($scope.submitter)
        }
    });
