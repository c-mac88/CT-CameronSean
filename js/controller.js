(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController() {

        //using vm
        var vm = this;

        vm.logs = [];

        for (var i = 1; i <= 100; i++) {
            if (i % 5 == 0 && i % 3 == 0) {
                vm.logs.push({'value': i, 'name':'CameronSean'});
            } else if (i % 3 == 0) {
                vm.logs.push({'value': i, 'name':'Cameron'});
            } else if (i % 5 == 0) {
                vm.logs.push({'value': i, 'name':'Sean'});
            } else {
                vm.logs.push({'value': i, 'name': i});
            };

        };

        console.log(vm.logs)
    };
})();
