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
        var operations = [
            { id: 0, name: 'Addition', icon: 'ion-ios7-plus-empty', operator: '+'},
            { id: 1, name: 'Soustraction', icon:'ion-ios7-minus-empty', operator: '-' },
        ];

        var min =      0,
            max =      50;
        var elem0 =    Math.floor(Math.random() * (max - min)) + min,
            elem1 =    Math.floor(Math.random() * (max - min)) + min;
        var result =    function(id) {
            switch(id) {
                case '0':
                    return elem0 + elem1;
                    break;
                case '1':
                    return elem0 - elem1;
                    break;
            }
        };
        var ecrire =    function() {
            switch(id) {
                case '0':
                    return elem0 + elem1;
                    break;
                case '1':
                    return elem0 - elem1;
                    break;
            }
        };

        return {
            all: function() {
                return operations;
            },
            lire: function() {
                return {
                    'details':  { name: 'Lire' },
                    'elem':     toRoman(elem0),
                    'result':   elem0
                };
            },
            ecrire: function() {
                return {
                    'details':  { name: 'Écrire' },
                    'elem':     elem0,
                    'result':   toRoman(elem0)
                };
            },
            get: function(operationId) {
                return {
                    'details':  operations[operationId],
                    'arabics' : {
                        'elem0':    elem0,
                        'elem1':    elem1,
                        'result':   result(operationId)
                    },
                    'romans' : {
                        'elem0':    toRoman(elem0),
                        'elem1':    toRoman(elem1),
                        'result':   toRoman(result(operationId))
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
            }
        }

        return {
            all: function() {
                return operations;
            },
            get: function(operationId) {
                return {
                    'details':  operations[operationId],
                    'elem0':    elem0,
                    'elem1':    elem1,
                    'result':   result(operationId)
                };
            }
        }
    });
