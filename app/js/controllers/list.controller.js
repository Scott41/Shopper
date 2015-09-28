(function() {
    'use strict';

    angular
        .module('list.controller', ['ngStorage'])
        .controller('ListController', function ($scope, $localStorage, Items) {
            //$scope.$on('$ionicView.enter', function(e) {
            //
            //});

            if ($localStorage.itemSort === null || undefined) {
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

            $scope.toggleItem = function (item) {
                if (item.selected) item.selected = false;
            };
            $scope.updateSort = function () {
                $localStorage.itemSort = $scope.itemSort.selectedSort;
            };
        });
})();
