(function(){
  console.log("===== API talking port 3000 =====");
  angular.module('bestBeforeDates', [])
    .controller('railsAPI', ['$http', railsAPI]);

  function railsAPI($http){

    var self = this;
    var rootUrl = "http://localhost:3000";

  self.signup = function(userPass){
    $http.post(`${rootUrl}/api/users`, {user: {username: userPass.username, password: userPass.password }})
    .then(function(response) {
      self.user = response.data.user
      localStorage.setItem('user_id', JSON.stringify(response.data.user.id));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      self.getUserAlbums(self.user.id);
      $state.go('home', {url: '/user', user: response.data.user});
    })
    .catch(function(err) {
      console.error(err);
    });
  }

    // // User login
    // function login(userCheck){
    //   $http.post(`${rootUrl}/api/users/login`, {user: {username: userCheck.username, password: userCheck.password}})
    //   .then(function(response){
    //     self.user = response.data.user
    //     localStorage.setItem('user_id', response.data.user.id);
    //     localStorage.setItem('token', response.data.token);
    //     //self.getUserAlbums(self.user.id);
    //     //$state.go('home', {url: '/user-home', user: response.data.user});
    //   })
    //   .catch(function(err){
    //     console.error(err);
    //   })
    // }

    // // Logout
    //   function logout = function() {
    //     self.user = null;
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user_id');
    //     //$state.go('welcome', {url: '/'});
    //   }


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
