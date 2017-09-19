angular.module('mealpal', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'new',
        url: '/new',
        templateUrl: './templates/new-view.html',
        controller: 'NewController'
      })
      .state({
        name: 'meal',
        url: '/meal',
        controller: 'MealController'
      })
      .state({
        name: 'receipt',
        url: '/receipt',
        controller: 'ReceiptController'
      })
      // .state({
      //   name: '404',
      //   url: '/404',
      //   template: "<p>Not Found</p>"
      // })
      //$urlRouterProvider.otherwise('404')
  });

  // '/templates/new-view.html'
