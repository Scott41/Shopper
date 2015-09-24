(function() {
    'use strict';

    angular
        .module('shelf.controller', [])
        .controller('ShelfController', function ($scope, $location, Items) {
            $scope.items = Items.all();
            $scope.toggle = function (item) {
                if (!item.selected) {
                  item.selected = true;
                } else {
                  item.selected = false;
                }
            };
            $scope.remove = function (item) {
                Items.remove(item);
            };
            $scope.go = function (path) {
              $location.path(path);
            };
        });
})();
