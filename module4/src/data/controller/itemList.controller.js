(function() {
  'use strict',

  angular.module('data')
    .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['items'];
  function ItemListController(items) {
    var itemList = this;
    itemList.items = items.data.menu_items;
  }

})();
