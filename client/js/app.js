var toDosApp = angular.module('toDosApp', ['ngRoute']);

toDosApp.config(['$routeProvider', setRouteConfigurations]);

function setRouteConfigurations($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/tasksList.html'
		})
		.when('/TasksList', {
			redirectTo: '/'
		})
		.when('/NotFound', {
			templateUrl: 'views/notFound.html'
		})
		.otherwise({
			redirectTo: '/404'
		});
}