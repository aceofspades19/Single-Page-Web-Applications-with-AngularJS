(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
          url: '/categories',
          templateUrl: 'src/data/template/category-list.template.html',
          controller: 'CategoryListController as categoryList',
          resolve: {
            items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })

        .state('items', {
          url: '/items/:categoryShortName',
          templateUrl: 'src/data/template/item-list.template.html',
          controller: 'ItemListController as itemList',
          resolve: {
            items: ['$stateParams', 'MenuDataService',
                  function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                  }]
            }
        })
        ;
  }
})();
