(function() {
    'use strict';

    angular
        .module('itemDetail.controller', [])
        .controller('ItemDetailController', function ($scope, $stateParams, Items) {
            $scope.item = Items.get($stateParams.id);
        });
})();