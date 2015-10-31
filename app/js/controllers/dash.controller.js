(function() {
    'use strict';

    angular
        .module('dash.controller', [])
        .controller('DashController', function ($scope, $ionicLoading, Items, defaultItems, $localStorage) {
            if (defaultItems.length > 0) { $localStorage.shopperItems = defaultItems; }
            var items;
            items = Items.all();
            var needMore = '';
            var lastShop;
            for (var j = 0; j < items.length; j++) {
              //find item(s) that need to be bought again

              //find date closest to today's date from lastBought
              if (items[j].lastBought) {
                if (!lastShop) {
                  var n = new Date(items[j].lastBought);
                  lastShop = n.toLocaleDateString("en-US");
                }
                else if (items[j] > lastShop) {
                  var d = new Date(items[j].lastBought);
                  lastShop = d.toLocaleDateString("en-US");
                }
              }
            }
            var size = 0;
            for (var i = 0; i < items.length; i++) {
              //find the # of items on list
              if (items[i].selected) {
                size++;
              }
            }
            $scope.size = size;
            $scope.notices = {
              needMore: needMore
            };
            $scope.history = {
              lastShop: lastShop
            };
      });
})();
