angular.module('starter.services', [])

.factory('Operations', function() {

    var operations = [
        { id: 0, name: 'Addition' },
        { id: 1, name: 'Multiplication' },
        { id: 2, name: 'Soustraction' },
        { id: 3, name: '(Division)' }
    ];

    var min =           0,
        max =           500;
    var elem0 =    Math.floor(Math.random() * (max - min)) + min,
        elem1 =    Math.floor(Math.random() * (max - min)) + min;
    var result = function(id) {
        switch(id) {
            case '0':
                return elem0 + elem1;
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
