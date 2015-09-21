(function() {
    'use strict';

    angular
        .module('list.controller', ['ngStorage'])
        .controller('ListController', function ($scope, $localStorage, Items) {
            //$scope.$on('$ionicView.enter', function(e) {
            //
            //});
            if ($localStorage.itemSort == null || undefined) {
                $localStorage.itemSort = 'Alphabetical'
            }
            $scope.itemSort = $localStorage.itemSort;
            $scope.items = Items.all();

            $scope.toggleItem = function (item) {
                if (item.selected) item.selected = false;
            };
        });
})();