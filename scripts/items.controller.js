(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items', '$stateParams'];
  function ItemsController(items, $stateParams) {
    var itemCtrl = this;
    itemCtrl.items = items;
    itemCtrl.categoryName = $stateParams.categoryName; 
  }
})();
