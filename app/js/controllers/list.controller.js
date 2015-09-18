(function() {
    'use strict';

    angular
        .module('list.controller', [])
        .controller('ListController', function ($scope, Items) {
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            $scope.items = Items.all();
            $scope.remove = function (item) {
                Items.remove(item);
            };
        });
})();