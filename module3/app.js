(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .factory('MenuListFactory', MenuListFactory)
    .directive('foundItems', ShoppingListDirective)

    
    
    function ShoppingListDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          found: '<',
          onRemove: '&'
        },
        controller: ShoppingListDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };
    
      return ddo;
    }
    
    
    function ShoppingListDirectiveController() {
      var list = this;

    }
    
    
    NarrowItDownController.$inject = ['MenuListFactory'];
    function NarrowItDownController(MenuListFactory) {
      var list = this;
    
      // Use factory to create new shopping list service
      var menuList = MenuListFactory();
    
      list.found = [];
      list.searchTerm = ''; 
     
    
    
      list.addItems = function () {
        menuList.getMatchedMenuItems(list.searchTerm).then(function(){
            list.found = menuList.getItems(); 
        });
        
      };
    
      list.removeItem = function (itemIndex) {
        menuList.removeItem(itemIndex);
        list.found = menuList.getItems(); 

      };
    }
    
   
    function MenuSearchService($http) {
      var service = this;
    
      // List of shopping items
      var items = [];
    
      service.getMatchedMenuItems = function (searchTerm) {
        var ApiBasePath = "https://davids-restaurant.herokuapp.com";
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
          }).then(function(result){
              result.data.menu_items.forEach(element => {
                   if(element.name.indexOf(searchTerm) != -1){
                       items.push(element.name);
                   }
              });
              items = items.filter(onlyUnique);
          });
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    MenuListFactory.$inject = ['$http']
    function MenuListFactory($http) {
      var factory = function () {
        return new MenuSearchService($http);
      };
    
      return factory;
    }
    
    })();