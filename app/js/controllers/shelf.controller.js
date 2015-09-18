(function() {
    'use strict';

    angular
        .module('shelf.controller', [])
        .controller('ShelfController', function ($scope, Items) {
            $scope.settings = {
                enableFriends: true
            };
        });
})();