toDosApp.controller('toDosListsCtrl', ['$scope', toDosListsCtrl]);

function toDosListsCtrl($scope) {
	var tasksLists = [];
	tasksLists.push({"name": "Grocery", "id": 100});
	tasksLists.push({"name": "Movies to Watch", "id": 200});
	tasksLists.push({"name": "Work items to finish", "id": 300});
	tasksLists.push({"name": "Cleanup work items", "id": 400});

	$scope.tasksLists = tasksLists;
}