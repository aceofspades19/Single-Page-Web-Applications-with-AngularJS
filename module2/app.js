(function() {
    'use strict'; 
     var app = angular.module("ShoppingListCheckOff", []);


    app.controller("ToBuyController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
     var buy = this; 

     buy.itemName = ""; 
     buy.itemQuantity = ""; 

     buy.items = ShoppingListCheckOffService.getBuyItems(); 

     buy.buyItem = function(name, quantity){
         ShoppingListCheckOffService.buyItem(name, quantity); 
     }

    }]);
    
    app.controller("AlreadyBoughtController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
        var bought = this; 
        bought.items = ShoppingListCheckOffService.getBoughtItems(); 

        bought.getBoughtItems = function(){
            return ShoppingListCheckOffService.getBoughtItems(); 
        }

    }]); 

    app.service('ShoppingListCheckOffService', function() {
        var toBuyItems = [{name: "Cookies", quantity: "10"}, {name: "Chips", quantity: "2"}, {name: "Coca Cola", quantity: "3"},
                                                                                    {name: "Salami", quantity: "6"}, {name: "Fries", quantity: "100"}];
        var boughtItems = [];
        var service = this; 

        service.addBuyItems = function(itemName, quantity){
            var item = {
                name: itemName,
                quantity: quantity
            };
            toBuyItems.push(item); 
        };

        service.buyItem = function(itemName, quantity){
            var item = {
                name: itemName,
                quantity: quantity
            };
            var index =  toBuyItems.indexOf(item); 
            toBuyItems.splice(index, 1); 

            boughtItems.push(item); 
        };

        service.getBoughtItems = function(){
            return boughtItems; 
        };

        service.getBuyItems = function(){
            return toBuyItems; 
        };
    


    }); 

})();