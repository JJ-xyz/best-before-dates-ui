(function(){
  angular.module('bestBeforeDates')
    .controller('railsAPI', railsAPI);


  function railsAPI($http){

    var self = this;
    var rootUrl = "http://localhost:3000"

    $http.get(`${rootUrl}/api/households`)
      .then(function(response) {
          self.households = response.data;
          console.log(self.households[0].name);
    });
  }
})()
