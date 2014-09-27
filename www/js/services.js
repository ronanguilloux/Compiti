angular.module('starter.services', [])

.factory('Operations', function() {

    var operations = [
        { id: 0, name: 'Additions' },
        { id: 1, name: 'Multiplications' },
        { id: 2, name: 'Soustractions' },
        { id: 3, name: '(Divisions)' }
    ];

    return {
        all: function() {
            return operations;
        },
        get: function(operationId) {
            return operations[operationId];
        }
    }
});
