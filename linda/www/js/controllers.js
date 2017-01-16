angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('leagueTeamsCtrl', function($scope, $stateParams,$http) {
  console.log("stateParams:", $stateParams);
 $scope.leagueId = $stateParams.id;
 console.log($stateParams.id);
 
 
 hello();

function hello(){
   
var req = {
 method: 'GET',
 url: 'http://api.football-data.org/v1/competitions/'+$scope.leagueId+'/teams',
 headers: {
   'X-Auth-Token': '5a0f35ed24574532baa841bcef3abf1a'
 },
   dataType: 'json',
}

$http(req)
  .then(function(response){
  $scope.teams = response.data.teams;
  //$ionicLoading.hide();
  console.log("response",response);
  console.log("teams",$scope.teams);
  
  }, function(){
    alert("error");
  });
}




})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$http) {

hi();


function hi(){
   
  var req = {
 method: 'GET',
 url: 'http://api.football-data.org/v1/competitions',
 headers: {
   'X-Auth-Token': '5a0f35ed24574532baa841bcef3abf1a'
 },
   dataType: 'json',
}

$http(req)
  .then(function(response){
  $scope.comp = response.data;
  //$ionicLoading.hide();
  console.log("response",response);
  console.log("comp",$scope.comp);
  }, function(){
    alert("error");
  });
}

});


