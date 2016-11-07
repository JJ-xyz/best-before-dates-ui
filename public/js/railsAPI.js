(function(){
  console.log("===== API talking port 3000 =====");
  angular.module('bestBeforeDates')
    .controller('railsAPI', ['$http', railsAPI]);

  function railsAPI($http){

    var self = this;
    var rootUrl = "http://localhost:3000";

    this.currentUser = null;
    this.editedItem  = {};
    this.showEditForm = false;
    this.username     = '';
    this.password     = '';
    this.signupusername = null;
    this.signuppassword = null;
    this.myItems = [];

    this.newItem = {
      name: null,
      purchaseDate: null,
      expirationDate: null,
      whereToBuy: null,
      inUse: null,
      upcNumber: null,
    };

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

    function getAllHouseholds(household) {
      $http({
        method: 'GET',
        url: `${rootUrl}/api/households`,
        data: household,
        responseType : 'json'
      })
      .then(function(response){
        self.Households = response.data;
        console.log("HouseholdList", response.data);
      })
      .catch((err) => {console.log(err) });
    }

    function getOneHousehold(householdId) {
      $http({
        method: 'GET',
        url: `${rootUrl}/api/households/${householdId}`,
        data: householdId,
        responseType : 'json'
      })
      .then(function(response){
        self.Household = response.data;
        console.log("oneHousehold", response.data);
      })
      .catch((err) => {console.log(err) });
    }


    // Public calls
    this.getAllItems = getAllItems;
    this.getOneItem = getOneItem;
    this.getAllHouseholds = getAllHouseholds;
    this.getOneHousehold = getOneHousehold;



  }
})()
