(function(){
  console.log("===== API talking port 3000 =====");
  angular.module('bestBeforeDates', [])
    .controller('railsAPI', ['$http', railsAPI]);

  function railsAPI($http){

    var self = this;
    var rootUrl = "http://localhost:3000";


    function getAllItems(household){
      $http({
        method: 'GET',
        url: `${rootUrl}/api/items`,
        data: household,
        responseType: 'json'
      })
      .then(function(response){
        self.itemList = response.data;
        console.log("ItemList", response.data);
      })
      .catch((err) => { console.log(err) });
    }

    function getOneItem(household, itemId){
      $http({
        method: 'GET',
        url: `${rootUrl}/api/items/${itemId}`,
        data: household,
        responseType: 'json'
      })
      .then(function(response){
        self.oneItem = response.data;
        console.log("OneItem", response.data);
      })
      .catch((err) => { console.log(err) });
    }


    // Public calls
    this.getAllItems = getAllItems;
    this.getOneItem = getOneItem;


  }
})()
