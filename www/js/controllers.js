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
        }
    })

    .controller('RomainsCtrl', function($scope, Romains) {
        $scope.romains = Romains.all();
    })

    .controller('RomainLireCtrl', function($scope, $stateParams, Romains) {
        $scope.romain = Romains.lire();
        $scope.buttonText = 'Vérifier';
        $scope.verify = function(answer) {
            if((typeof $scope.romain.result != 'undefined')
                &&
                (typeof answer != 'undefined')) {
                if($scope.romain.result == answer.result){
                    $scope.buttonText = 'OK !';
                } else {
                    $scope.buttonText = "Incorrect, recommencez svp";
                }
            } else {
                $scope.buttonText = "Veuillez saisir un résultat svp";
            }
        }
    })

    .controller('RomainEcrireCtrl', function($scope, $stateParams, Romains) {
        $scope.romain = Romains.ecrire();
        $scope.buttonText = 'Vérifier';
        $scope.verify = function(answer) {
            if((typeof $scope.romain.result != 'undefined')
                &&
                (typeof answer != 'undefined')) {
                if($scope.romain.result == answer.result){
                    $scope.buttonText = 'OK !';
                } else {
                    $scope.buttonText = "Incorrect, recommencez svp";
                }
            } else {
                $scope.buttonText = "Veuillez saisir un résultat svp";
            }
        }
    })

    .controller('RomainDetailCtrl', function($scope, $stateParams, Romains) {
        $scope.romain = Romains.get($stateParams.romainId);
        $scope.buttonText = 'Vérifier';
        $scope.verify = function(answer) {
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
        }
    });
