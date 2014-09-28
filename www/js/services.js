angular.module('starter.services', [])

.factory('Operations', function() {

    var operations = [
        { id: 0, name: 'Addition', icon: 'ion-ios7-plus-empty', operator: '+'},
        { id: 1, name: 'Multiplication', icon:'ion-ios7-close-empty', operator: 'x' },
        { id: 2, name: 'Soustraction', icon:'ion-ios7-minus-empty', operator: '-' },
        { id: 3, name: '(Division)', icon:'ion-ios7-checkmark-empty', operator: '/' }
    ];

    var min =           0,
        max =           500;
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
