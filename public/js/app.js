(function(){
    angular.module('bestBeforeDates', [])
      .controller('appController', appController);
      console.log('hey');
      appController.$inject = ['$http', 'railsAPI']

      function appController($http, railsAPI){
        // Initialize
        var self = this;
        self.items = [];
        self.households = [];

        railsApi.getAllItems(household)
          .then(function(items){
            self.items = items;
          })
      }


})();
