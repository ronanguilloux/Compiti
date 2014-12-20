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

        $scope.results = 0;
        $scope.total = 10;
        $scope.reset = function(){
            if($scope.results === $scope.total) {
                return false;
            }
            $scope.answer='';
            $scope.romain = Romains.lire();
            $scope.defaultState = {
                title: {
                    text: $scope.romain.elem,
                    class: 'positive'
                },
                input: {
                    value: ''
                },
                btn: {
                    show: false,
                    class: '',
                    text: ''
                }
            };
            $scope.state = angular.copy($scope.defaultState);
        };
        $scope.verify = function(userResponse) {
            $scope.answer = userResponse;
            if((typeof $scope.romain.result != 'undefined')
                &&
                (typeof $scope.answer != 'undefined')) {
                if($scope.romain.result == $scope.answer){
                    $scope.results++;
                    $scope.state = {
                        title: {
                            text: $scope.romain.elem,
                            class: 'balanced'

                        },
                        input: {
                            value: $scope.answer
                        },
                        btn: {
                            show: true,
                            class: 'ion-checkmark-circled',
                            text: 'OK!'
                        }
                    };
                    if($scope.results === $scope.total) {
                        $scope.state.btn.text = 'BRAVO!';
                        $scope.state.btn.class = 'ion-star';
                    }
                }
            }
        }
        $scope.reset();
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
