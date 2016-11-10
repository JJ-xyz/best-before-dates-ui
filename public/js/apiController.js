(function(){
  angular
	.module("bestBeforeDays")
	.controller("ApiController", ApiController);

	function ApiController($http, $state){

		var self = this;
    var rootUrl = "http://localhost:3000";

    self.signup = signup;
    self.login = login;
    self.logout = logout;

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

    // --- Authorization Section --- No separation of concenrs yet
    function login(userPass) {
      console.log("userFromAngular>>>", userPass);                    // to be deleted
      $http({
        method: 'POST',
        url: `${rootUrl}/api/users/login`,
        data: {username: userPass.username, password: userPass.password},
        responseType: 'json'
      })
      .then(function(response) {
        if (response.data.token) {
          self.currentUser = userPass.username;
          localStorage.setItem('activeUsername', userPass.username);
          localStorage.setItem('activeToken', response.data.token);
          getAllItems();
          $state.go('items', {url: '/', token: response.data.token});
        } else {
          self.currentUser = '';
          localStorage.setItem('activeUsername', '');
          localStorage.setItem('activeToken', '');
        }
        console.log("The user is>>>",userPass.username);              // to be deleted
        console.log("The token is>>>", response.data.token)           // to be deleted
      })
      .catch((err) => {
        console.log(err);
      });
     }

     function logout() {
       self.currentUser = '';
       localStorage.setItem('activeUsername', '');
       localStorage.setItem('activeToken', '');
       $state.go('home')
      }

      function signup(account) {
        console.log("accountFromAngular>>>", account);
        $http({
          method: 'POST',
          url: `${rootUrl}/api/users`,
          data: {
            username: account.username,
            password: account.password,
            email: account.email,
            household_id: 1},   // temporarely One household only
          responseType: 'json'
        })
        .then(function(response) {
          console.log("The user is>>>",account.username);                 // to be deleted
          $state.go('home')
        })
        .catch((err) => {
          console.log(err);
        });
       }

	}

})()
