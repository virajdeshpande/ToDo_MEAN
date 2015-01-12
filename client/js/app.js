var toDosApp = angular.module('toDosApp', ['ngRoute']);

toDosApp.config(['$routeProvider', '$locationProvider', registerRoutes]);

function registerRoutes($routeProvider, $locationProvider) {
	
	// requireBase is true by default. If <base href> is not present in the document then just providing enabled: true will cause an error saying
	// base is not available. If you don't have the <base> tag in DOM then just set it false here.

	$locationProvider.html5Mode({enabled: true, requireBase: false});

	// prefer not to pass controller argument along with templateUrl here. When you are looking at the view file you want to know which controller that view is using
	// If controller is mentioned here then you have to switch the files back and forth. Instead have conroller mentioned in view with ng-controller directive

	$routeProvider
		.when('/', {
			templateUrl: 'views/tasksList.html'
		})
		.when('/TasksList', {
			templateUrl: 'views/tasksList.html'
		})
		.when('/NotFound', {
			templateUrl: 'views/404.html'
		})
		.otherwise({
			redirectTo: '/NotFound'
		});
}