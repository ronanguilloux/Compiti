angular.module('starter.services', [])


    .factory('Romains', function() {

        var toRoman = function(n) {
            var r = '',
                decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
            for (var i = 0; i < decimals.length; i++) {
                while (n >= decimals[i]) {
                    r += roman[i];
                    n -= decimals[i];
                }
            }
            return r;
        };
        var count = 10;
        var min= 0;
        var max = 50;
        var getElem = function() {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        var operations = [
            {
                id: 0, name: 'Addition', icon: 'ion-ios7-plus-empty', operator: '+',
                elem0: getElem(), elem1: getElem()
            },
            {
                id: 1, name: 'Soustraction', icon: 'ion-ios7-minus-empty', operator: '-',
                elem0: getElem(), elem1: getElem()
            }
        ];
        var getResult = function(operation) {
            switch(operation.id) {
                case 0:
                    return operation.elem0 + operation.elem1;
                    break;
                case 1:
                    return operation.elem0 - operation.elem1;
                    break;
                default:
                    throw "operations unknown";
            }
        };

        return {
            all: function() {
                return operations;
            },
            lire: function() {
                var elem = getElem();
                return {
                    title:  'Lire en chiffres romains',
                    value:  elem,
                    elem:   toRoman(elem),
                    result: elem
                };
            },
            ecrire: function() {
                var elem = getElem();
                return {
                    title:  'Écrire en chiffres romains',
                    elem:   elem,
                    result: toRoman(elem)
                };
            },
            get: function(operationId) {
                var operation = operations[operationId],
                    result = getResult(operation);
                return {
                    'operation':  operation,
                    'arabics' : {
                        'result': result
                    },
                    'romans' : {
                        'result':   toRoman(result)
                    }
                };
            }
        }
    })

    .factory('Operations', function() {

        var operations = [
            { id: 0, name: 'Addition', icon: 'ion-ios7-plus-empty', operator: '+'},
            { id: 1, name: 'Multiplication', icon:'ion-ios7-close-empty', operator: 'x' },
            { id: 2, name: 'Soustraction', icon:'ion-ios7-minus-empty', operator: '-' },
            { id: 3, name: '(Division)', icon:'ion-ios7-checkmark-empty', operator: '/' },
        ];

        var min =      0,
            max =      500;
        var elem0 =    Math.floor(Math.random() * (max - min)) + min,
            elem1 =    Math.floor(Math.random() * (max - min)) + min;
        var result =    function(id) {
            switch(id) {
                case '0':
                    return elem0 + elem1;
                    break;
                case '1':
                    return elem0 * elem1;
                    break;
                case '2':
                    return elem0 - elem1;
                    break;
                case '3':
                    return elem0 / elem1;
                    break;
                default:
                    throw "operation unknown"
            }
        }

        return {
            all: function() {
                return operations;
            },
            get: function(operationId) {
                return {
                    details:  operations[operationId],
                    result:   result(this.details)
                };
            }
        }
    });
