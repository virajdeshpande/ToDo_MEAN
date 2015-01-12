toDosApp.controller('notFoundController', ['$scope', '$location', notFoundController]);

function notFoundController($scope, $location) {
	var historyCount = window.history.length;
	$scope.notFoundPath = window.history[historyCount - 2];
}