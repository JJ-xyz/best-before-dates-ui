(function() {
  angular
	  .module('bestBeforeDays', ['ui.router'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html",
      })
      .state('items', {
        url: "/items",
        templateUrl: "items.html",
      })
      .state('logout', {
        url: "/",
        templateUrl: "home.html",
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "signup.html",
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})()
