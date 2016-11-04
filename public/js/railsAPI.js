(function(){
  console.log("===== API talking port 3000 =====");
  angular.module('bestBeforeDates', [])
    .controller('railsAPI', ['$http', railsAPI]);

  function railsAPI($http){

    var self = this;
    var rootUrl = "http://localhost:3000";


    $http({
      method: 'GET',
      url: `${rootUrl}/api/items`
    })
    .then(function(response){
      self.itemList = response.data;
      console.log("ItemList", response.data);
    })



    // function getAllItems(household) {
    //   $http.get(`${rootUrl}/api/items`, household)
    //   .then(function(response) {
    //     self.Items = response;
    //     console.log("ItemList here", self.Items);
    //     // $state.go('**the partial**', {url: '/the-url'})
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }
  }


  })()
