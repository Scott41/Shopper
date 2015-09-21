(function() {
    'use strict';

    angular
        .module('shelf.controller', [])
        .controller('ShelfController', function ($scope, Items) {
            $scope.items = Items.all();
            $scope.toggle = function (item) {
                if (!item.selected) item.selected = true;
            };
            $scope.edit = function (item) {
                return;
            };
            $scope.remove = function (item) {
                Items.remove(item);
            };
        });
})();