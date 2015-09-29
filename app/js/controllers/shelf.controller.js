(function () {
    'use strict';

    angular
        .module('shelf.controller', [])
        .controller('ShelfController', function ($scope, $ionicLoading, $location, $ionicPopup, Items) {
            $scope.items = Items.all();
            $scope.addItemFormState = false;
            $scope.on = false;
            $scope.search = {
              text: ''
            };
            $scope.toggle = function (item) {
              item.selected = !item.selected;
            };
            $scope.toggleSearchBar = function () {
              $scope.on = !$scope.on;
            };
            $scope.toggleAddItemFormState = function () {
              $scope.addItemFormState = !$scope.addItemFormState;
              if ($scope.addItemFormState) {
                $scope.showAddItemPopup();
              }
            };
            $scope.toggleEditItemFormState = function () {
              $scope.editItemFormState = !$scope.editItemFormState;
              if ($scope.editItemFormState) {
                $scope.showEditItemPopup();
              }
            };
            $scope.remove = function (item) {
              Items.remove(item);
            };
            $scope.go = function (path) {
              $location.path(path);
            };
            $scope.showAddItemPopup = function () {
              $scope.data = {};
              var myPopup = $ionicPopup.show({
              templateUrl: 'views/popups/add-item.html',
              title: 'Add a new item',
              cssClass: 'alert-offset-bottom',
              scope: $scope,
              buttons: [
                {
                   text: 'Cancel',
                   onTap: function() {
                     return $scope.toggleAddItemFormState();
                   }
                },
                {
                  text: '<b>Save</b>',
                  type: 'button-positive',
                  onTap: function(e) {
                    if (!$scope.data.itemName) {
                      e.preventDefault();
                    } else {
                      Items.add($scope.data.itemName);
                      $scope.items = Items.all();
                      return $scope.toggleAddItemFormState();
                    }
                  }
                }
              ]
            });
          };
          $scope.showEditItemPopup = function(itm) {
            var item = itm;
            $scope.data = {
              item: item,
              itemName: item.name
            };
            var myPopup = $ionicPopup.show({
            templateUrl: 'views/popups/edit-item.html',
            title: 'Edit this item',
            cssClass: 'alert-offset-bottom',
            scope: $scope,
            buttons: [
              {
                 text: 'Cancel',
                 onTap: function() {
                   return;
                 }
              },
              {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) {
                  if (!$scope.data.itemName) {
                    e.preventDefault();
                  } else {
                    item.name = $scope.data.itemName;
                    Items.update(item);
                    return;
                  }
                }
              }
            ]
          });
        };
      });
})();
