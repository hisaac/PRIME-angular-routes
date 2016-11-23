var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/fox-mulder' ,{
      templateUrl: '/views/templates/foxmulder.html',
      controller: 'FoxMulderController',
      controllerAs: 'foxmulder'
    })
    .when('/fox-mccloud' ,{
      templateUrl: '/views/templates/foxmccloud.html',
      controller: 'FoxMcCloudController',
      controllerAs: 'foxmccloud'
    })
    .when('/miles-prower' ,{
      templateUrl: '/views/templates/milesprower.html',
      controller: 'MilesProwerController',
      controllerAs: 'milesprower'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "There are many fictional fox characters. Click the links above to see three of the best ones.";
});

app.controller('FoxMulderController', function() {
  console.log('fox mulder controller running');
  var self = this;
  self.message = "Fox Mulder is a special agent!";
  self.image = "https://s-media-cache-ak0.pinimg.com/originals/06/54/e2/0654e2dec7209394aaf25a1323a47882.jpg";
});

app.controller('FoxMcCloudController', function() {
  console.log('Fox McCloud controller running');
  var self = this;
  self.message = "Fox McCloud (aka Starfox) is a spaceship pilot!";
  self.image = "http://img06.deviantart.net/c07c/i/2011/121/7/9/fox_mccloud_by_kzmaster-d3fbu9j.jpg";
});

app.controller('MilesProwerController', function() {
  console.log('Miles Prower controller running');
  var self = this;
  self.message = "Miles Prower is a super fast runner with two tails!";
  self.image = "http://img12.deviantart.net/eef8/i/2010/363/5/7/tails_3_by_yenristar-d35y1um.png";
});
