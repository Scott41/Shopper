(function() {
    'use strict';

    angular
        .module('list.controller', [])
        .controller('ListController', function ($scope, $ionicLoading, $localStorage, Items) {
            //$scope.$on('$ionicView.enter', function(e) {
            //
            //});

            if (!$localStorage.itemSort) {
                $localStorage.itemSort = {id: 1, name: 'Alphabetical'};
            }
            $scope.itemSort = {
                options: [
                    {id: '1', name: 'Alphabetical'},
                    {id: '2', name: 'Aisle Number'}
                ],
                selectedSort: $localStorage.itemSort
            };
            $scope.items = Items.all();
            $scope.buyItem = function (item) {
                item.timesBought++;
                item.lastBought = new Date();
                if (item.selected) item.selected = false;
            };
            $scope.updateSort = function () {
                $localStorage.itemSort = $scope.itemSort.selectedSort;
            };
        });
})();
