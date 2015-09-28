(function() {
    'use strict';

    angular
        .module('dash.controller', [])
        .controller('DashController', function ($scope, Items) {
            var items = Items.all();
            var needsMore = '';
            var lastShopped = "never";
            var size = 0;
            for (var i = 0; i < items.length; i++) {
              if (items[i].selected) {
                size++;
              }
            }
            $scope.size = size;

        });
})();
