(function(){
  angular.module('bestBeforeDates', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    .state('index',{
      url: '/index',
      templateUrl: 'index.html'
      // controller: 'AuthController',
      // controllerAs: 'authCtrl'
    })
    .state('signup',{
      url: '/signup',
      templateUrl: 'signup.html',
      // controller: 'AuthController',
      // controllerAs: 'authCtrl'
    })
    .state('user',{
      url: '/user',
      templateUrl: 'user.html',
      // controller: 'AuthController',
      // controllerAs: 'authCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

})()
console.log('app.js');
