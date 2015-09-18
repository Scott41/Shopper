(function() {
  'use strict';

  angular.module('item.service', ['ngStorage'])

      .factory('Items', function ($localStorage) {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var items = [
          {
            id: 0,
            name: 'veggies',
            details: '',
            lastBought: new Date()
          },
          {
            id: 1,
            name: 'pizza',
            details: '',
            lastBought: new Date()
          }
        ];

        return {
          all: function () {
            console.log($localStorage);
            return items;
          },
          remove: function (item) {
            items.splice(items.indexOf(item), 1);
          },
          get: function (itemId) {
            for (var i = 0; i < items.length; i++) {
              if (items[i].id === parseInt(itemId)) {
                return items[i];
              }
            }
            return null;
          }
        };
      });
})();