(function(){
  angular.module('bestBeforeDates', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){


    $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: 'index.html',
    })
    .state('signup',{
      url: '/signup',
      templateUrl: 'signup.html',
    })
    .state('user',{
      url: '/user',
      templateUrl: 'user.html',
    });



    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  } // end MainRouter function

})();
// console.log('app.js');
