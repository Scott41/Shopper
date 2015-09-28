(function() {
    'use strict';

    angular
        .module('shelf.controller', [])
        .controller('ShelfController', function ($scope, $location, $ionicModal, $ionicPopup, Items) {
            // $ionicModal.fromTemplateUrl('views/modals/add-item.html', {
            //   scope: $scope,
            //   animation: 'slide-in-up'
            // }).then(function(modal) {
            //   $scope.modal = modal;
            // });
            // $scope.$on('modal.hidden', function() {
            //   $scope.toggleAddItemFormState()
            // });
            // $scope.$on('$destroy', function() {
            //   $scope.modal.remove();
            // });
            $scope.items = Items.all();
            $scope.addItemFormState = false;
            $scope.on = false;
            $scope.search = {
              text: ''
            };
            $scope.toggle = function (item) {
              return item.selected = !item.selected
            };
            $scope.toggleSearchBar = function () {
              return $scope.on = !$scope.on;
            };
            $scope.toggleAddItemFormState = function () {
              $scope.addItemFormState = !$scope.addItemFormState;
              return $scope.addItemFormState ? $scope.showPopup() : ''
            };
            $scope.remove = function (item) {
              Items.remove(item);
            };
            $scope.go = function (path) {
              $location.path(path);
            };
            $scope.showPopup = function() {
              $scope.data = {}
              var myPopup = $ionicPopup.show({
              templateUrl: 'views/popups/add-item.html',
              title: 'Add a new item',
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
                      $scope.toggleAddItemFormState();
                      return $scope.data.itemName;
                    }
                  }
                }
              ]
            });
          };
        });
})();
