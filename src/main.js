import ControllersModule from 'js/controllers';
import ServicesModule from 'js/services';
import 'less/main.less';

angular.module('demo', ['ui.router', ControllersModule, ServicesModule])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController as Home',
    });
  $urlRouterProvider.otherwise('/home');
});
